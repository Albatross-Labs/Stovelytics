import React from 'react'
import styled from 'styled-components';

const TopBarSection = styled.div`
  background-color: red;
  grid-area: TopBarSection;
`

export default function Topbar() {
  return (
    <TopBarSection>
      Topbar
    </TopBarSection>
  );
}
