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
        allContentfulComposePage(filter: { slug: { ne: "/" } }) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then((result) => {
      const page = result.data.allContentfulComposePage.edges;
      page.forEach((edge) => {
        createPage({
          path: `${edge.node.slug}/`,
          component: path.resolve(`./src/templates/page.tsx`),
          context: {
            slug: edge.node.slug,
          },
        });
      });
      resolve();
    });
  });

  return Promise.all([loadPages]);
};
