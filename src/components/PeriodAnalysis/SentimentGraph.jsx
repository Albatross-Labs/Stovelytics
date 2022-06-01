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
  // background-color: green;
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

  background-color: #FDF7FF;
  // margin: 14px;
  box-sizing: border-box;
  // overflow: scroll;
`

export default function SentimentGraph() {

  const [period, setPeriod] = useContext(PeriodContext)
  const [labelFormat, setLabelFormat] = useState('Day')

  var data = {}  
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
    
    // console.log("dayLabels", dayLabels)
    // console.log("dayDatas", dayDatas)
    // console.log("dayDatasPos", dayDatasPos)
    // console.log("dayDatasNeu", dayDatasNeu)
    // console.log("dayDatasNeg", dayDatasNeg)
    
    data = {
      labels: dayLabels,
      datasets: [
        {
          label: 'Positive',
          data: dayDatasPos,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
          label: 'Neutral',
          data: dayDatasNeu
        },      {
          label: 'Negative',
          data: dayDatasNeg,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
      ]
    }
  }
  // 시간별 정보 모으기
  else{
    const hourCount = {}
    period.map(comment => {
    const hour = comment.created.substring(8, 10) + 'd' + comment.created.substring(10, 13) + 'h'
    if(!(hour in hourCount))
        hourCount[hour] = new Array();
      hourCount[hour].push(comment)
    })
    
    const hourLabels = []
    const hourDatas = []
    const hourDatasPos = []
    const hourDatasNeu = []
    const hourDatasNeg = []
    
    for(const hourly in hourCount){
      hourLabels.push(hourly)
      
      var posCnt = 0;
      var neuCnt = 0;
      var negCnt = 0;
      for(const item of hourCount[hourly]){
        if (item.sentiment == '1')
          posCnt++
        if (item.sentiment == '0')
          neuCnt++
        if (item.sentiment == '-1')
        negCnt++
      }

      hourDatas.push(hourCount[hourly].length)
      hourDatasPos.push(posCnt)
      hourDatasNeu.push(neuCnt)
      hourDatasNeg.push(negCnt)

    }
    hourLabels.reverse()
    hourDatas.reverse()
    hourDatasPos.reverse()
    hourDatasNeu.reverse()
    hourDatasNeg.reverse()
    
    // console.log("hourLabels", hourLabels)
    // console.log("hourDatas", hourDatas)
    // console.log("hourDatasPos", hourDatasPos)
    // console.log("hourDatasNeu", hourDatasNeu)
    // console.log("hourDatasNeg", hourDatasNeg)
    
    data = {
      labels: hourLabels,
      datasets: [
        {
          label: 'Positive',
          data: hourDatasPos
        },
        {
          label: 'Neutral',
          data: hourDatasNeu
        },      {
          label: 'Negative',
          data: hourDatasNeg
        }
      ]
    }
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
