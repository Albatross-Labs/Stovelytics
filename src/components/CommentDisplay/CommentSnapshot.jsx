import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div `
  border: 3px solid red;
  // background-color: blue;
`

export default function CommentSnapshot({comment}) {
  return (
    <Wrapper>
      <p>{comment.header}</p>
      <p>{comment.user}</p>
      <p>{comment.created}</p>
      <p>{comment.content}</p>

      <div>
        <p>Sentiment: {comment.sentiment}</p>
        <p>Theme: {comment.theme}</p>
        <p>DA: {comment.da}</p>
        <p>Spam: {comment.spam}</p>
        {/* {comment.keywords.map(keyword => (
           <p>{keyword}</p> 
        ))} */}

      </div>
    </Wrapper>

  )
}
