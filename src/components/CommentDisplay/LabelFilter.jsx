import React from 'react'
import styled from 'styled-components';
import LabelButton from './LabelFilter/LabelButton';

const Wrapper = styled.div `
  position: absoulte;
  width: 100%;
  height: 20%;
  background-color: pink;
`

export default function LabelFilter() {
  return (
    <Wrapper>
      <LabelButton title="건의"/>
    </Wrapper>
  )
}
