import React, { useState, useContext } from 'react'
import styled from "styled-components";

import { CacheContext } from '../../contexts/CacheContext';
import { CommentsContext } from '../../contexts/CommentsContext';
import { PeriodContext } from '../../contexts/PeriodContext';

const Wrapper = styled.div`
  position: absolute;
  width: 25%;
  height: 100%;
  // top: 0;
  right: 10%;
  // background-color: pink;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StartLabel = styled.div`
  position: absolute;
  top: 20%;
  left: -10%;
  font-size: 1em;
  color: white;

  // background-color: pink;
  font-family: Rockwell;
  font-weight: 600;

`

const StartDateSet = styled.input`
  position: absolute;
  top: 40%;
  left: -10%;
  height: 20%;
  width: 30%;
  display: flex;
  align-items: center;
  font-size: 0.4em;
`

const EndLabel = styled.div`
  position: absolute;
  top: 20%;
  left: 25%;

  // height: 20%;
  // width: 30%;
  
  font-size: 1em;
  color: white;  
  font-family: Rockwell;
  font-weight: 600;

`

const EndDateSet = styled.input`
  position: absolute;
  top: 40%;
  left: 25%;
  height: 20%;
  width: 30%;
  display: flex;
  align-items: center;
  font-size: 0.4em;
`
const SetButton = styled.button`
  position: absolute;
  left: 59%;
  top: 40%;
  z-index: 4;
  cursor: pointer;
  outline: none;
  font-weight: 600;
  font-family: Rockwell;

`
const ShowButton = styled.button`
  position: absolute;
  left: 70%;
  top: 40%;
  z-index: 4;
  cursor: pointer;
  outline: none;
  font-weight: 600;
  font-family: Rockwell;
`

export default function PeriodSetter() {
  const cache = useContext(CacheContext)
  const [period, setPeriod] = useContext(PeriodContext)
  const [comments, setComments] = useContext(CommentsContext)
  
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  
  const handlePeriod = () => {
    setPeriod(cache.filter(comment => startDate < comment['created'] && comment['created'] < endDate ))
    setComments(cache.filter(comment => startDate < comment['created'] && comment['created'] < endDate ))
  }

  const handleReset = () => {
    setPeriod(cache)
    setComments(cache)
  }

  return (
    <Wrapper>
      <StartLabel>Start</StartLabel>
      <StartDateSet 
        onChange={(e)=>setStartDate(e.target.value)} 
        placeholder="ex) 2022.05.15 18:00"
      />
      <EndLabel>End</EndLabel>
      <EndDateSet 
        onChange={(e)=>setEndDate(e.target.value)} 
        placeholder="ex) 2022.05.15 22:00"
      />

      <SetButton onClick={handlePeriod}>SET</SetButton>
      <ShowButton onClick={handleReset}>Reset</ShowButton>
    </Wrapper>
  )
}