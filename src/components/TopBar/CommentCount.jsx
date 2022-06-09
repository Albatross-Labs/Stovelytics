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

  font-size: 1.2em;
  font-weight: 700;
  font-family: Rockwell;
  color: #ffffff;
  // background-color: red;

`
export default function CommentCount() {
  const [comments] = useContext(CommentsContext);

  return (
    <Wrapper>
      <Counts> 
        <p style={{
          fontSize: '1.8em',
          marginRight: '6px'
        }}>
          {comments.length}
        </p>
        <p style={{
          fontSize: '0.9em',
          marginRight: '6px'
        }}>
          comments
        </p>
      </Counts>
    </Wrapper>
  )
}