import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from "styled-components";

import Topbar from './sections/Topbar'
import PeriodAnalysis from './sections/PeriodAnalysis'
import CommentDisplay from './sections/CommentDisplay'

import { CommentsProvider } from './contexts/CommentsContext';
import { CacheProvider } from './contexts/CacheContext';
import { PeriodProvider } from './contexts/PeriodContext';

import fetchData from '../data_results.json'
// import fetchData from '../second_data.json'
// import fetchData from '../third_stove_data.json'

const Sections = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  display: grid;
  height: 100vh;
  grid-template-rows: 0.1fr 0.9fr;
  grid-template-columns: 0.6fr 0.4fr;
  grid-template-areas: 
    "TopBarSection TopBarSection"
    "PeriodAnalysisSection CommentDisplaySection"
  ;
`

export default function App() {
  
  const [cache, setCache] = useState([]);
  const [period, setPeriod] = useState([]);
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    await axios.get('https://yjdssur46d.execute-api.ap-northeast-2.amazonaws.com/prod')
    .then(res=>{
      console.log(res)
      const fetchData = JSON.parse(res.data.body)['Items']
      
      console.log(fetchData)
      fetchData.sort(function(a,b){
        return a.key < b.key ? -1 : a.key > b.key ? 1 : 0; 
      })
      console.log(fetchData)
      
      setCache(fetchData)
      setPeriod(fetchData)
      setComments(fetchData)
    })
  }

  useEffect(()=>{
    fetchComments();

    // local에서 임시로 json 데이터 활용하기
    // fetchData.sort(function(a,b){
    //   return a.key < b.key ? -1 : a.key > b.key ? 1 : 0; 
    // })
    
    // setCache(fetchData)
    // setPeriod(fetchData)
    // setComments(fetchData)
  }, []);

  return (
    <CacheProvider value={cache}>
      <PeriodProvider value={[period, setPeriod]}>
        <CommentsProvider value={[comments, setComments]}>
          <Sections>
            <Topbar/>
            <PeriodAnalysis/>
            <CommentDisplay/>
          </Sections>
        </CommentsProvider>
      </PeriodProvider>
    </CacheProvider>
  )
}