import React, { useContext } from 'react'
import styled from 'styled-components';
import { CommentsContext } from '../../contexts/CommentsContext';

const Wrapper = styled.div`
  position: absolute;
  width: 20%;
  height: 100%;
  right: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Counts = styled.div`
  position: absolute;
  height: 40%;
  // width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2%;
  background-color: #FFD6DD;
  font-size: 1.2em;
  border-radius: 60%;
  font-weight: 700;
  color: #925EA3;
`
export default function CommentCount() {
  const [comments] = useContext(CommentsContext);

  return (
    <Wrapper>
      <Counts>{comments.length} comments</Counts>
    </Wrapper>
  )
}