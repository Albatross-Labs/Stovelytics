import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  background-color: green;
  // margin: 4px;
  // box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  position: relative;
  width: 98%;
  height: 95%;
  background-color: pink;
  // margin: 14px;
  box-sizing: border-box;
`

export default function SentimentGraph() {
  return (
    <Wrapper>
      <Container>
        SentimentGraph

      </Container>
    </Wrapper>
  )
}
