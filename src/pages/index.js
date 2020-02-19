import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

const BookContainer = styled.div`
  padding: 0 0.125em 0 0.125em;
`

const BookLink = styled(Link)`
  text-decoration: none;
`

const Book = styled.div`
  display: inline-block;
  font-size: 12px;
  letter-spacing: 1px;
  background: ${props => props.colour};
  padding: 0.125em 1em;
  color: white;
  will-change: transform;
  margin-right: 3px;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.8), inset -2px -2px 0px #bf7540,
    -1px 0.5px 0px #bf7540;
  max-width: 50px;
  height: 450px;
`

const BookLabel = styled.p`
  min-width: 400px;
  transform: rotate(90deg);
  transform-origin: left;
  min-height: 50px;
`

const Shelf = styled.div`
  height: 5px;
  margin-top: 0.5px;
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
            colour
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
            <Book colour={node.colour === "Vintage" ? "#C52B35" : "#ff6900"}>
              <BookLabel>
                {node.title}, {node.author}
              </BookLabel>
            </Book>
          </BookLink>
        ))}
      </BookContainer>

      <Shelf />
    </Layout>
  )
}
export default IndexPage
