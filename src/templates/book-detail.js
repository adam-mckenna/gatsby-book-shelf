import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.contentfulBook

  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <p>by {post.author}</p>

        <img
          src={`http://covers.openlibrary.org/b/isbn/${post.isbn}-L.jpg`}
          alt=""
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulBook(isbn: { eq: $slug }) {
      title
      author
      isbn
    }
  }
`
