import styled from 'styled-components';
import React, { useState } from 'react';
import { BsChevronLeft,BsChevronRight } from "react-icons/bs";

const SupportingOption = ({ profileImg, mainImg, name, name2, korean, desc, region }) => {
    const [isListHover, setIsListHover] = useState(false);

    return (
        <Container>  
                <LeftButton>
            <BsChevronLeft />
            </LeftButton>
            <RightButton>
            <BsChevronRight />
            </RightButton>
            <Info style={{ opacity: `${ isListHover ? '1' : '0'}`}}>
           
                <Profilewrap>
             <Name>
                {name}
            </Name>  
            <ImgBorder>
            <MainImg 
            //src={isListHover ? `${mainImg}` : null } 
            src={mainImg}
            alt="" 
            />
            </ImgBorder> 
            
            </Profilewrap>
            <DescName>
            <KoreanName>
            <h2>{korean}</h2>
            </KoreanName>
            <Desc>
                <h1>{region}</h1>
                {desc}
            </Desc>

            </DescName>
       
            </Info>
            <ImgWrap>
            <Img src={profileImg} alt={korean}  
            onMouseOver={() => setIsListHover(true)}
            onMouseOut={() => setIsListHover(false)} 
            />
            </ImgWrap>
        </Container>
    )
}
export default SupportingOption;

const LeftButton = styled.button`
position:absolute;
top:45%;
border:none;
background:none;
font-size:60px;
color:white;
left:20%;
`

const RightButton = styled.button`
position:absolute;
top:45%;
border:none;
background:none;
font-size:60px;
color:white;
right:20%;
`

const Container = styled.div`
`

const Info = styled.div`
    color:#fff;
    position:absolute;
    top:0;
    left:50%;
    transform:translate(-50%,0);
    z-index:99;
`

const Name = styled.div`
    font-size: 100px;
    padding: 2px 15px;
    font-family: "Poppins", sans-serif;
    font-weight: 800;
    text-transform:uppercase;
    display:flex;
    justify-content: center;
    margin-bottom:-10px;
    opacity:0.2;
`

const Profilewrap = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    width:100%;
    margin:90px 0 0 0;
    text-align:center;
`

const ImgWrap = styled.div`
    margin:0 0 70px 0;
    position:relative;
    z-index:99;
`

const Img = styled.img`
    width:60px;
    height:70px;
    object-fit: cover;
    cursor:pointer; 
    border: 3px solid #f2f2f2;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #555;
    overflow: hidden;
    transform: skewX(-8deg) scale(0.9);
    transition: 
    transform .1s,
    background-color .6s;
    margin:0 2px;
    &:hover{
        transform: skewX(-8deg) scale(1.0);
        z-index:10;
    }
`

const MainImg = styled.img`
    cursor:pointer;
    z-index:0;
    width:100%;
    border-radius:30px;
`

const ImgBorder = styled.div`
    border-radius:30px;
    max-width:740px; 
    overflow:hidden;
    object-fit:cover;
    display:flex;
    justify-content: center;
    margin:0 auto;
`


const DescName = styled.div`
    max-width: 740px;
    margin:0 auto;
    display:flex;
`

const Desc = styled.div`
    width:66%; 
    margin:40px 0 0 20px;

    h1{
        font-weight:500;
        font-size:16px;
        margin: 0 0 5px 0;
    }
`

const KoreanName = styled.div`
    display:inline-block;
    width:34%;
    display:flex;
    align-items:center;
    margin:40px 0 0 0;


    & h2{
        background:#4d3838;
        font-size:30px;
        padding:5px 10px;
    }
`













