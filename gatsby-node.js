// 「5.2.2 スラグを自動作成させる」で書くコード↓
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
// ここまで


// 「5.3.2 インフォメーション記事詳細」で追記するコード↓
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
 
  return graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }


  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/info-post.js`),
        context: {
          slug: node.fields.slug
        }
      })
  })

  return null
  })
}
// ここまで