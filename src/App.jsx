import React, { useState, useEffect } from 'react'
import Topbar from './sections/Topbar'
import PeriodAnalysis from './sections/PeriodAnalysis'
import CommentDisplay from './sections/CommentDisplay'
import styled from "styled-components";
import { DataProvider } from './contexts/DataContext';
import { CacheProvider } from './contexts/CacheContext';

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
  const [comments, setComments] = useState([]);

  const fetchComments = async () => (
    await axios.get(``)
    .then(res=>{
      console.log(res.data.body)
      setCache(res.data.body)
      setComments(res.data.body)
    })
  )

  useEffect(()=>{
    fetchComments();
  }, []);

  return (
    <CacheProvider value={cache}>
      <DataProvider value={[comments, setComments]}>
        <Sections>
          <Topbar/>
          <PeriodAnalysis/>
          <CommentDisplay/>
        </Sections>
      </DataProvider>
    </CacheProvider>
  )
}