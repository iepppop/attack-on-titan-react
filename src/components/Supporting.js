
import styled, { keyframes } from 'styled-components';
import { jean, connie, sasha, hange, historia, zeke, yelena, gabi, falco,  pieck, porco, colt} from './SupportingData';
import SupportingOption from './SupportingOption';
import React, { useState,useEffect } from 'react';
import eren from '../images/who.png'

const Supporting = () => {
  const [heroOption, setHeroOption] = useState(false);

  useEffect(() =>{
    window.addEventListener('mouseover',()=>{

    })
  },[])

  return (
    <Container>  
      <Wrapper>
      <Charater show={heroOption}>      
        <Profilewrap >
          <Name>jean kirstein</Name>
          <ImgBorder>
            <MainImg
              src="https://shingeki.tv/final/character/img/jean_thumb.png"
              alt=""
            />
          </ImgBorder>
        </Profilewrap>
        <DescName>
          <KoreanName>
            <h2>장 키르슈타인</h2>
          </KoreanName>
          <Desc>
            <h1>월 로제 트로스트 구 출신.</h1>
            <span>훈련병단 졸업 석차는 6위, 조사병단 특별작전반의 지휘관이다.</span>
          </Desc>
        </DescName>

      </Charater>
        <HeroOption>
          <One
           onMouseOver={()=>setHeroOption(true)}
           onMouseOut={()=>setHeroOption(false)}
          >
       <SupportingOption {...jean}/>
       <SupportingOption {...connie}/>
       <SupportingOption {...hange}/>
       <SupportingOption {...historia}/>
       <SupportingOption {...zeke} />
       <SupportingOption {...gabi} />
       <SupportingOption {...falco} />
       <SupportingOption {... pieck} />
       <SupportingOption {... porco} />
       <SupportingOption {... colt} />
       </One>
       </HeroOption>
       <FireWrapper />
      </Wrapper>
 

    </Container>
  )
}
export default Supporting;

const Charater = styled.div`
color: #fff;
position: absolute;
top: 0;
left: 50%;
transform: translate(-50%, 0);
z-index: 99;
opacity: ${props => props.show ? "0" : "1"};
`;

const One = styled.div`
  display:flex;
`

const Container = styled.div`
  width:100%;
  height:100%;
  background-image: url("https://blog.kakaocdn.net/dn/6CR6f/btry7uf9KaR/X9L40hH1JQKRFeb7WdvzK1/img.gif");
  background-size: cover;
  z-index:1;
  position:relative;
  ` 

const Wrapper = styled.div`
  position:relative;
  z-index:1;
  width:100%;
  height:100%;
  background: linear-gradient(
    360deg,
    rgba(4,4,4,0.9) 10%,
    transparent 50%,
    rgba(4,4,4,0.2) 90%,
    rgba(4,4,4,1.0) 100%
    ), 
    linear-gradient(180deg, rgba(0,0,0,0.9) 0%, transparent 100%);
    display:flex;
    color:white;
    background-repeat:no-repeat;
`

const boxFade = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const FireWrapper = styled.div`
  position:absolute;
  z-index:2;
  width:100%;
  height:100%;
  left:0;
  background: linear-gradient(
    360deg,

    rgba(255,142,44,0.2) 5%,
    rgba(4,4,4,0) 25%
    ), 
    linear-gradient(180deg, rgba(0,0,0,0.9) 0%, transparent 100%);
    display:flex;
    color:white;
    background-repeat:no-repeat;
    animation: ${boxFade} 2s linear infinite
`

const HeroOption = styled.div`
    width:100%;
    display:flex;
    align-items:end;
    justify-content:center;
`
const Info = styled.div`
  color: #fff;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 99;
  opacity: ${props => props.show ? "1" : "0"};
`;

const Name = styled.div`
  font-size: 140px;
  padding: 2px 15px;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  margin-bottom: -10px;
  opacity: 0.2;
  line-height:90%;
  width:400px;
  margin:0 auto;
`;

const Profilewrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height:100%;
  margin: 90px 0 0 0;
  text-align: center;
`;

const ImgWrap = styled.div`
  margin: 0 2px 70px ;
  position: relative;
  z-index: 99;
  transform: skewX(-8deg) scale(0.9);
  transition: transform 0.1s, background-color 0.6s;
  &:hover {
    transform: skewX(-8deg) scale(1);
    z-index: 10;
  }
`;

const Img = styled.img`
  width: 60px;
  height: 70px;
  object-fit: cover;
  cursor: pointer;
  border: 3px solid #f2f2f2;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #555;
  overflow: hidden;
`;

const MainImg = styled.img`
  cursor: pointer;
  z-index: 0;
  border-radius: 30px;
  object-fit:cover;
`;

const ImgBorder = styled.div`
  // border-radius: 30px;
  // width: 700px;
  // height:400px;
  // overflow: hidden;
  // display: flex;
  // justify-content: center;
  // margin: 0 auto;
  position:absolute;
  top:100px;
  left:50%;
  transform: translate(-50%,0);
  z-index:0;
`;

const DescName = styled.div`
  width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height:420px;
  margin-top:auto;
  
`;

const Desc = styled.div`
  width: 100%;
  display: flex;
  flex-direction:column;
  z-index:1;

  h1 {
    font-weight: 500;
    font-size: 16px;
    margin: 10px 0 5px 0;
  }
  & span{
      display:block;
      width:100%;
  }
`;

const KoreanName = styled.div`
  margin-top:auto;
  & h2 {
    font-size: 25px;
    padding: 5px 0;
    display:inline-block;
  }
`;
