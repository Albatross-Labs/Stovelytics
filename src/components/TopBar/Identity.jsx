import React from 'react'
import styled from 'styled-components';
import logo from '../../assets/icon.png'

const Wrapper = styled.div`
  position: relative;
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
`
const Logo = styled.img`
  position: absolute;
  display: block;
  width: 18%;
  width: auto;
  height: 85%;
  left: 4%;
  border-radius: 50%;
`
const SiteSlogan = styled.div`
  position: relative;
  left: 24%;
  width: 50%;
  height: 100%;
`
const Sitename = styled.div`
  position: absolute;
  height: 60%;
  display: flex;
  align-items: center;
  top: 5%;
  font-size: 5em;
  font-family: 'Rockwell'
`
const Slogan = styled.div`
  position: absolute;
  height: 40%;
  display: flex;
  top: 50%;
  align-items: center;
  font-size: 1.4em;
  font-family: 'Rockwell'

`

export default function Identity() {
  return (
    <Wrapper>
      <Logo src={logo}/>
      <SiteSlogan>
        <Sitename>Stovelytics</Sitename>
        <Slogan>action for reaction</Slogan>
      </SiteSlogan>
    </Wrapper>
  )
}
