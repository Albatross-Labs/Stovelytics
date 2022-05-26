import React from 'react'
import Topbar from './sections/Topbar'
import PeriodAnalysis from './sections/PeriodAnalysis'
import CommentDisplay from './sections/CommentDisplay'
import styled from "styled-components";

const Sections = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  display: grid;
  height: 100vh;
  grid-template-rows: 0.1fr 0.9fr;
  grid-template-columns: 0.6fr 0.4fr;
  grid-template-areas: 
    "TopBarSection TopBarSection"
    "PeriodAnalysisSection CommentDisplaySection"
  ;
`

export default function App() {
  return (
    <Sections>
      <Topbar/>
      <PeriodAnalysis/>
      <CommentDisplay/>
    </Sections>
  )
}