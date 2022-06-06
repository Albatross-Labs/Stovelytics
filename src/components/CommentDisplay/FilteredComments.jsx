import React, { useContext } from 'react'
import styled from 'styled-components';

import { CommentsContext } from '../../contexts/CommentsContext';
import CommentSnapshot from './FilteredComments/CommentSnapshot';

const Wrapper = styled.div `
  position: relative;
  width: 98%;
  // height: auto;
  // min-height: 75%;
  height: 79.5%;
  // background-color: blue;
  top: 0.5%;
`

const CommentsList = styled.div`
  position: absolute;
  width: 98%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  right: 0;


  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
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