import React from 'react'
import styled from 'styled-components';
import ReactWordcloud from "react-wordcloud";

import data from './data'

const Wrapper = styled.div`
  position: relative;
  width: 40%;
  height: 50%;
  // background-color: blue;
  right: -60%;
  top: -50%;
  display: flex;
  justify-content: center;
  align-items: center;

`
const Title = styled.div`
  // background-color: yellow;
  position: absolute;
  color: #87419E;

  font-weight: 700;
  font-size: 24px;
  left: 4%;
  top: 4%;
`
const WcWrapper =styled.div`
  position: absolute;
  width: 120%;
  height: 80%;
  // background-color: pink;
  bottom: 0;
`

export default function WordCloud() {

  return (
    <Wrapper>
      <Title>Wordcloud</Title>
      <WcWrapper>
        <ReactWordcloud words={data} />
      </WcWrapper>
    </Wrapper>
  )
}