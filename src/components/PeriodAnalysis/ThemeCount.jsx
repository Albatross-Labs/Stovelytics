import React, { useContext } from 'react'
import styled from 'styled-components';

import IconWithCount from './Counter/IconWithCount';
import { PeriodContext } from '../../contexts/PeriodContext';


const Wrapper = styled.div`
  position: relative;
  width: 60%;
  height: 25%;
  box-sizing: border-box;

`
const Title = styled.div`
  // background-color: yellow;
  position: absolute;
  color: #87419E;

  font-weight: 700;
  font-size: 24px;
  top: 4%;
  left: 2%;
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
    background-color: #925EA3;
    border-radius: 10px;
    background-clip: padding-box;
    border: 3px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: #B797C2;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`

const ThemeLabels = {
  '캐릭터': {
    img: '',
    cnt: 0
  },
  '아이템': {
    img: '',
    cnt: 0
  },
  '레이드': {
    img: '',
    cnt: 0
  },  
  '업데이트': {
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
  '해킹': {
    img: '',
    cnt: 0
  },
  '점검': {
    img: '',
    cnt: 0
  },
  '굿즈': {
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
          <IconWithCount label={label} key={label.name}></IconWithCount>
        ))}
      </IconWrapper>
    </Wrapper>
  )
}