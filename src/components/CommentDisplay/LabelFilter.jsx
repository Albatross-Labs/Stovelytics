import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { CommentsContext } from '../../contexts/CommentsContext';
import { KeywordProvider } from '../../contexts/KeywordContext';
import { PeriodContext } from '../../contexts/PeriodContext';
import KeywordSearch from './LabelFilter/KeywordSearch';

import LabelButton from './LabelFilter/LabelButton';
import ToggleFilterList from './LabelFilter/ToggleFilterList';

const SentimentLabelList = ['긍정', '중립', '부정']
const ThemeLabelList = ['캐릭터', '컨텐츠', '이벤트', '버그', '점검', '유저', '회사', '기타']
const DaLabelList = ['질문', '의견', '건의', '정보', '일상']

const Wrapper = styled.div `
  position: relative;
  width: 97%;
  height: 20%;
  // right: 6%;
  // left: 0.5%;
  right: -2%;
  top: 1%;
  border: 4px solid #525559;
  // height: 25%;
  background-color: #ffffff;
  // background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 8px 8px -10px #111;
  overflow-y: auto;
  padding-left: 14px;
  box-sizing: border-box;
  z-index: 4;
  // border-radius: 5%;
  padding: 5px 10px;
`
const ResetButton = styled.button`
  position: absolute;
  right: 1%;
  bottom: 5%;
  z-index: 4;
  font-family: Rockwell;
  font-weight: 600;
`

export default function LabelFilter() {
  
  const [period, setPeriod] = useContext(PeriodContext)
  const [comments, setComments] = useContext(CommentsContext)
  const [keywords, setKeywords] = useState([])

  const handleReset = () => {
    const activeEls = document.getElementsByClassName('active')
    const list = []
    for(const activeEl of activeEls)
      list.push(activeEl)
    for(const item of list){
      const str = item.className
      const len = str.length
      item.className = str.substring(0, len-7)
    }

    setComments(period)
    setKeywords([])
  }

  return (
    <KeywordProvider value={[keywords, setKeywords]}>
      <Wrapper>      
      
        <ToggleFilterList label="Sentiment">
          {SentimentLabelList.map(label => (
            <LabelButton  key={label} title={label}/>
            ))}
        </ToggleFilterList>

        <ToggleFilterList label="Dialog Act">
          {DaLabelList.map(label => (
            <LabelButton key={label} title={label}/>
            ))}
        </ToggleFilterList>

        <ToggleFilterList label="Theme">
          {ThemeLabelList.map(label => (
            <LabelButton key={label} title={label}/>
            ))}
        </ToggleFilterList>

        <KeywordSearch label={"Keywords"}/>
        <ResetButton onClick={handleReset}>Reset</ResetButton>
      </Wrapper>
    </KeywordProvider>
  )
}
