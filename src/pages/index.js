import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
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

      <div
        style={{
          padding: "0 .125em 0 .125em",
        }}
      >
        {data.allContentfulBook.edges.map(({ node }) => (
          <a
            href={`/${node.isbn}`}
            style={{
              textDecoration: "none",
            }}
            key={node.id}
          >
            <div
              style={{
                display: "inline-block",
                fontSize: 12,
                letterSpacing: 1,
                background: node.colour === "Vintage" ? "#C52B35" : "#ff6900",
                padding: ".125em 1em",
                color: "white",
                willChange: "transform",
                marginRight: 3,
                boxShadow:
                  "-2px 2px 10px rgba(0,0,0,0.8), inset -2px -2px 0px #bf7540, -1px .5px 0px #bf7540",
                maxWidth: 50,
                height: 450,
              }}
            >
              <p
                style={{
                  margin: 0,
                  minWidth: 400,
                  transform: "rotate(90deg)",
                  transformOrigin: "left",
                  minHeight: 50,
                }}
              >
                {node.title}, {node.author}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div
        style={{
          height: 5,
          marginTop: 0.5,
          background: "saddlebrown",
          boxShadow:
            "-2px 2px 10px rgba(0,0,0,0.8), inset -2px -2px 0px #5d3939",
          zIndex: 66666,
        }}
      />
    </Layout>
  )
}
export default IndexPage
