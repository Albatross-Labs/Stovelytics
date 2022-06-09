import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div `
  border: 2px solid #2f3542;
  margin: 8px;
  padding-left: 18px;
  padding-right: 14px;
  overflow: hidden;
  border-radius: 10px;
  // background-color: #f2f2f2;
  color: #3f3f3f;
  font-family: Rockwell;
`

const Header = styled.p`
  font-weight: 700;
  font-size: 20px;
  font-family: Rockwell;
`

const Created = styled.p`
  text-align: right;
  padding-right: 12px;
  margin-top: 18px;
`

const User = styled.p`
  text-align: right;
  padding-right: 12px;
  margin-bottom: 22px;
`

const ClassWrapper = styled.div`
  display: flex;
  width: 30%;
  margin: 0;
`

const Class = styled.button`
  border: none;
  border-radius: 20%;
  margin: 2px;
  font-size: 0.8em;
  margin-right: 8px;

  background-color: ${
    props => {
      const label = props.children
      if(label === '긍정')
        return 'rgba(53, 162, 235, 0.3)'
      if(label === '부정')
        return 'rgba(255, 99, 132, 0.3)'

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
      const label = props.children
      if(label === '긍정')
        return 'rgba(53, 162, 235)'
      if(label === '부정')
        return 'rgba(255, 99, 132)'

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
  font-weight: 600;

`

export default function CommentSnapshot({comment}) {
  return (
    <Wrapper>
      <Header>{comment.header}</Header>
      <Created>{comment.created}</Created>
      <User>{comment.user}</User>

      <ClassWrapper>
        <Class>{`${comment.sentiment}`== '-1' ? '부정' : `${comment.sentiment}`== '0' ? '중립' : '긍정'}</Class>
        <Class>{comment.da}</Class>
        <Class>{comment.theme}</Class>
        {/* {comment.keywords.map(keyword => (
          <p>{keyword[0]}</p> 
        ))} */}
      </ClassWrapper>

      <p>{comment.content}</p>
    </Wrapper>

  )
}
