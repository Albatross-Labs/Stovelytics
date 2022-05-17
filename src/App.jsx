import React from 'react'
import Topbar from './section/Topbar'
import PeriodAnalysis from './section/PeriodAnalysis'
import CommentDisplay from './section/CommentDisplay'
import styled from "styled-components";

const Sections = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 0.1fr 0.9fr;
  grid-template-columns: 0.55fr 0.45fr;
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