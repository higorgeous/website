const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const path = require(`path`);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const loadPages = new Promise((resolve) => {
    graphql(`
      {
        allMdx {
          edges {
            node {
              frontmatter {
                type
                slug
              }
            }
          }
        }
      }
    `).then((result) => {
      const page = result.data.allMdx.edges;
      page.forEach((edge) => {
        const { type, slug } = edge.node.frontmatter;
        if (type === 'page') {
          createPage({
            path: slug ? `${slug}/` : `/`,
            component: path.resolve(`./src/templates/page.tsx`),
            context: {
              slug,
            },
          });
        } else if (type === 'news') {
          createPage({
            path: `news/${slug}/`,
            component: path.resolve(`./src/templates/news.tsx`),
            context: {
              slug,
            },
          });
        }
      });
      resolve();
    });
  });

  return Promise.all([loadPages]);
};
