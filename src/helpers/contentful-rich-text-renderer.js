import React from "react"

import styled from "styled-components"

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Bold = styled.span`
  font-weight: 600;
`

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold className="bold">{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <p className="align-center">{children}</p>
    ),
  },
}

export const contentfulRichTextRenderer = json =>
  documentToReactComponents(json, options)
