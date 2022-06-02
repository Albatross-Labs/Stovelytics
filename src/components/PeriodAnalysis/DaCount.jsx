import React from 'react'
import styled from 'styled-components';

import IconWithCount from './Counter/IconWithCount';
import { faComments } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
  position: relative;
  width: 60%;
  height: 25%;
  // background-color: yellow;
`

const Title = styled.div`

`


const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const DaLabelList = [
  {
    name: '질문',
    img: 'faCoffee'
  },
  {
    name: '의견',
    img: 'faCoffee'
  },
  {
    name: '건의',
    img: 'faCoffee'
  },
  {
    name: '인증',
    img: 'faCoffee'
  },
  {
    name: '친목',
    img: 'faCoffee'
  },
  {
    name: '정보',
    img: 'faCoffee'
  },
]

export default function DaCount() {
  return (
    <Wrapper>
      <Title>DA</Title>
      <IconWrapper>
        {DaLabelList.map(label => (
          <IconWithCount label={label} key={label.name}></IconWithCount>
        ))}
      </IconWrapper>
    </Wrapper>
  )
}
