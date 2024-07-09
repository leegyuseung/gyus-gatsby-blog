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
      resolve: `gatsby-plugin-manifest`,
      options: {
        // name: this.siteMetadata.title,
        // short_name: this.siteMetadata.title,
        // description: this.siteMetadata.description,
        // start_url: `/`,
        // display: `standalone`,
        icon: `static/favicon1.png`, // This path is relative to the root of the site.
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
