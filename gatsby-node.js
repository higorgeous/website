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
        websitePages: allContentfulPageWebsite(
          filter: { slug: { ne: "/404" } }
        ) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then((result) => {
      const websitePages = result.data.websitePages.edges;
      websitePages.forEach((edge) => {
        const { slug } = edge.node;
        createPage({
          path: slug,
          component: path.resolve(`./src/templates/page.tsx`),
          context: {
            slug,
          },
        });
      });
      resolve();
    });
  });

  return Promise.all([loadPages]);
};
