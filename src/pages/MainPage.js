import Hero from "../components/Hero";
import Main from "../components/Main";
import Keyword from "../components/Keyword";
import Anchor from "../components/Anchor";
import { eren, mikasa, levi, armin, reiner } from '../components/HeroData';
import Supporting from '../components/Supporting';
import { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const MainPage = () => {
  
  const outerDivRef = useRef();
  const [scrollNav, setScrollNav] = useState(false);

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
        }else{
          outerDivRef.current.scrollTo({
            top:pageHeight * 3,
            left:0,
            behavior:'smooth',
          });
          setScrollNav(true)
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
          setScrollNav(false);         
        }else{
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
     <Main />
      <HeroWrap >
        <Hero {...levi} />
        <Hero {...armin} />
        <Hero {...eren} />
        <Hero {...mikasa} />
        <Hero {...reiner} />
      </HeroWrap>
      <Supporting  />
      <Keyword scrollNav={scrollNav}/>
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
