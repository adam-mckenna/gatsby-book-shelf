import React from "react"

import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

import { Layout } from "../components/Layout/layout"
import { SEO } from "../components/SEO/seo"
import { Book } from "../components/Book/book"

const BookContainer = styled.div`
  padding: 0 0.125em 0 0.125em;
`

const BookLink = styled(Link)`
  text-decoration: none;
`

const Shelf = styled.div`
  height: 10px;
  margin-top: -6px;
  background: saddlebrown;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.8), inset -2px -2px 0px #5d3939;
  z-index: 66666;
`

// TODO: convert to TS.
const IndexPage = () => {
  const { allContentfulBook } = useStaticQuery(graphql`
    query {
      allContentfulBook {
        edges {
          node {
            id
            title
            author
            publisher
            isbn
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />

      <BookContainer>
        {allContentfulBook.edges.map(({ node }) => (
          <BookLink key={node.id} to={`/${node.isbn}`}>
            <Book
              author={node.author}
              publisher={node.publisher}
              title={node.title}
            />
          </BookLink>
        ))}
      </BookContainer>

      <Shelf />
    </Layout>
  )
}
export default IndexPage
