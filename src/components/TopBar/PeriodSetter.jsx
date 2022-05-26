import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 25%;
  height: 100%;
  top: 0;
  right: 0;
  // background-color: pink;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StartDateSet = styled.input`
  position: absolute;
  top: 20%;
  height: 20%;
  width: 40%;
  display: flex;
  align-items: center;
  font-size: 0.4em;
`

const EndDateSet = styled.input`
  position: absolute;
  top: 60%;
  height: 20%;
  width: 40%;
  display: flex;
  align-items: center;
  font-size: 0.4em;
`

export default function PeriodSetter() {

  
  return (
    <Wrapper>
      <StartDateSet placeholder="Start Date ex) 20220515"></StartDateSet>
      <EndDateSet placeholder="End Date ex) 20220515"></EndDateSet>
    </Wrapper>
  )
}