import Hero from "../components/Hero";
import Main from "../components/Main";
import Keyword from "../components/Keyword";
import { eren, mikasa, levi, armin, reiner } from '../components/HeroData';
import { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Charater from "../components/Charater";
import Music from "../components/Music";
import Watch from "../components/Watch";

const MainPage = () => {
  const outerDivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);
  const DIVIDER_HEIGHT = 5;

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current;
      const pageHeight = window.innerHeight;
   
      if(deltaY > 0){
        if(scrollTop >= 0 && scrollTop < pageHeight){
          outerDivRef.current.scrollTo({
            top:pageHeight  +  DIVIDER_HEIGHT * 2,
            left:0,
            behavior:'smooth',
          });
          setScrollIndex(2);
        } else if( scrollTop >= pageHeight && scrollTop < pageHeight * 2){
         outerDivRef.current.scrollTo({
           top:pageHeight * 2 + DIVIDER_HEIGHT * 3,
           left:0,
           behavior:'smooth',
         });
         setScrollIndex(3);
        }else if ( scrollTop >= pageHeight && scrollTop < pageHeight * 3){
          outerDivRef.current.scrollTo({
            top:pageHeight * 3 + DIVIDER_HEIGHT * 4,
            left:0,
            behavior:'smooth',
          });
          setScrollIndex(4);
        }else if ( scrollTop >= pageHeight && scrollTop < pageHeight * 4){
          outerDivRef.current.scrollTo({
            top:pageHeight * 4 + DIVIDER_HEIGHT * 5,
            left:0,
            behavior:'smooth',
          });
          setScrollIndex(5);
        }
        else{
          outerDivRef.current.scrollTo({
            top:pageHeight * 5 + DIVIDER_HEIGHT * 6,
            left:0,
            behavior:'smooth',
          });
          setScrollIndex(6);
        }
      }else{
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          outerDivRef.current.scrollTo({
            top: 0 + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          outerDivRef.current.scrollTo({
            top: 0 + DIVIDER_HEIGHT ,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        }
        else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        }else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4){
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 3,
            left:0,
            behavior:"smooth",
          });      
          setScrollIndex(3);
        }else if (scrollTop >= pageHeight && scrollTop < pageHeight * 5){
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 4,
            left:0,
            behavior:"smooth",
          }); 
          setScrollIndex(4);
        }else if (scrollTop >= pageHeight && scrollTop < pageHeight * 6){
          outerDivRef.current.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT * 5,
            left:0,
            behavior:"smooth",
          }); 
          setScrollIndex(5);
        }
        else{
          outerDivRef.current.scrollTo({
            top: 0,
            left:0,
            behavior:"smooth",
          });
          setScrollIndex(6);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <Contain ref={outerDivRef}>
      <Bar>
        <h1>01</h1>
        <BarDot scrollIndex={1} style={{background: `${scrollIndex === 1 ? '#6b1319' : '#eee'}`}}></BarDot>
        <BarDot scrollIndex={2} style={{background: `${scrollIndex === 2 ? '#6b1319' : '#eee'}`}}></BarDot>
        <BarDot scrollIndex={3} style={{background: `${scrollIndex === 3 ? '#6b1319' : '#eee'}`}}></BarDot>
        <BarDot scrollIndex={4} style={{background: `${scrollIndex === 4 ? '#6b1319' : '#eee'}`}}></BarDot>
        <BarDot scrollIndex={5} style={{background: `${scrollIndex === 5 ? '#6b1319' : '#eee'}`}}></BarDot>
        <BarDot scrollIndex={6} 
        style={{
          background: `${scrollIndex === 6 ? '#6b1319' : '#eee'}`}}></BarDot>
        <h1>06</h1>
      </Bar>

    <Divide></Divide>
     <Main />
     
    <Divide></Divide>
      <HeroWrap >
        <Hero {...levi} />
        <Hero {...armin} />
        <Hero {...eren} />
        <Hero {...mikasa} />
        <Hero {...reiner} />
      </HeroWrap>
      
    <Divide></Divide>
      <CharaterWrap>
      <Charater />
      </CharaterWrap>
      
    <Divide></Divide>
      <Keyword />
      
    <Divide></Divide>
      <Music />
      
    <Divide></Divide>
      <Watch />
    </Contain>
  )
}
export default MainPage;

const Divide = styled.div`
  width: 100%;
  height: 5px;
  background-color: #020202;
`

const Contain = styled.div`
  height:100vh;
  overflow-y: auto;
  position:relative;
`

const HeroWrap = styled.div`
  display:flex;
  width:100%;
  box-sizing: border-box;
  position:relative;
`

const CharaterWrap = styled.div`
  height:100%;
  width:100%;
  overflow:hidden;
  background:#020202;
`

const Bar = styled.div`
  position:fixed;
  right:58px;
  z-index:997;
  color:#fff;
  top:50%;
  transform:translate(0,-50%);
  

  & h1{
    font-size:20px;
    font-family: "Poppins", sans-serif;
    padding:10px 0;
  }
`

const BarDot = styled.div`
  width:3px;
  height:25px;
  margin:0 0 0 10px;
  margin-top:-1px;        
  
  @media screen and (max-height: 800px) {
    height:15px;
}

`