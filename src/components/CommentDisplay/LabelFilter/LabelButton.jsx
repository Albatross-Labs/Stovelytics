import React, { useState } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 15%;
  margin: 2px;
  font-size: 0.6em;

  background-color: #F0F0F0;
  color: #000000;

  &.active {
    background-color: #D1BAD9;
    color: #87419E;
    font-weight: 600;
  }
`

export default function LabelButton({title}) {
  const [active, setActive] = useState(false);

  return (
    <Button 
      className={active? `label active`: ``}
      onClick={()=>{setActive(!active)}}
    >
      {title}
    </Button>
  )
}
