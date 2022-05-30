import React, { useState } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 15%;
  background-color: #F0F0F0;
  color: #000000;

  &.active {
    background-color: #DBF2FF;
    color: #1170FF;
  }
`

export default function LabelButton({title}) {
  const [active, setActive] = useState(false);

  return (
    <Button 
      className={active? `active`: ``}
      onClick={()=>{setActive(!active)}}
    >
        {title}
    </Button>
  )
}
