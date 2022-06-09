import React, { useContext } from 'react'
import styled from 'styled-components';

import { PeriodContext } from '../../../contexts/PeriodContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
  padding: 4%;
  width: 300px;
  margin: 1%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15%;

  background-color: ${
    props => {
      const label = props.label

      if(label === '질문')
        return 'rgb(109, 89, 106, 0.3)'
      if(label === '의견')
        return 'rgb(173, 112, 127, 0.3)'
      if(label === '건의')
        return 'rgb(230, 142, 124, 0.3)'
      if(label === '정보')
        return 'rgb(255, 189, 109, 0.3)'
      if(label === '일상')
        return 'rgb(142, 136, 217, 0.3)'

      if(label === '캐릭터')
        return 'rgb(105, 101, 128, 0.3)'
      if(label === '컨텐츠')
        return 'rgb(91, 116, 146, 0.3)'
      if(label === '이벤트')
        return 'rgb(71, 132, 154, 0.3)'
      if(label === '버그')
        return 'rgb(65, 146, 149, 0.3)'
      if(label === '점검')
        return 'rgb(86, 157, 134, 0.3)'
      if(label === '유저')
        return 'rgb(81, 128, 112, 0.3)'
      if(label === '회사')
        return 'rgb(0, 200, 147, 0.3)'
      if(label === '기타')
        return 'rgb(87, 228, 221, 0.3)'   
    }     
  };

  color: ${
    props => {
      const label = props.label

      if(label === '질문')
        return 'rgb(109, 89, 106)'
      if(label === '의견')
        return 'rgb(173, 112, 127)'
      if(label === '건의')
        return 'rgb(230, 142, 124)'
      if(label === '정보')
        return 'rgb(255, 189, 109)'
      if(label === '일상')
        return 'rgb(142, 136, 217)'
      
      if(label === '캐릭터')
        return 'rgb(105, 101, 128)'
      if(label === '컨텐츠')
        return 'rgb(91, 116, 146)'
      if(label === '이벤트')
        return 'rgb(71, 132, 154)'
      if(label === '버그')
        return 'rgb(65, 146, 149)'
      if(label === '점검')
        return 'rgb(86, 157, 134)'
      if(label === '유저')
        return 'rgb(81, 128, 112)'
      if(label === '회사')
        return 'rgb(0, 200, 147)'
      if(label === '기타')
        return 'rgb(87, 228, 221)'
    }    
  };
`

const Title = styled.div`
  width: 80px;
  margin: 10px;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  font-family: 'Nanum Gothic', sans-serif;
`

const Icon = styled(FontAwesomeIcon)`
  
`

const Count = styled.div`
  font-weight: 600;
  
`

export default function IconWithCount({task, label}) {
  const [period, setPeriod] = useContext(PeriodContext)
  
  var count = 0;
  for(const comment of period){
    // console.log(task, comment[task], label.name)
    if(comment[task] === label.name)
      count++
  }
  
  return (
    <Wrapper label={label.name}>
      {/* <Icon icon={faCoffee} /> */}
      <Title>{label.name}</Title>
      <Count>{count}</Count>
    </Wrapper>
  )
}
