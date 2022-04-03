import styled, { keyframes } from "styled-components";
import Video from '../video/titan.mp4';
import logo from '../images/logo.png';
import { useState, useEffect, useRef } from 'react';

const Main = () => {
    const [ click, setClick ] = useState(false);
    const outerDivRef = useRef();

    const handleClick = () => setClick(!click);


    return (
        <Container>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
            <VideoBg2 />
            <LogoWrapper click={click}>
            <Logo src={logo} onClick={handleClick} width={click ? 120: 1000}/>
            </LogoWrapper>
        </Container>
    )
}
export default Main;

const Container = styled.div`
    position: relative;
    height: 100vh;
    width:100%;
    overflow: hidden;
    scroll-snap-align: start;
`

const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    --o-object-fit: cover;
    object-fit: cover;
`

const VideoBg2 = styled.div`
position:absolute;
z-index:2;
height:100vh;
width:100%;
top:0;
left:0;
    background: linear-gradient(
    180deg,
    rgba(4,4,4,0.2) 0%,
    rgba(4,4,4,1.0) 100%
    ), 
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
`

const fadein = keyframes`
0% {
    width : 10px;
}
100% {
    width : 1000px;
}
`

const LogoWrapper = styled.div`
    position:absolute;
    top:${props => props.click ? '8%' : '50%'};
    left:${props => props.click ? '8%' : '50%'};
    transform:translate(-50%,-50%);
    z-index: 3;
    
`

const Logo = styled.img`
    animation: ${fadein} 3s;
    cursor:pointer;
`
