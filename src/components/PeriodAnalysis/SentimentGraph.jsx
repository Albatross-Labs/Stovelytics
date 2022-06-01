import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto';

import { PeriodContext } from '../../contexts/PeriodContext';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  background-color: green;
  // margin: 4px;
  // box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ChartWrapper = styled.div`
  position: relative;
  width: 98%;
  height: 95%;
  background-color: pink;
  // margin: 14px;
  box-sizing: border-box;
`

export default function SentimentGraph() {

  const [period, setPeriod] = useContext(PeriodContext)


  // 일별 정보 모으기


  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [
      {
        data: [1, 2, 3, 4]
      }
    ]
  }

  return (
    <Wrapper>
      <ChartWrapper>
        <Line data={data} />
      </ChartWrapper>
    </Wrapper>
  )
}
