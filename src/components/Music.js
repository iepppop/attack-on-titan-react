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
                                    <MusicImg onClick={handleClick}>
                                        <Cover>
                                            <img src={music.img} />
                                        </Cover>
                                        <span style={{ 
                                            animationPlayState: `${click ? 'running' : 'paused'}` 
                                        }}>
                                            <img src={music.cd} />
                                        </span>
                                    </MusicImg>
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
    height:100vh;
    margin:0 auto;
    text-align:center;
`

const Title = styled.div`
    position:absolute;
    bottom:96px;
    left:50%;
    transform: translate(-50%,0);

    & h1{
    background:#6b1319;
    display:inline-block;
    padding:10px 30px;
    text-transform:uppercase;
    font-family: "Poppins", sans-serif;
}

& h2{
    font-size:15px;
    font-weight:200;
    font-family: 'Pretendard';
    margin:20px 0 0 0;
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
    margin:0 auto;
    padding:130px 0 0 0;
    position:relative;
    cursor:pointer;

    & span{
        position:absolute;
        top:80%;
        left:38%;
        z-index:0;
        transform:translate(-50%,0);
        animation:${spin} 2.0s infinite linear;
        padding:50px;
    }

         img{
            width:550px;
            height:550px;
            object-fit:cover;
        }
    }

`

const Cover = styled.div`
    position:absolute;
    left:40.5%;
    transform:translate(-50%,0);
    z-index:99;

    & img{
        width:600px;
        height:600px;
        object-fit:cover;
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
    top:50%;
    transform:translate(0,-50%);
    font-size:40px;
    cursor:pointer;
`

const NextButton = styled.div`
    position:absolute;
    left:30px;
    top:50%;
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