import React from "react"

import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

const Wrapper = styled.header`
  background: rebeccapurple;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
`

const Title = styled.h1`
  margin: 0;
`

const TitleLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Title>
      <TitleLink to="/">{siteTitle}</TitleLink>
    </Title>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

export { Header }
