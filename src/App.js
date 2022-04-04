import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Content = () => {

}

export default function App() {

  const [contents, setContents] = useState([]);

  const fetchContent = async () => (
    await axios.get(`https://17fe9izmx3.execute-api.ap-northeast-2.amazonaws.com/prod`)
    .then(res=>{
      // console.log(res.data.body)
      setContents(JSON.parse(res.data.body))
    })
  )
  
  useEffect(()=>{
    // fetchContent();
  }, []);

  console.log(contents);

  return (
    <div>
      <button onClick={fetchContent}>데이터 가져와줘</button>

      <p>Hi Stovelytics</p> 
      {contents.map((content)=>(
        <div style={{border: '2px solid gray'}} key={content.created}>
          <p>header: {content.header}</p>
          <p>created: {content.created}</p>
          <p>user: {content.user}</p>
          <p>content: {content.content}</p>
        </div>
      ))}
    </div>
    
  )
}
