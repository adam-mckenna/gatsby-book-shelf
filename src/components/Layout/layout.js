/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { Header } from "../Header/header"
import "./layout.css"

const Wrapper = styled.main`
  margin: 0 auto;
  &.fixed-width {
    display: grid;
    grid-gap: 1em;
    max-width: 768px;
    margin: 2em auto;
    grid-template-columns: 50% 50%;
  }
`

export const Layout = ({ children, hasFixedWidth }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={site.siteMetadata.title} />
      <Wrapper className={hasFixedWidth ? "fixed-width" : ""}>
        {children}
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hasFixedWidth: PropTypes.bool,
}
