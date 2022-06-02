import React , { useState } from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  z-index: 4;
  width: 30%;
  text-align: center;
`

export default function DayHourRadio({selectedValue, ...rest}) {

  return (
    <Wrapper>
      <input
          id="Day"
          value="Day"
          type="radio"
          checked={selectedValue === "Day"}
          {...rest}
        />Daily
        <input
          id="Hour"
          value="Hour"
          type="radio"
          checked={selectedValue === "Hour"}
          {...rest}
        />Hourly
    </Wrapper>
  )
}
