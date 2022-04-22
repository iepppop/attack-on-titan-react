import styled from 'styled-components';
import { charaters } from './CharaterData';
import React, { useState, useEffect, useRef } from 'react';
import { VscArrowLeft, VscArrowRight } from 'react-icons/vsc';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { BsImage } from 'react-icons/bs';

const Charater = () => {
    const [slideIndex, setSlideIndex] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);
    const ref = useRef();

    const NextSlide = () => {
        if (slideIndex !== charaters.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === charaters.length) {
            setSlideIndex(1);
        }
    }

    const PrevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(charaters.length);
        }
    }

    const ImgSwipe = () => {
        if(currentIndex === 0){
            setCurrentIndex(currentIndex + 1);
        }else{
            setCurrentIndex(0);
        }
    }


    return (
        <Wrap>
            {charaters.map((character, index) => {
                return (
                    <Container>
                        <Border>
                            <h1 style={{ opacity: `${slideIndex === index + 1 ? "1" : "0"}` }}>{character.name}</h1>
                        </Border>
                        <Img key={index} src={character.img} style={{ opacity: `${slideIndex === index + 1 ? "1" : "0"}` }} />
                        <Border>
                            <h2 style={{ opacity: `${slideIndex === index + 1 ? "1" : "0"}` }}>{character.koreaname}</h2>
                            <PrevButton onClick={PrevSlide}><VscArrowLeft /></PrevButton>
                        </Border>
                        <Border>
                            <NextButton onClick={NextSlide}><VscArrowRight /></NextButton>
                            <h3 style={{ opacity: `${slideIndex === index + 1 ? "1" : "0"}` }}>{character.region}</h3>
                            <h4 style={{ opacity: `${slideIndex === index + 1 ? "1" : "0"}` }}>{character.pa}</h4>
                        </Border>
                        <Border></Border>
                        <Border>
                            <Subtitle>
                                CHARATER
                            </Subtitle>
                            <GSlider>
                                <GIcon>
                                    <BsImage />
                                </GIcon>
                                <GImg>
                                    <GImgWrap ref={ref} style={{ 
                                        transform: `translateX(${-145 * currentIndex + 250}px)`,
                                        transition: "0.4s",
                                        opacity: `${slideIndex === index + 1 ? "1" : "0"}`
                                        }}>
                                    <img src={character.imgs}/>
                                    <img src={character.imgs2}/>
                                    </GImgWrap>
                                </GImg>
                                <GButton onClick={()=>ImgSwipe()}>
                                    <MdOutlineKeyboardArrowRight />
                                </GButton>
                            </GSlider>
                        </Border>
                    </Container>
                )
            })}
        </Wrap>
    )
}
export default Charater;

const Wrap = styled.div`
    width:100%;
    height:100%;
    position:relative;
`

const Container = styled.div`
    width:100%;
    height:100vh;
    color:white;
    z-index:2;
    overflow:hidden;
    display:flex;
    position:absolute;
    display:flex;
`

const PrevButton = styled.button`
    position:absolute;
    right:0;
    width:120px;
    height:120px;
    border:none;
    background:#6b1319;
    color:white;
    font-size:20px;
    z-index:999;
    cursor:pointer;
`

const NextButton = styled.button`
    position:absolute;
    left:0;
    width:120px;
    height:120px;
    border:none;
    background:#6b1319;
    color:white;
    font-size:20px;
    cursor:pointer;
    z-index:999;
`

const Img = styled.img`
   position:absolute;
   right:0;
   width:80%;
   height:100%;
   object-fit:cover;
   transition: opacity ease-in-out 0.4s;
   opacity:0;
`

const Border = styled.div`
    width:25%;
    height:100%;
    border-right: 1px solid rgba(255,255,255,0.2);
    position:relative;
    text-transform:uppercase;
    &:nth-child(4){
        border-right:none;
    }

    &:nth-child(4){
        border-right:none;
    }

    &:nth-child(5){
        border-right:none;
    }

    &:last-child{
        border-right:none;
    }

    & h1{
        font-weight: 900;
        font-family: "Poppins", sans-serif;
        position:absolute;
        bottom:82px;
        left:50%;
        display:flex;
        align-items:end;
        transform: translate(-50%,0);
        height:100%;
        font-size:70px;
        line-height:80%;
    }

    & h2{
        font-family: "Poppins", sans-serif;
        position:absolute;
        bottom:82px;
        left:50%;
        display:flex;
        align-items:end;
        transform: translate(-50%,0);
        height:100%;
        font-size:20px;
        line-height:80%;
    }

    & h3{
        position:absolute;
        bottom:108px;
        display:flex;
        left:60px;
        align-items:end;
        height:100%;
        font-size:16px;
        font-weight:400;  
        font-family: 'Pretendard';
    }

    & h4{
        position:absolute;
        bottom:82px;
        left:60px;
        display:flex;
        align-items:end;
        height:100%;
        font-size:16px;
        font-weight:400;  
        font-family: 'Pretendard';
    }
`

const Subtitle = styled.div`
    bottom:230px;
    right:60px;
    position:absolute;
    font-weight:800;
    font-family: "Poppins", sans-serif;
    font-size:30px;
    z-index:999;
    color:rgba(255,255,255,0.9);
`

const GSlider = styled.div`
    width:375px;
    height:120px;
    position:absolute;
    z-index:0;
    right:0;
    bottom:82px;
    display:flex;
    overflow:hidden;
`
const GIcon = styled.div`
    width:120px;
    height:120px;
    background:#6b1319;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:20px;
    position:relative;
    z-index:998;
`

const GImg = styled.div`
    width:200px;
    height:120px;
    position:relative;
    z-index:9;
    transform: translateX(-250px);
    transition:0.4s;
`

const GImgWrap = styled.div`
    position: absolute;
    z-index: 109;
    display:flex;

    & img{
        height:120px;
        width:200px;
        object-fit: cover;
    }
`

const GButton = styled.button`
    background:none;
    border:none;
    cursor:pointer;
    color:white;
    font-size:30px;
    position:absolute;
    right:10px;
    top:55%;
    transform:translate(0,-50%);
    z-index:998;
`