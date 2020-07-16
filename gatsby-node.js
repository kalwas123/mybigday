/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateNode = async ({
  node,
  actions,
  store,
  cache,
  createNodeId,
}) => {
  const { createNode } = actions

  let multipleImages = node.images

  if (node.internal.type === "Slider") {
    if (multipleImages.length > 0) {
      multipleImages.forEach(el => console.log(el))
      const images = await Promise.all(
        multipleImages.map(el =>
          createRemoteFileNode({
            url: `http://localhost:1337/${el.url}`,
            parentNodeId: node.id,
            store,
            cache,
            createNode,
            createNodeId,
          })
        )
      )

      multipleImages.forEach((image, i) => {
        image.localFile___NODE = images[i].id
      })
    }
  }
}

const path = require(`path`)
var slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/project.js`)
  const result = await graphql(`
    query queryProjects {
      allStrapiWedding {
        edges {
          node {
            id
            Name
          }
        }
      }
    }
  `)

  result.data.allStrapiWedding.edges.forEach(post => {
    const slugifedTitle = slugify(post.node.Name)
    createPage({
      path: "portfolio/" + slugifedTitle,
      component: blogPostTemplate,
      context: { id: post.node.id },
    })
  })
}
