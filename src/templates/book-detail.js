import React from "react"

import { graphql } from "gatsby"
import { Layout } from "../components/Layout/layout"

export default ({ data }) => {
  const { title, author, isbn } = data.contentfulBook

  return (
    <Layout>
      <h1>{title}</h1>
      <p>by {author}</p>

      <img src={`http://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`} alt="" />
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
