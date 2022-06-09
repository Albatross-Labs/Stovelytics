import React, { useState, useContext } from 'react'
import styled from 'styled-components';
import { CommentsContext } from '../../../contexts/CommentsContext';
import { KeywordContext } from '../../../contexts/KeywordContext';
import { PeriodContext } from '../../../contexts/PeriodContext';

const Positioner = styled.div`
  position: absolute;
  right: 3%;
`

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 2px;

`

const Label = styled.div`
  font-weight: 700;
  color: #000000;
  font-family: Rockwell;
  padding: 2px;
  width: 10%;

`
const SearchWrapper =styled.div`
  position: relative;
  display: flex;
`

const Search = styled.input`
  width: 150px;
  box-sizing: border-box;
`

const Keywordslist = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 240px;
`

const Keyword = styled.div`
  border: none;
  border-radius: 15%;
  margin: 2px;
  font-size: 0.8em;
  flex-gorw: 0;
  margin: 3px;
  background-color: #F0F0F0;
  color: #000000;
  font-weight: 600;
  padding: 2px;
`

const AddButton = styled.button`
  // position: absolute;
  // right: -10%;
  z-index: 4;
  margin-left: 6px;
  font-family: Rockwell;
  font-weight: 600;
`
const SentimentLabelList = ['긍정', '중립', '부정']
const ThemeLabelList = ['캐릭터', '컨텐츠', '이벤트', '버그', '점검', '유저', '회사', '기타']
const DaLabelList = ['질문', '의견', '건의', '정보', '일상']

export default function KeywordSearch({label}) {

  const [input, setInput] = useState("")
  const [keywords, setKeywords] = useContext(KeywordContext)
  const [period, setPeriod] = useContext(PeriodContext)
  const [comments, setComments] = useContext(CommentsContext)

  const handleAdd = () => {
    setKeywords([
      ...keywords,
      input
    ])
    console.log(keywords)

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
      var flag = true
      const newKeywords = [...keywords, input]
      for(const keyword of newKeywords){
        if(!comment['header'].includes(keyword) && !comment['content'].includes(keyword))
          flag = false
      }
      return ( 
        (activeSentimentLabels.length === 0 || activeSentimentLabels.includes(comment['sentiment'])) &&
        (activeThemeLabels.length === 0 || activeThemeLabels.includes(comment['theme'])) &&
        (activeDaLabels.length === 0 || activeDaLabels.includes(comment['da'])) &&
        flag
      )
    }))

    setInput("")
  }

  return (
    <Positioner>
      <Wrapper>
        <Label>{label}</Label>
        <SearchWrapper>
          <Search 
            value={input}
            onChange={(e)=>{
              setInput(e.target.value)
            }}/>
          <AddButton onClick={handleAdd}>Add</AddButton>
        </SearchWrapper>
        <Keywordslist>
          {keywords.map(keyword => (
            <Keyword>{keyword}</Keyword>
          ))}
        </Keywordslist>
      </Wrapper>
    </Positioner>
  )
}
