import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 20%;
  height: 100%;
  top: 0;
  right: 25%;
  background-color: orange;
`

export default function CommentCount() {
  return (
    <Wrapper>CommentCount</Wrapper>
  )
}
