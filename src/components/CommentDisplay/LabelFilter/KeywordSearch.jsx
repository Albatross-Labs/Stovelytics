import React, { useState } from 'react'
import styled from 'styled-components';

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
`

const AddButton = styled.button`
  // position: absolute;
  // right: -10%;
  z-index: 4;
  margin-left: 6px;
  font-family: Rockwell;
  font-weight: 600;
`

export default function KeywordSearch({label}) {

  const [input, setInput] = useState("")
  const [keywords, setKeywords] = useState([])

  const handleAdd = () => {
    setKeywords([
      ...keywords,
      input
    ])
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
