import React from "react"

import styled from "styled-components"
import PropTypes from "prop-types"

import { getPublisherImage } from "../../helpers/get-publisher-img"

const BaseBook = styled.div`
  display: inline-block;
  top: 0;
  font-size: 14px;
  letter-spacing: 1px;
  font-family: "Poppins";
  border-left: none;
  border-right: none;
  padding: 0.125em 1em;
  will-change: transform;
  color: white;
  box-shadow: -1px 0px 4px rgba(0, 0, 0, 0.8);
  width: 52.5px;
  height: 485px;
  transform: scale(1) perspective(1px);
  transition: transform 0.3s ease;
  background: #ff6900;
  &:hover {
    transform: scale(1.1) perspective(1px);
    z-index: 999;
    position: relative;
  }
`

const PenguinClassic = styled(BaseBook)`
  background: black;
`

const PenguinModernClassic = styled(BaseBook)`
  font-weight: 500;
  color: black;
  background: #87ceeb;
  border-top: 6px solid #f5f3ef;
  border-bottom: 6px solid #f5f3ef;
`

const Vintage = styled(BaseBook)`
  background: #c52b35;
`

const BookStyles = {
  "Penguin Classic": PenguinClassic,
  "Penguin Modern Classic": PenguinModernClassic,
  Vintage: Vintage,
}

const Label = styled.p`
  white-space: nowrap;
  overflow: visible;
  margin: 0;
  height: 50px;
  will-change: transform;
  transform: rotate(90deg) perspective(1px);
  transform-origin: left;
  position: absolute;
  left: 26.25px;
  height: 52.5px;
  display: flex;
  align-items: center;
`

const BaseTitle = styled.span`
  font-size: 14px;
  margin-right: 12px;
`

const PenguinClassicTitle = styled(BaseTitle)`
  font-size: 12px;
`

const TitleStyles = {
  "Penguin Classic": PenguinClassicTitle,
  "Penguin Modern Classic": BaseTitle,
  Vintage: BaseTitle,
}

const BaseAuthor = styled.span`
  font-size: 12px;
`

const PenguinClassicAuthor = styled(BaseAuthor)`
  font-size: 10px;
`

const AuthorStyles = {
  "Penguin Classic": PenguinClassicAuthor,
  "Penguin Modern Classic": BaseAuthor,
  Vintage: BaseAuthor,
}

const PublisherLogo = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  margin-bottom: 15px;
  display: inline-block;
  left: 0;
  text-align: center;
  background: transparent;
`

const PenguinClassicLogo = styled(PublisherLogo)`
  background: white;
  bottom: 96px;
`

const PublisherLogoStyles = {
  "Penguin Classic": PenguinClassicLogo,
  "Penguin Modern Classic": PublisherLogo,
  Vintage: PublisherLogo,
}

const PublisherIcon = styled.img`
  max-height: 35px;
  margin: 0 auto;
  display: flex;
`

const PenguinClassicPublisherLabel = styled(Label)`
  top: 26px;
  font-size: 7px;
  bottom: 42px;
  font-weight: 200;
`

const PublisherLabels = {
  "Penguin Classic": PenguinClassicPublisherLabel,
  "Penguin Modern Classic": "",
  Vintage: "",
}

export const Book = ({ publisher, title, author }) => {
  const BookStyle = BookStyles[publisher]
  const TitleStyle = TitleStyles[publisher]
  const AuthorStyle = AuthorStyles[publisher]
  const PublisherLogoStyle = PublisherLogoStyles[publisher]
  const PublisherLabelStyle = PublisherLabels[publisher]

  return (
    <BookStyle>
      <Label>
        <TitleStyle>{title}</TitleStyle>
        <AuthorStyle>{author}</AuthorStyle>
      </Label>

      <PublisherLogoStyle>
        <PublisherIcon
          src={getPublisherImage(publisher)}
          alt={`Published by ${publisher}`}
        />

        {PublisherLabelStyle && (
          <PublisherLabelStyle>{publisher}</PublisherLabelStyle>
        )}
      </PublisherLogoStyle>
    </BookStyle>
  )
}

Book.propTypes = {
  publisher: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
}
