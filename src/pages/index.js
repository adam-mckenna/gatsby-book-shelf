import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// TODO: convert to TS.
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBook {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Your books</h1>

      {data.allContentfulBook.edges.map(book => (
        <div key={book.node.id}>{book.node.title}</div>
      ))}

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}
export default IndexPage
