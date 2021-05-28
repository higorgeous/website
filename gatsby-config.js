require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
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
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Gorgeous Charity Token`,
        short_name: `Gorgeous`,
        start_url: `https://www.higorgeous.io`,
        background_color: '#232129',
        theme_color: '#f9e9cc',
        display: 'standalone',
        icon: `https://images.ctfassets.net/rko89ci1023p/2j5XNWBtQxWeyO9G0wviBQ/efd6d38c9f5916afa923449b77e6e276/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
