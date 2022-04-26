import styled, { keyframes } from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { musics } from './MusicData';
import React, { useState, useEffect, useRef } from 'react';

const Music = () => {
    const [slider, setSlider] = useState(0);
    const [click, setClick] = useState(false);
    const ref = useRef(null);

    const NextBtn = () => {
        if (slider >= musics.length - 1) {
            return;
        } else {
            setSlider(slider + 1);
            setClick(false);
        }
    }

    const PrevBtn = () => {
        if (slider === 0) {
            return;
        } else {
            setSlider(slider - 1);
            setClick(false);
        }
    }

    useEffect(() => {
        ref.current.style.transition = '0.4s';
        ref.current.style.transform = `translateX(-${slider}00%)`;
    }, [slider]);

    const handleClick = () => {
        setClick(!click);
    }

    return (
        <Container>
            <MusicContainer ref={ref}>
                <MusicSlider>
                    {musics.map((music, index) => {
                        return (
                            <MusicWrap key={index}>
                                <Musics>
                                    <MusicsWrap>
                                        <MusicImg onClick={handleClick}>
                                            <CoverWrap>
                                                <Cover>
                                                    <img src={music.img} />
                                                </Cover>
                                            </CoverWrap>
                                            <CdWrap>
                                                <Cd>
                                                    <span>
                                                <img src={music.cd}  style={{
                                                        animationPlayState: `${click ? 'running' : 'paused'}`
                                                    }}/>
                                                </span>
                                                </Cd>
                                            </CdWrap>               
                                        </MusicImg>
                                    </MusicsWrap>
                                    <Title>
                                        <h1>
                                            {music.name}
                                        </h1>
                                        <h2>
                                            {music.sub}
                                        </h2>
                                    </Title>
                                </Musics>
                            </MusicWrap>
                        )
                    })}
                </MusicSlider>
            </MusicContainer>
            <Border>
                {slider === 0 ? null : (<PrevButton onClick={PrevBtn}>
                    <IoIosArrowBack />
                </PrevButton>)}
            </Border>

            <Border>

            </Border>
            <Border>

            </Border>
            <Border>

            </Border>
            <Border>
                {slider !== musics.length - 1 ? (<NextButton onClick={NextBtn}>
                    <IoIosArrowForward />
                </NextButton>) : (null)}
                <PreviewNext>
                    {musics.map((music, index) => {
                        return (
                            <>
                                {/* {slider == index ? (<img src={music.img}/>) : (null)} */}
                            </>
                        )
                    })}
                </PreviewNext>
                <Subtitle>
                    music
                </Subtitle>
            </Border>
        </Container>
    )
}
export default Music;

const Container = styled.div`
    width:100%;
    height:100%;
    background:#020202;
    position:relative;
    display:flex;
    overflow:hidden;
`

const MusicContainer = styled.div`
    position:absolute;
    z-index:1;
    width:100%;
    height:100%;
    left:0;
`

const MusicSlider = styled.div`
    left:0;
    width:300%;
    height:100%;
    display:flex;
`

const MusicWrap = styled.div`
    width:100%;
    height:100%;
    color:white;
    position:relative;
`

const Musics = styled.div`
    width:60%;
    height:100%;
    margin: 0 auto;
    display:flex;
    flex-direction:column;
`

const MusicsWrap = styled.div`
    display:flex;
    width:100%;
    height:75%;
    align-items: end;
    position:relative;
    justify-content:center;
`

const Title = styled.div`
    width:100%;
    height:25%;
    text-align:center;
    padding:30px;

    & h1{
    background:#6b1319;
    display:inline-block;
    padding:10px 30px;
    text-transform:uppercase;
    font-family: "Poppins", sans-serif;

    @media screen and (max-width: 1366px) {
        font-size:20px;
      }
}

& h2{
    font-size:15px;
    font-weight:200;
    font-family: 'Pretendard';
    padding:20px 0;

    @media screen and (max-width: 1366px) {
        font-size:14px;
      }
}
`

const spin = keyframes`
    from { 
      transform: rotate(0);
    }
    to { 
      transform: rotate(360deg);
`

const MusicImg = styled.div`
    position:relative;
    cursor:pointer;
    height:85%;    
    width:100%;
`

const CoverWrap = styled.div`
    width:66.66%;
    display:flex;
    justify-content:end;
    height:100%;
    position:absolute;
`

const Cover = styled.div`
    max-width:600px;
    max-height:600px;

    & img{
        max-width:100%;
        max-height:100%;
        object-fit:cover;
    }
`

const CdWrap = styled.div`
    width:100%;
    justify-content:end;
    display:flex;
    height:100%;
    box-sizing: border-box;
    position:relative;
    z-index:-1;
`

const Cd = styled.div`
    width:66.66%;
    height:96%;
    text-align: center;

    & span{
        min-width:550px;
        min-height:550px;

        img{
        max-width:100%;
        max-height:100%;
        object-fit:cover;
        animation: ${spin} 2s infinite linear; 
        }
    }
`


const Border = styled.div`
    width:25%;
    height:100%;
    border-right:1px solid  rgba(255,255,255,0.2);
    text-transform:uppercase;
    color:white;
    position:relative;
    z-index:0;

    
    &:nth-child(2){
        z-index:2;
    
    }

    &:nth-child(4){
  }

    &:nth-child(3){
    position:relative;
    z-index:0;
  }

    &:nth-child(5){
    
  }

    &:last-child{
     border-right:none;
     z-index:2;
  }
`

const PrevButton = styled.div`
    position:absolute;
    right:30px;
    top:45%;
    transform:translate(0,-50%);
    font-size:40px;
    cursor:pointer;
`

const NextButton = styled.div`
    position:absolute;
    left:30px;
    top:45%;
    transform:translate(0,-50%);
    font-size:40px;
    cursor:pointer;
`

const PreviewNext = styled.div`
  width:100%;
  height:100%;

  img{
      height:100%;
  }
`

const Subtitle = styled.div`
    bottom:46px;
    right:60px;
    position:absolute;
    font-weight:800;
    font-family: "Poppins", sans-serif;
    font-size:30px;
    z-index:999;
    color:rgba(255,255,255,0.9);
`