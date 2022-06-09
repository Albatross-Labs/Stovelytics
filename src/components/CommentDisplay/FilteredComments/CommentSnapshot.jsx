import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div `
  border: 2px solid #2f3542;
  margin: 8px;
  padding-left: 14px;
  overflow: hidden;
  border-radius: 4px;
  border-radius: 10px;
  background-color: #f2f2f2;
  color: #3f3f3f;
  font-family: Rockwell;
`

const Header = styled.p`
  font-weight: 700;
  font0size: 20px;
`

export default function CommentSnapshot({comment}) {
  return (
    <Wrapper>
      <Header>{comment.header}</Header>
      <p>{comment.user}</p>
      <p>{comment.created}</p>
      <p>{comment.content}</p>

      <div>
        <p>Sentiment: {comment.sentiment}</p>
        <p>Theme: {comment.theme}</p>
        <p>DA: {comment.da}</p>
        {/* {comment.keywords.map(keyword => (
           <p>{keyword[0]}</p> 
        ))} */}

      </div>
    </Wrapper>

  )
}
