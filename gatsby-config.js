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
    description: `이규승의 블로그에 오신것을 환영합니다.`,
    author: `Gyu's`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gyu`s Blog',
        short_name: '규승로그',
        start_url: '/',
        background_color: `#ffffff`,
        theme_color: `#ff5733`,
        display: `minimal-ui`,
        icon: `static/favicon1.png`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          // default: require.resolve('./src/layout/BaseLayout.tsx'),
        },
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
