import React, { useContext } from 'react'
import styled from 'styled-components';
import ReactWordcloud from "react-wordcloud";

import { CommentsContext } from '../../contexts/CommentsContext'

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
  width: 100%;
  height: 80%;
  // background-color: pink;
  bottom: 0;
`

export default function WordCloud() {
  const [comments, setComments] = useContext(CommentsContext)

  const keywordValueSet = {}
  for(const comment of comments){
    console.log(comment)
    for(const keywordValue of comment.keywords){
      const key = keywordValue[0]
      const value = keywordValue[1]
      console.log(key, value)
      if(!(key in keywordValueSet))
        keywordValueSet[key] = 0
      keywordValueSet[key] += Number(value)
    }
  }
  
  const dataList =[]
  for(const key in keywordValueSet)
  dataList.push({
    text: key,
    value: keywordValueSet[key]
  })
  console.log(dataList)
  

  return (
    <Wrapper>
      <Title>Wordcloud</Title>
      <WcWrapper>
        <ReactWordcloud words={dataList} />
      </WcWrapper>
    </Wrapper>
  )
}