import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 2px;
`

const Label = styled.div`
  font-weight: 700;
  color: #87419E;

  padding: 2px;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export default function ToggleFilterList({label, children}) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <ButtonWrapper>{children}</ButtonWrapper>
    </Wrapper>
  )
}
