import React from 'react'
import styled from 'styled-components';

import DaCount from '../components/PeriodAnalysis/DaCount';
import SentimentGraph from '../components/PeriodAnalysis/SentimentGraph';
import ThemeCount from '../components/PeriodAnalysis/ThemeCount';
import WordCloud from '../components/PeriodAnalysis/WordCloud';

const PeriodAnalysisSection = styled.div`
  position: relative;
  grid-area: PeriodAnalysisSection;
`

export default function PeriodAnalysis() {
  return (
    <PeriodAnalysisSection>
      <SentimentGraph/>
      <DaCount/>
      <ThemeCount/>
      <WordCloud/>
    </PeriodAnalysisSection>
  )
}