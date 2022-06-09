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
    color: #3f3f3f;

    background-color: ${
      props => {
        const label = props.children
        if(label === '긍정')
          return 'rgba(53, 162, 235, 0.3)'
        if(label === '부정')
          return 'rgba(255, 99, 132, 0.3)'
  
        if(label === '질문')
          return 'rgb(109, 89, 106, 0.3)'
        if(label === '의견')
          return 'rgb(173, 112, 127, 0.3)'
        if(label === '건의')
          return 'rgb(230, 142, 124, 0.3)'
        if(label === '정보')
          return 'rgb(255, 189, 109, 0.3)'
        if(label === '일상')
          return 'rgb(142, 136, 217, 0.3)'
  
        if(label === '캐릭터')
          return 'rgb(105, 101, 128, 0.3)'
        if(label === '컨텐츠')
          return 'rgb(91, 116, 146, 0.3)'
        if(label === '이벤트')
          return 'rgb(71, 132, 154, 0.3)'
        if(label === '버그')
          return 'rgb(65, 146, 149, 0.3)'
        if(label === '점검')
          return 'rgb(86, 157, 134, 0.3)'
        if(label === '유저')
          return 'rgb(81, 128, 112, 0.3)'
        if(label === '회사')
          return 'rgb(0, 200, 147, 0.3)'
        if(label === '기타')
          return 'rgb(87, 228, 221, 0.3)'   
      }    
    };
  
    color: ${
      props => {
        const label = props.children
        if(label === '긍정')
          return 'rgba(53, 162, 235)'
        if(label === '부정')
          return 'rgba(255, 99, 132)'
  
        if(label === '질문')
          return 'rgb(109, 89, 106)'
        if(label === '의견')
          return 'rgb(173, 112, 127)'
        if(label === '건의')
          return 'rgb(230, 142, 124)'
        if(label === '정보')
          return 'rgb(255, 189, 109)'
        if(label === '일상')
          return 'rgb(142, 136, 217)'
        
        if(label === '캐릭터')
          return 'rgb(105, 101, 128)'
        if(label === '컨텐츠')
          return 'rgb(91, 116, 146)'
        if(label === '이벤트')
          return 'rgb(71, 132, 154)'
        if(label === '버그')
          return 'rgb(65, 146, 149)'
        if(label === '점검')
          return 'rgb(86, 157, 134)'
        if(label === '유저')
          return 'rgb(81, 128, 112)'
        if(label === '회사')
          return 'rgb(0, 200, 147)'
        if(label === '기타')
          return 'rgb(87, 228, 221)'
      }    
    };
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
