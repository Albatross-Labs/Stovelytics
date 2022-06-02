import React from 'react'
import styled from 'styled-components';

import IconWithCount from './Counter/IconWithCount';


const Wrapper = styled.div`
  position: relative;
  width: 60%;
  height: 25%;
  background-color: red;
`
const Title = styled.div`

`

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const ThemeLabelList = [
  {
    name: '캐릭터',
    img: ''
  },
  {
    name: '아이템',
    img: ''
  },
  {
    name: '레이드',
    img: ''
  },  
  {
    name: '업데이트',
    img: ''
  },
  {
    name: '이벤트',
    img: ''
  },
  {
    name: '버그',
    img: ''
  },
  {
    name: '해킹',
    img: ''
  },
  {
    name: '점검',
    img: ''
  },
  {
    name: '굿즈',
    img: ''
  },
  {
    name: '유저',
    img: ''
  },
  {
    name: '회사',
    img: ''
  },
  {
    name: '기타',
    img: ''
  }
]


export default function ThemeCount() {
  return (
    <Wrapper>
      <Title>Theme</Title>    
      <CounterWrapper>
        {ThemeLabelList.map(label => (
          <IconWithCount label={label} key={label.name}></IconWithCount>
        ))}
      </CounterWrapper>
    </Wrapper>
  )
}