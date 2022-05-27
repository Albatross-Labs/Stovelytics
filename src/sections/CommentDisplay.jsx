import React from 'react'
import styled from 'styled-components';

import FilteredComments from '../components/CommentDisplay/FilteredComments';
import LabelFilter from '../components/CommentDisplay/LabelFilter';

const CommentDisplaySection = styled.div`
  position: relative;
  height: 100%;
  grid-area: CommentDisplaySection;
`

export default function CommentDisplay() {
  return (
    <CommentDisplaySection>
      <LabelFilter/>
      <FilteredComments/>
    </CommentDisplaySection>
  )
}