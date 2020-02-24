import React from "react"

import styled from "styled-components"
import PropTypes from "prop-types"

const BookWrapper = styled.div`
  display: inline-block;
  font-size: 14px;
  letter-spacing: 1px;
  font-family: "Poppins";
  font-weight: ${props => {
    switch (props.publisher) {
      case "Penguin Modern Classic":
        return 500
      default:
        return 300
    }
  }};
  background: ${props => {
    switch (props.publisher) {
      case "Vintage":
        return "#C52B35"
      case "Penguin Modern Classic":
        return "#87CEEB"
      case "Penguin Classic":
        return "black"
      default:
        return "#FF6900"
    }
  }};
  border: 6px solid
    ${props => {
      switch (props.publisher) {
        case "Vintage":
          return "#C52B35"
        case "Penguin Modern Classic":
          return "#f5f3ef"
        case "Penguin Classic":
          return "black"
        default:
          return "#FF6900"
      }
    }};
  color: ${props => {
    switch (props.publisher) {
      case "Penguin Modern Classic":
        return "black"
      default:
        return "white"
    }
  }};
  border-left: none;
  border-right: none;
  padding: 0.125em 1em;
  will-change: transform;
  margin-right: 3px;
  box-shadow: -1px 0px 4px rgba(0, 0, 0, 0.8);
  width: 52.5px;
  height: 485px;
  transform: scale(1) perspective(1px);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1) perspective(1px);
    z-index: 999;
    position: relative;
  }
`

const BookLabel = styled.p`
  position: absolute;
  height: 51px;
  top: -5px;
  min-width: 485px;
  will-change: transform;
  transform: rotate(90deg) perspective(1px);
  transform-origin: left;
`

const BookAuthor = styled.span`
  font-size: 12px;
`
const Book = ({ publisher, title, author }) => {
  return (
    <BookWrapper publisher={publisher} style={{ position: "relative" }}>
      <BookLabel
        style={{
          fontSize: publisher === "Penguin Classic" ? 12 : 14,
        }}
      >
        {title} &nbsp;&nbsp;{" "}
        <BookAuthor
          style={{
            fontSize: publisher === "Penguin Classic" ? 10 : 12,
          }}
        >
          {author}
        </BookAuthor>
      </BookLabel>

      <div
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          marginBottom: publisher === "Penguin Classic" ? 96 : 15,
          display: "inline-block",
          left: 0,
          textAlign: "center",
          background: publisher === "Penguin Classic" ? "white" : "transparent",
        }}
      >
        <img
          style={{
            maxHeight: 35,
            margin: "0 auto",
            display: "flex",
          }}
          src={require(`./../../images/publishers/${publisher
            .toLowerCase()
            .split(" ")
            .join("_")}.png`)}
          alt={publisher}
        />
      </div>

      {publisher === "Penguin Classic" ? (
        <BookLabel
          style={{
            top: "initial",
            fontSize: 7,
            bottom: 28,
            fontWeight: 200,
          }}
        >
          Penguin Classic
        </BookLabel>
      ) : (
        <></>
      )}
    </BookWrapper>
  )
}

Book.propTypes = {
  publisher: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
}

export { Book }
