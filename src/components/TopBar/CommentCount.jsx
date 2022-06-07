import React, { useContext } from 'react'
import styled from 'styled-components';
import { CommentsContext } from '../../contexts/CommentsContext';

const Wrapper = styled.div`
  position: absolute;
  width: 20%;
  height: 100%;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: red;

`
const Counts = styled.div`
  position: absolute;
  height: 100%;
  width: 70%;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  // padding: 2%;
  background-color: #000000;
  font-size: 1.2em;
  // border-radius: 60%;
  font-weight: 700;
  color: #ffffff;
`
export default function CommentCount() {
  const [comments] = useContext(CommentsContext);

  return (
    <Wrapper>
      <Counts>{comments.length} comments</Counts>
    </Wrapper>
  )
}