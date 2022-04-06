import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect, initialState } from 'react';
import { motion } from 'framer-motion';
import Slider from './Slider';



const Hero = ({ img, alt, name, name2, name3, korean, color, japann, infoimg, content, mark, videos }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const config = [
        { 
            title: 'iamge one',
            image: 'https://blog.kakaocdn.net/dn/rmxlK/btrywvUPdXp/G5fEkxoKZyv7LgxlI1KK11/img.png'
        },
        { 
            title: 'iamge two',
            image: 'https://blog.kakaocdn.net/dn/ccYzxk/btryzpFC88n/tJpsNggVP7DQm5iKFTk2K1/img.png'
        },
        { 
            title: 'iamge three',
            image: 'https://blog.kakaocdn.net/dn/cf7lHy/btryx4hDTmM/JRtWUQkNj1zmyyqtQpuZW0/img.png'
        }
    ]

    return (
        <>
            <Container>
                <Wrapper onClick={toggle}>
                    <Img src={img} alt={alt} />
                    <HeroName >
                        {name}<HeroP>{name2}</HeroP>
                        <Koreaname style={{ background: color }}>{korean}</Koreaname>
                    </HeroName>
                </Wrapper>
                <InfoWrap isOpen={isOpen}>
                    <Info>
                        <InfoBackground>
                            <Name>
                                <Nameh1>{name} {name2}</Nameh1>
                                <Nameh2 style={{ background: color }}>{korean}</Nameh2>
                                <Content>{content}</Content>
                            </Name>
                            <InfoImg src={infoimg} width={1500} />
                        </InfoBackground>
                        <InfoBottom >
                            <InfoMark style={{ background: color }}>
                                <InfoImgMark src={mark} width={250} />
                            </InfoMark>
                            <InfoVideo>   
                            
                                     <Slider />
                              
               
                            </InfoVideo>
                        </InfoBottom>
                    </Info>

                </InfoWrap>
            </Container>
        </>
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
   z-index:1;
   bottom:0px;
   left:38px;
   color:white;
   font-size:52px;
   opacity:0; 
   font-weight:800;
   font-family: 'Poppins' , sans-serif;

   ${Container}:hover & { 
    opacity:1; 
    transition: 0.4s ease-in-out;
   }

`

const HeroP = styled.div`
    margin-top:-30px;
`

const Koreaname = styled.div`
    font-size:25px;
    display:inline-block;
    vertical-align: top;
    padding:3px 10px 0px 10px;
    font-weight:600;
`

const InfoWrap = styled.div`
    width: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top:0;
    right:0;
    transition: 0.3s ease-in-out;
    position: fixed;
    z-index:998;
    background:#000;
    height: 100%;
    color:white;
    cursor:default;
`

const Info = styled.div`
    // position: fixed;
    // z-index: 998;
    // width: 100%;
    // height: 100%;
    // background-image: url(./../images/bg.jpg);
    // align-items: center;
    // top:0;
    // right:0;
    // transition: 0.3s ease-in-out;
    // color:white;
`

const InfoBackground = styled.div`
   background-image: url('https://blog.kakaocdn.net/dn/bQ8E5E/btryn9q7n3M/laKIi6BCAT54tLz1wfRq30/img.jpg');
   background-repeat: no-repeat;
   background-position-y: -150px;
   position:absolute;
   z-index:999;
   width:100%;
   height:100%;
   background-size:cover;
   padding:100px;
   display:flex;
`

const Name = styled.div`
   flex-direction: column;
`

const Nameh1 = styled.h1`
   font-size:100px;
   padding: 2px 15px;
   font-family: 'Poppins', sans-serif;
   font-weight:800;
`

const Nameh2 = styled.div`
   font-size:40px;
   display:inline-block;
   padding: 2px 15px;
   font-family: 'Noto Sans KR', sans-serif;
   font-weight:700;
   margin:0 0 0 20px;
   margin-top:-20px;
`

const Content = styled.div`
   margin:50px 0 0 20px;
   width:600px;
   line-height:180%;
`

const boxFade = keyframes`
  0% {
    top: -300px;
 
  }
  50% {
    top: -310px;
  }
  100% {
    top: -300px;
  }
`

const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`

const InfoImg = styled.img`
   position:absolute;
   height:auto;
   right:-100px;
   top:-300px;
   width: ${({ isOpen }) => (isOpen ? '0' : '80%')};
   transtion: 0.3s ease-in-out;
   z-index:-1;
}
`

const InfoBottom = styled.div`
   position:absolute;
   z-index:1000;
   background:#000;
   height:350px;
   width:100%;
   bottom:0;
   display: flex;
`

const InfoMark = styled.div`
   width:20%;
   display:flex;  
   align-items:center;
   justify-content:center;
`

const InfoImgMark = styled.img`
width: ${({ isOpen }) => (isOpen ? '0' : '70%')};
padding:20px;
`

const InfoVideo = styled.div`
    width:80%;
    height:100%;
    position:relative;
    white-space:nowrap;
`
