require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.higorgeous.io`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google2: [
            {
              family: 'Poppins',
              axes: 'wght@200;400;600;700;900',
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.higorgeous.io`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-sitemap',
    //   options: {
    //     query: `
    //     {
    //       allContentfulPageWebsite(filter: {slug: {ne: "/404"}}) {
    //         edges {
    //           node {
    //             slug
    //           }
    //         }
    //       }
    //     }
    //   `,
    //     resolveSiteUrl: () => `https://www.higorgeous.io`,
    //     resolvePages: ({ allContentfulPageWebsite: { nodes: allPages } }) =>
    //       allPages.map((page) => ({ ...page[page.slug] })),
    //     serialize: ({ slug }) => ({
    //       url: slug,
    //     }),
    //   },
    // },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Gorgeous Charity Token`,
        short_name: `Gorgeous`,
        start_url: `/`,
        background_color: '#232129',
        theme_color: '#f9e9cc',
        display: 'standalone',
        icon: `src/images/icon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
  ],
};
