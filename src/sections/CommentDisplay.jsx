import React from 'react'
import styled from 'styled-components';

const CommentDisplaySection = styled.div`
  background-color: yellow;
  grid-area: CommentDisplaySection;
`

export default function CommentDisplay() {
  return (
    <CommentDisplaySection>
      CommentDisplay
    </CommentDisplaySection>
  )
}
