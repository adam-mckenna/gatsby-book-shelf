/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      allContentfulBook {
        edges {
          node {
            isbn
          }
        }
      }
    }
  `)

  data.allContentfulBook.edges.forEach(({ node }) => {
    createPage({
      path: node.isbn,
      component: path.resolve(`./src/templates/book-detail.js`),
      context: {
        slug: node.isbn,
      },
    })
  })
}
