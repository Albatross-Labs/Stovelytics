import React from 'react'
import Topbar from './section/Topbar'
import PeriodAnalysis from './section/PeriodAnalysis'
import CommentDisplay from './section/CommentDisplay'

export default function App() {
  return (
    // <div style={{flexDirection: 'row'}}>
    //   <Topbar/>

    // </div>

    <div style={{
      // position: 'relative',
      height: '80%',
      width: '100%',
      flexDirection: 'column'}}
      >
        <PeriodAnalysis/>
        <CommentDisplay/>
    </div>

    // <div>

    // </div>
  )
}