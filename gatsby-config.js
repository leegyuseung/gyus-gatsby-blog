/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gyu's Blog`,
    description: `이규승의 블로그`,
    author: `Gyu's`,
    // siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    siteUrl: `https://gyu-seung.com/`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    'gatsby-plugin-emotion',
    // 'gatsby-plugin-helmet',
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-smartypants`,
            options: {
              classPrefix: `language-`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 768,
        quality: 100,
        withWebp: true,
      },
    },
    {
      resolve: `gatsby-remark-copy-linked-files`,
      options: {},
    },
    {
      resolve: `gatsby-remark-external-links`,
      options: {
        target: `_blank`,
        rel: `nofollow`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `static/favicon1.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents`,
        name: `blog`,
      },
    },
  ],
}
