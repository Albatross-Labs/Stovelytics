import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto';

import { PeriodContext } from '../../contexts/PeriodContext';
import DayHourRadio from './DayHourRadio';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  background-color: green;
  // margin: 4px;
  // box-sizing: border-box;
  display: flex;
  justify-content: center;
  // align-items: center;
`
const ChartWrapper = styled.div`
  position: relative;
  width: 98%;
  height: 90%;
  bottom: -8%;

  background-color: pink;
  // margin: 14px;
  box-sizing: border-box;
  // overflow: scroll;
`

export default function SentimentGraph() {

  const [period, setPeriod] = useContext(PeriodContext)
  const [labelFormat, setLabelFormat] = useState('Day')

  // 일별 정보 모으기
  if(labelFormat == 'Day'){

    const dayCount = {}
    period.map(comment => {
    const day = comment.created.substring(5, 10)
    if(!(day in dayCount))
        dayCount[day] = new Array();
      dayCount[day].push(comment)
    })
    
    const dayLabels = []
    const dayDatas = []
    const dayDatasPos = []
    const dayDatasNeu = []
    const dayDatasNeg = []
    
    for(const daily in dayCount){
      dayLabels.push(daily)
      
      var posCnt = 0;
      var neuCnt = 0;
      var negCnt = 0;
      for(const item of dayCount[daily]){
        if (item.sentiment == '1')
          posCnt++
        if (item.sentiment == '0')
          neuCnt++
        if (item.sentiment == '-1')
        negCnt++
      }

      dayDatas.push(dayCount[daily].length)
      dayDatasPos.push(posCnt)
      dayDatasNeu.push(neuCnt)
      dayDatasNeg.push(negCnt)

    }
    dayLabels.reverse()
    dayDatas.reverse()
    
    dayDatasPos.reverse()
    dayDatasNeu.reverse()
    dayDatasNeg.reverse()
    
    console.log("dayLabels", dayLabels)
    console.log("dayDatas", dayDatas)
    console.log("dayDatasPos", dayDatasPos)
    console.log("dayDatasNeu", dayDatasNeu)
    console.log("dayDatasNeg", dayDatasNeg)
    
    const data = {
      labels: dayLabels,
      datasets: [
        {
          label: 'Positive',
          data: dayDatasPos
        },
        {
          label: 'Neutral',
          data: dayDatasNeu
        },      {
          label: 'Negative',
          data: dayDatasNeg
        }
      ]
    }
  }
  // 시간별 정보 모으기
  else{

  }

  return (
    <Wrapper>
      <DayHourRadio 
        onChange={(e)=>{
          setLabelFormat(e.target.value)
        }}
        selectedValue={labelFormat}
      />
      <ChartWrapper>
          <Line 
            options={{
              responsive:true,
              maintainAspectRatio: false
            }} 
            data={data} 
          />
      </ChartWrapper>
    </Wrapper>
  )
}
