import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 40%;
  height: 50%;
  background-color: blue;
  right: -60%;
  top: -50%;
`
export default function WordCloud() {
  return (
    <Wrapper>
      WordCloud
    </Wrapper>
  )
}
