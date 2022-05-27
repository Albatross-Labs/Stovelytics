import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div `
  position: absoulte;
  width: 100%;
  height: 80%;
  top: 20%;
  background-color: blue;
`

export default function FilteredComments() {
  return (
    <Wrapper>
      FilteredComments
    </Wrapper>
  )
}
