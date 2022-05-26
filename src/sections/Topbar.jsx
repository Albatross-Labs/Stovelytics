import React from 'react'
import styled from 'styled-components';
import CommentCount from '../components/TopBar/CommentCount';
import Identity from '../components/TopBar/Identity';
import PeriodSetter from '../components/TopBar/PeriodSetter';

const TopBarSection = styled.div`
  background-color: red;
  position: relative;
  grid-area: TopBarSection;
`

export default function Topbar() {
  return (
    <TopBarSection>
      <Identity/>
      <CommentCount/>
      <PeriodSetter/>
    </TopBarSection>
  );
}