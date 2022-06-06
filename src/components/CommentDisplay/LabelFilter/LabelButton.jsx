import React, { useState, useContext } from 'react'
import styled from 'styled-components'

import { CommentsContext } from '../../../contexts/CommentsContext';
import { PeriodContext } from '../../../contexts/PeriodContext';

const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 15%;
  margin: 2px;
  font-size: 0.8em;

  background-color: #F0F0F0;
  color: #000000;

  &.active {
    background-color: #D1BAD9;
    color: #000000;
    font-weight: 600;
  }
`

const SentimentLabelList = ['긍정', '중립', '부정']
const ThemeLabelList = ['캐릭터', '컨텐츠', '이벤트', '버그', '점검', '유저', '회사', '기타']
const DaLabelList = ['질문', '의견', '건의', '정보', '일상']

export default function LabelButton({onClick, title}) {
  const [active, setActive] = useState(false);
  const [comments, setComments] = useContext(CommentsContext)
  const [period, setPeriod] = useContext(PeriodContext)

  const handleSet = () => {
    const activeSentimentLabels = [];
    const activeThemeLabels = [];
    const activeDaLabels = [];

    const activeEls = document.getElementsByClassName(' active')
    for(const activeEl of activeEls){
      if(SentimentLabelList.includes(activeEl.innerHTML)){
        if(activeEl.innerHTML === '부정')
          activeSentimentLabels.push('-1')
        else if(activeEl.innerHTML === '중립')
          activeSentimentLabels.push('0')
        else if(activeEl.innerHTML === '긍정')
          activeSentimentLabels.push('1')
      }
      if(ThemeLabelList.includes(activeEl.innerHTML))
        activeThemeLabels.push(activeEl.innerHTML)
      if(DaLabelList.includes(activeEl.innerHTML))
        activeDaLabels.push(activeEl.innerHTML)
    }

    setComments(period.filter((comment) => {
      return ( 
        (activeSentimentLabels.length === 0 || activeSentimentLabels.includes(comment['sentiment'])) &&
        (activeThemeLabels.length === 0 || activeThemeLabels.includes(comment['theme'])) &&
        (activeDaLabels.length === 0 || activeDaLabels.includes(comment['da']))
      )
    }))
  }

  return (

    <Button 
      onClick={(e)=>{
        const str = e.target.className
        if(str.includes(' active')){
          const len = str.length
          e.target.className = str.substring(0, len-7)
        }
        else
          e.target.className += ' active'

        setActive(!active)
        handleSet()
      }}
      >
      {title}
    </Button>

  )
}
