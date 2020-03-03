import React from "react"

import { graphql } from "gatsby"
import { Layout } from "../components/Layout/layout"
import { contentfulRichTextRenderer } from "../helpers/contentful-rich-text-renderer"

export default ({ data }) => {
  const { title, author, isbn, description } = data.contentfulBook

  return (
    <Layout hasFixedWidth>
      <div>
        <h1>{title}</h1>
        <p>by {author}</p>
        {contentfulRichTextRenderer(description.json)}
      </div>

      <div>
        <img
          src={`http://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`}
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
      description {
        json
      }
    }
  }
`
