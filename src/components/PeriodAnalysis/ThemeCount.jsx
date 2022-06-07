import React, { useContext } from 'react'
import styled from 'styled-components';

import IconWithCount from './Counter/IconWithCount';
import { PeriodContext } from '../../contexts/PeriodContext';


const Wrapper = styled.div`
  position: relative;
  width: 58%;
  height: 20%;
  box-sizing: border-box;
  left: 1%;
  top: 5%;

`
const Title = styled.div`
  // background-color: yellow;
  position: absolute;
  color: #000000;

  font-weight: 700;
  font-size: 24px;
  top: 0;
  left: 4%;
  font-family: Rockwell;

`

const IconWrapper = styled.div`
  position: absolute;
  width: 99%;
  left: 2%;
  top: 19%;
  display: flex;
  flex-direction: row;
  // background-color: pink;
  overflow: auto;

  ::-webkit-scrollbar {
    height: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
    background-clip: padding-box;
    border: 3px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`

const ThemeLabels = {
  '캐릭터': {
    img: '',
    cnt: 0
  },
  '컨텐츠': {
    img: '',
    cnt: 0
  },
  '이벤트': {
    img: '',
    cnt: 0
  },
  '버그': {
    img: '',
    cnt: 0
  },
  '점검': {
    img: '',
    cnt: 0
  },
  '유저': {
    img: '',
    cnt: 0
  },
  '회사': {
    img: '',
    cnt: 0
  },
  '기타': {
    img: '',
    cnt: 0
  }
}


export default function ThemeCount() {
  const [period, setPeriod] = useContext(PeriodContext)

  for(const comment of period)
    ThemeLabels[comment.theme].cnt++
  
  const ThemeLabelList = []
  for(const ThemeLabel in ThemeLabels)
    ThemeLabelList.push({
      name: ThemeLabel,
      ... ThemeLabels[ThemeLabel]
    })
  
  ThemeLabelList.sort(function(a,b){
    return a.cnt > b.cnt ? -1 : a.cnt < b.cnt ? 1 : 0; 
  })
  
  return (
    <Wrapper>
      <Title>Theme Count</Title>    
      <IconWrapper>
        {ThemeLabelList.map(label => (
          <IconWithCount task={'theme'} label={label} key={label.name}></IconWithCount>
        ))}
      </IconWrapper>
    </Wrapper>
  )
}