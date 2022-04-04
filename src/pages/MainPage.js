import Hero from "../components/Hero";
import Main from "../components/Main";
import styled from 'styled-components';
import { eren, mikasa, levi, armin, reiner } from '../components/HeroData';
import { useState } from 'react';
import InfoDate, { erendata, mikasadata, levidata, armindata, reinerdata }  from "../components/InfoData";
import Info from "../components/Info";
import { useEffect } from "react";
import { InfoData } from '../components/InfoData';


const MainPage = () => {
  return (
      <>
    <Main />
    <HeroWrap>
    <Hero {...levi} />
    <Hero {...armin} />
    <Hero {...eren}/>
    <Hero {...mikasa}/>
    <Hero {...reiner}/>
    </HeroWrap>
    
    </>
  )
}
export default MainPage;

const HeroWrap = styled.div`
  display:flex;
  width:100%;
  box-sizing: border-box;
  position:relative;
`
