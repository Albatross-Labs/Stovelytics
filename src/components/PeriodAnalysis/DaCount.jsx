import React, { useContext } from 'react'
import styled from 'styled-components';
import { faComments } from '@fortawesome/free-solid-svg-icons'

import IconWithCount from './Counter/IconWithCount';
import { PeriodContext } from '../../contexts/PeriodContext';

const Wrapper = styled.div`
  position: relative;
  width: 58%;
  height: 20%;
  box-sizing: border-box;
  left: 1%;
`

const Title = styled.div`
  // background-color: yellow;
  position: absolute;
  color: #000000;

  font-weight: 700;
  font-size: 24px;
  left: 4%;
  top: 4%;
  font-family: Rockwell;
`

const IconWrapper = styled.div`
  position: absolute;
  width: 99%;
  left: 2%;
  top: 23%;
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

const DaLabels = {
  '질문': {
    img: 'faCoffee',
    cnt: 0
  },
  '의견': {
    img: 'faCoffee',
    cnt: 0
  },
  '건의': {
    img: 'faCoffee',
    cnt: 0
  },
  '정보': {
    img: 'faCoffee',
    cnt: 0
  },
  '일상': {
    img: 'faCoffee',
    cnt: 0
  }
}

export default function DaCount() {
  const [period, setPeriod] = useContext(PeriodContext)

  for(const comment of period)
    DaLabels[comment.da].cnt++
  
  const DaLabelList = []
  for(const DaLabel in DaLabels)
    DaLabelList.push({
      name: DaLabel,
      ... DaLabels[DaLabel]
    })
  
  DaLabelList.sort(function(a,b){
    return a.cnt > b.cnt ? -1 : a.cnt < b.cnt ? 1 : 0; 
  })

  return (
    <Wrapper>
      <Title>Da Count</Title>
      <IconWrapper>
        {DaLabelList.map(label => (
          <IconWithCount task={'da'} label={label} key={label.name}></IconWithCount>
        ))}
      </IconWrapper>
    </Wrapper>
  )
}
