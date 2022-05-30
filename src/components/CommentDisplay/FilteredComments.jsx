import React, { useContext } from 'react'
import styled from 'styled-components';

import { CommentsContext } from '../../contexts/CommentsContext';
import CommentSnapshot from './CommentSnapshot';

const Wrapper = styled.div `
  position: relative;
  width: 100%;
  // height: auto;
  // min-height: 75%;
  height: 80%;
  // background-color: blue;
`

const CommentsList = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  box-sizing: border-box;
`

export default function FilteredComments() {
  const [comments] = useContext(CommentsContext)
  
  return (
    <Wrapper>
      <CommentsList>
        {comments.map((comment, idx) => (
          <CommentSnapshot key={idx} comment={comment}/>
        ))}
      </CommentsList>
    </Wrapper>
  )
}