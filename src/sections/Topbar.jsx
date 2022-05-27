import React from 'react'
import styled from 'styled-components';

import CommentCount from '../components/TopBar/CommentCount';
import Identity from '../components/TopBar/Identity';
import PeriodSetter from '../components/TopBar/PeriodSetter';

const TopBarSection = styled.div`
  position: relative;
  background-color: #F3F2DB;
  grid-area: TopBarSection;
  display: flex;
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