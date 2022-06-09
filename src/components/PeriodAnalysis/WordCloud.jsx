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
  top: -40%;
  display: flex;
  justify-content: center;
  align-items: center;

`
const Title = styled.div`
  // background-color: yellow;
  position: absolute;
  color: #000000;

  font-weight: 700;
  font-size: 24px;
  left: 6%;
  top: 2%;
  font-family: Rockwell;

`
const WcWrapper =styled.div`
  position: absolute;
  width: 95%;
  height: 85%;
  // background-color: pink;
  bottom: 4%;
  right: 1%;;
  background: rgb(223,223,223);
  background: radial-gradient(circle, rgba(223,223,223,1) 0%, rgba(255,255,255,1) 100%);
  border-radius: 50%;
  `

export default function WordCloud() {
  const [comments, setComments] = useContext(CommentsContext)

  const keywordValueSet = {}
  for(const comment of comments){
    // console.log(comment)
    for(const keywordValue of comment.keywords){
      const key = keywordValue[0]
      const value = keywordValue[1]
      // console.log(key, value)
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
        <ReactWordcloud words={dataList} options={{
          fontFamily: "Rockwell",
          colors: [
            'rgb(109, 89, 106)',
            'rgb(109, 89, 106)',
            'rgb(230, 142, 124)',
            'rgb(255, 189, 109)',
            'rgb(142, 136, 217)',
            'rgb(105, 101, 128)',
            'rgb(91, 116, 146)',
            'rgb(71, 132, 154)',
            'rgb(65, 146, 149)',
            'rgb(86, 157, 134)',
            'rgb(81, 128, 112)',
            'rgb(0, 200, 147)',
            'rgb(87, 228, 221)' 
          ],
          fontSizes: [8, 42],
          padding: 1,
          rotations: 3,
          rotationAngles: [0, 90],
        }}/>
      </WcWrapper>
    </Wrapper>
  )
}