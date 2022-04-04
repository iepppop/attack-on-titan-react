import Hero from "../components/Hero";
import Main from "../components/Main";
import styled from 'styled-components';
import { eren, mikasa, levi, armin, reiner } from '../components/HeroData';
import { useState } from 'react';
import Info from "../components/Info";


const MainPage = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
      <>
    <Main />
    <HeroWrap>
    <Info {...props} isOpen={isOpen} toggle={toggle}/>
    <Hero {...levi} toggle={toggle}/>
    <Hero {...armin} toggle={toggle}/>
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
