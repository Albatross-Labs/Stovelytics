import React, { useContext } from 'react'
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PeriodContext } from '../../../contexts/PeriodContext';

const Count = styled.div`

`

export default function IconWithCount({label}) {
  const [period, setPeriod] = useContext(PeriodContext)
  
  var count = 0;
  for(const comment of period){
    if(comment.da === label.name || comment.theme === label.name )
      count++
  }
  
  return (
    <div>
      <div>{label.name}</div>
      <FontAwesomeIcon icon={label.img}/>
      <Count>{count}</Count>
    </div>
  )
}
