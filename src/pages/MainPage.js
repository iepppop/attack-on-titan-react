import Hero from "../components/Hero";
import Main from "../components/Main";
import Keyword from "../components/Keyword";
import Anchor from "../components/Anchor";
import { eren, mikasa, levi, armin, reiner } from '../components/HeroData';
import Supporting from '../components/Supporting';
import { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Charater from "../components/Charater";
import Music from "../components/Music";

const MainPage = () => {
  const outerDivRef = useRef();

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current;
      const pageHeight = window.innerHeight;
   
      if(deltaY > 0){
        if(scrollTop >= 0 && scrollTop < pageHeight){
          outerDivRef.current.scrollTo({
            top:pageHeight,
            left:0,
            behavior:'smooth',
          });
        } else if( scrollTop >= pageHeight && scrollTop < pageHeight * 2){
         outerDivRef.current.scrollTo({
           top:pageHeight * 2,
           left:0,
           behavior:'smooth',
         });
        }else if ( scrollTop >= pageHeight && scrollTop < pageHeight * 3){
          outerDivRef.current.scrollTo({
            top:pageHeight * 3,
            left:0,
            behavior:'smooth',
          });
        }else{
          outerDivRef.current.scrollTo({
            top:pageHeight * 4,
            left:0,
            behavior:'smooth',
          });
        }
      }else{
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }
        else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
        }else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4){
          outerDivRef.current.scrollTo({
            top: pageHeight * 2,
            left:0,
            behavior:"smooth",
          });      
        }else if (scrollTop >= pageHeight && scrollTop < pageHeight * 5){
          outerDivRef.current.scrollTo({
            top: pageHeight * 3,
            left:0,
            behavior:"smooth",
          });      
        }
        else{
          outerDivRef.current.scrollTo({
            top: 0,
            left:0,
            behavior:"smooth",
          });
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
        <BarDot style={{background:'#6b1319'}}></BarDot>
        <BarDot></BarDot>
        <BarDot></BarDot>
        <BarDot></BarDot>
        <BarDot></BarDot>
        <h1>06</h1>
      </Bar>
     <Main />
      <HeroWrap >
        <Hero {...levi} />
        <Hero {...armin} />
        <Hero {...eren} />
        <Hero {...mikasa} />
        <Hero {...reiner} />
      </HeroWrap>
      <CharaterWrap>
      <Charater />
      </CharaterWrap>
      <Keyword />
      <Music />
    </Contain>
  )
}
export default MainPage;

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
  z-index:9999;
  color:white;
  top:50%;
  transform:translate(0,-50%);

  & h1{
    font-size:20px;
    font-family: "Poppins", sans-serif;
    padding:10px 0;
  }
`

const BarDot = styled.div`
  width:2px;
  height:20px;
  background: #eee;
  margin:0 0 0 10px;
`