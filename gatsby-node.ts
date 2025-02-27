/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
import path from 'path'
import { GatsbyNode } from 'gatsby'

/* Setup Import Alias */
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {}
  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        pages: path.resolve(__dirname, 'src/pages'),
        images: path.resolve(__dirname, 'src/images'),
        utils: path.resolve(__dirname, 'src/utils'),
        hooks: path.resolve(__dirname, 'src/hooks'),
      },
    },
  })
}

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions
  const postTemplate = path.resolve('src/templates/postTemplate.tsx')

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allMdx.edges

  posts.forEach(({ node }) => {
    createPage({
      path: `/posts/${node.frontmatter.slug}`,
      component: postTemplate,
      context: {
        id: node.id,
      },
    })
  })
}
