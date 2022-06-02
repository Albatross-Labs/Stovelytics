import React, { useContext } from 'react'
import styled from 'styled-components';
import { faComments } from '@fortawesome/free-solid-svg-icons'

import IconWithCount from './Counter/IconWithCount';
import { PeriodContext } from '../../contexts/PeriodContext';

const Wrapper = styled.div`
  position: relative;
  width: 60%;
  height: 25%;
  box-sizing: border-box;

`

const Title = styled.div`
  background-color: yellow;
  position: absolute;

  font-weight: 700;
  font-size: 24px;
  left: 1%;
`

const IconWrapper = styled.div`
  position: absolute;
  width: 99%;
  left: 1%;
  top: 15%;
  display: flex;
  flex-direction: row;
  background-color: pink;
  overflow: auto;
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
  '인증': {
    img: 'faCoffee',
    cnt: 0
  },
  '친목': {
    img: 'faCoffee',
    cnt: 0
  },
  '정보': {
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
      <Title>DA Count</Title>
      <IconWrapper>
        {DaLabelList.map(label => (
          <IconWithCount label={label} key={label.name}></IconWithCount>
        ))}
      </IconWrapper>
    </Wrapper>
  )
}
