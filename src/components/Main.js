import styled, { keyframes } from "styled-components";
import Video from '../video/titan.mp4';
import logo from '../images/logo.png';
import { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import SoundBar from "./SoundBar";

const Main = () => {
    const [click, setClick] = useState(false);

    useEffect(() => {
        window.addEventListener('wheel', () => {
            setClick(true);
        })
    }, [])

    return (
        <Container>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            <VideoBg2 />
            <VideoBg1 />
           
            <LogoWrapper click={click}>
                <Logo src={logo} />
            </LogoWrapper>
            <SoundBar />
            <ScrollBtn>
                <h1>scroll</h1>
                <h2><MdOutlineKeyboardArrowDown /></h2>
            </ScrollBtn>
        </Container>
    )
}
export default Main;

const Container = styled.div`
    position: relative;
    height: 100vh;
    width:100%;
`

const VideoBg = styled.video`
    position:absolute;
    z-index:2;
    height:100vh;
    width:100%;
    top:0;
    left:0;
    --o-object-fit: cover;
    object-fit: cover;
    position:relative;
    z-index:1;
`

const VideoBg1 = styled.div`
    position:absolute;
    z-index:1;
    height:100vh;
    width:100%;
    top:0;
    left:0;
    background:black;
    z-index:0;
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
    position:fixed;
    top:${props => props.click ? '58px' : '50%'};
    left:${props => props.click ? '58px' : '50%'};
    transform:${props => props.click ? '0' : 'translate(-50%,-50%)'};
    z-index:2;
    transition: 0.5s ease-out;


    & img{
        width:${props => props.click ? '100px' : '900px'};
        transition: 0.5s ease-out;
    }
    
`

const Logo = styled.img`
    animation: ${fadein} 1s;
    cursor:pointer;
`

const dongdong = keyframes`
    25% { 
    transform: translatey(2px); 
    } 
    50% { 
    transform: translatey(-2px); 
    }
    75% {
    transform: translatey(2px);
    }
    100%{
    transform: translatey(-2px);
    }
`

const ScrollBtn = styled.div`
    position:absolute;
    bottom:0;
    left:50%;
    z-index:99;
    color:white;
    margin:0 0 30px 0;

    & h1{
        font-size:14px;
        font-weight:400;
        opacity:0.8;
        letter-spacing: 1px;
    }

    & h2{
        text-align:center;
        animation: ${dongdong} 2s  infinite;
    }
`