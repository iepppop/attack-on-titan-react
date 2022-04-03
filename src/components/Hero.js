import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Hero = ({ img, alt, name, name2, korean, color }) => {
  return (
    <Container>
        <Wrapper>
        <Img src={img} alt={alt} />
        <HeroName >
            {name}<HeroP>{name2}</HeroP>
            <Koreaname style={{background:color}}>{korean}</Koreaname>
            </HeroName>
        </Wrapper>
    </Container>
  )
}
export default Hero;

const Container = styled.div`
    height:100vh;
    background:#040404;
    scroll-snap-align: start;
    display:flex;
    width:20%;
    cursor: pointer;
    border-right:1px solid #272727;

    &:hover Img{
        filter: grayscale(0%);  
        transition: 0.3s ease-in-out;
    }
`

const Wrapper = styled.div`
    height:100vh;
    width:100vw;
    background:#040404;
    scroll-snap-align: start;
    display:flex;
    position:relative;
    overflow:hidden;
`

const Img = styled.img`
    height:100%;
    position:absolute;
    margin-left:-15%;
    filter: grayscale(100%);
`

const HeroName = styled.div`
   position:absolute;
   z-index:2;
   bottom:50px;
   left:20px;
   color:white;
   font-size:60px;
   opacity:0; 
   font-weight:900;
   font-family: 'Noto Sans KR', sans-serif;

   ${Container}:hover & { 
    opacity:1; 
    transition: 0.4s ease-in-out;
   }
`

const HeroP = styled.div`
    margin-top:-30px;
    margin-bottom:10px;
`

const Koreaname = styled.div`
    font-size:25px;
    display:inline-block;
    vertical-align: top;
    padding:2px 5px;
    font-weight:600;
`