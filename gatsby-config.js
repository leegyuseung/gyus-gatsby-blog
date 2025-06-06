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
    title: `규승의 블로그`,
    description: `규승의 블로그에 오신것을 환영합니다.`,
    author: `이규승`,
    siteUrl: `https://gyus-blog.netlify.app`,
    thumbnail: `https://gyus-blog.netlify.app/thumbnail.webp`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    `gatsby-plugin-robots-txt`,
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
        path: `${__dirname}/contents/tech/`,
        name: `tech`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents/diary/`,
        name: `diary`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents/tech/image/`,
        name: `tech_image`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents/diary/image/`,
        name: `diary_image`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        pedantic: true,
        gfm: true,
        plugins: [
          'gatsby-remark-code-buttons',
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
          {
            resolve: `gatsby-remark-smartypants`,
            options: {
              classPrefix: `language-`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: '규승의 블로그',
        short_name: '규승로그',
        start_url: '/',
        background_color: `#ffffff`,
        theme_color: `#ff5733`,
        display: `minimal-ui`,
        icon: `static/favicon1.png`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: ['**/*.{js,css,html,json,webp,png,jpg,svg}'],
        },
        precachePages: [`/`, `/about/*`, `/blog/*`], // 원하는 페이지를 캐싱할 수 있음
      },
    },
  ],
}
