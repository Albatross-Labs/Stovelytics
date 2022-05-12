import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  position: static;
  width: 100%;
  height: 10%;
  // border: 1px solid red;
  background: red;
  margin: 0;
`;

export default function Topbar() {
  return (
    <Wrapper></Wrapper>
  );
}
