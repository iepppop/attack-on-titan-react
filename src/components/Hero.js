import styled, { keyframes } from "styled-components";
import React, { useState, useRef, useEffect } from "react";
import { BsChevronLeft, BsChevronRight, BsX } from "react-icons/bs";

const Hero = ({
    img,
    alt,
    name,
    name2,
    name3,
    korean,
    color,
    japann,
    infoimg,
    content,
    mark,
    videos,
    videos2,
    videos3,
    videos4
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const sliderRef = useRef();
    const videoImg = [`${videos}`, `${videos2}`, `${videos3}`, `${videos4}`]
    const [currentIndex, setCurrentIndex] = useState(0);

    const NextBtn = () => {
        if (currentIndex >= 1) {
            return;
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    const PrevBtn = () => {
        if (currentIndex === 0) {
            return;
        } else {
            setCurrentIndex(currentIndex - 1);
            console.log(currentIndex);
        }
    }

    useEffect(() => {
        sliderRef.current.style.transition = '0.4s';
        sliderRef.current.style.transform = `translateX(-${sliderRef.current.offsetWidth * currentIndex}px)`;
    }, [currentIndex]);

   
    
    return (
        <>
            <Container>
                <Wrapper onClick={toggle}>
                    <Img src={img} alt={alt} />
                    <HeroName>
                        {name}
                        <HeroP>{name2}</HeroP>
                        <Koreaname style={{ background: color }}>{korean}</Koreaname>
                    </HeroName>
                    <Gradient />
                </Wrapper>
                <InfoWrap isOpen={isOpen}>
                    <Info>
                        <XIcon onClick={toggle} isOpen={!isOpen}>
                            <BsX />
                        </XIcon>
                        <InfoBackground>
                            <InfoLine>
                                <span>
                                    <h1>{name} {name2}</h1>
                                    <h2 style={{ background: color }}>{korean}</h2>
                                    <Content>
                                        <span>
                                            {content}
                                        </span>
                                    </Content>
                                </span>
                                <InfoImgLine delay={20}>
                                    <img src={infoimg} />
                                </InfoImgLine>
                            </InfoLine>
                        </InfoBackground>
                        <InfoBottom>
                            <InfoLogo style={{ background: color }}>
                                <img src={mark} />
                            </InfoLogo>
                            <InfoSlider>
                                <InfoSliderWrap ref={sliderRef}>
                                    <Slider>
                                        <Slide>
                                      <img src={videos} />
                                      <img src={videos2} />                          
                                      <img src={videos3} />
                                      </Slide>
                                      <Slide>
                                      <img src={videos} />
                                      <img src={videos2} />                          
                                      <img src={videos3} />
                                      </Slide>
                                    </Slider>
                                </InfoSliderWrap>
                                <PrevButton onClick={PrevBtn}>
                  <BsChevronLeft />
                </PrevButton>
                <NextButton onClick={NextBtn}>
                  <BsChevronRight/>
                </NextButton>
                            </InfoSlider>
                        </InfoBottom>
                    </Info>

                </InfoWrap>

            </Container>
        </>
    );
};
export default Hero;

const Container = styled.div`
  height: 100%;
  background: #020202;
  display: flex;
  width: 20%;
  cursor: pointer;  
  border-right:1px solid  rgba(255,255,255,0.2);

  &:last-child{
    border:none;
}

  &:hover Img {
    filter: grayscale(0%);
    transition: 0.3s ease-in-out;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  position: relative;
  overflow: hidden;
  background: #020202;
`;

const Img = styled.img`
  height: 100%;
  position: absolute;
  filter: grayscale(100%);
  width:auto;
  z-index:0;
  object-fit: cover;
  @media screen and (max-width: 1920px) {
    margin-left:-50px;
  }

  @media screen and (max-width: 1366px) {
    margin-left:0;
  }

  @media screen and (max-width: 1280px) {
    margin-left:-100px;
  }

`;

const HeroName = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 50px;
  left: 38px;
  color: white;
  font-size: 52px;
  opacity: 0;
  font-weight: 800;
  font-family: "Poppins", sans-serif;

  @media screen and (max-width: 2560px) {
    font-size: 74px;
}

  @media screen and (max-width: 1920px) {
    font-size: 52px;
}

  @media screen and (max-width: 1680px) {
    font-size: 45px;
}

  @media screen and (max-width: 1600px) {
    font-size: 43px;
}

  @media screen and (max-width: 1440px) {
    font-size: 37px;
}

  @media screen and (max-width: 1366px) {
    font-size: 34px;
}

  ${Container}:hover & {
    opacity: 1;
    transition: 0.4s ease-in-out;
  }
`;

const Gradient = styled.div`
  width:100%;
  height:100%;
  position:relative;
  z-index:1;
  background: linear-gradient(
    180deg,
    transparent 0%,
    transparent 60%,
    rgba(2,2,2,1.0) 98%
    );
`

const HeroP = styled.div`
  margin-top: -30px;
  @media screen and (max-width: 2560px) {
    margin-top: -50px;
}

  @media screen and (max-width: 1920px) {
    margin-top: -30px;
}

  @media screen and (max-width: 1440px) {
  margin-top: -25px;
}
`;

const Koreaname = styled.div`
  font-size: 25px;
  display: inline-block;
  vertical-align: top;
  padding: 3px 10px 0px 10px;
  font-weight: 600;

  @media screen and (max-width: 1366px) {
    font-size: 20px;
  }
`;


const Border = styled.div`
    width:25%;
    height:100%;
    border-right:1px solid  rgba(255,255,255,0.2);
    text-transform:uppercase;
    color:white;
    position:relative;
    z-index:0;

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
  }
`

const InfoWrap = styled.div`
  width: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  position: fixed;
  z-index: 998;
  background: #000;
  height: 100%;
  color: white;
  cursor: default;
  display: flex;
`;

const XIcon = styled.div`
    position:absolute;
    right:6px;
    top:6px;
    width: ${({ isOpen }) => (isOpen ? "0" : "auto")};
    z-index: -1;
    opacity:${({ isOpen }) => (isOpen ? "0" : "1")};
    font-size:110px;
    z-index:999999;
    cursor:pointer;
`

const Info = styled.div`
  height: 100%;
  width:100%;
  position:absolute;
`;

const InfoBackground = styled.div`
  background-image: url("https://blog.kakaocdn.net/dn/bQ8E5E/btryn9q7n3M/laKIi6BCAT54tLz1wfRq30/img.jpg");
  background-repeat: no-repeat;
  background-position-y: -150px;
  z-index: 1;
  width: 100%;
  height: 64%;
  background-size: cover;
  position: relative;
  overflow: hidden;
`;

const InfoLine = styled.div`
  max-width:80%;
  height:100%;
  display:flex;
  align-items: center;

  & span{
      width:80%;
      height:70%;
      margin: 0 auto;
      display:inline-block;
      position:relative;
      z-index:1;
  }

  h1{
    font-size: 100px;
    font-family: "Poppins", sans-serif;
    font-weight: 800;
    line-height:90%;

    @media screen and (max-width: 1445px) {
        font-size: 80px;
    }
    @media screen and (max-width: 1366px) {
      font-size: 70px;
    }
  }

  h2{
    font-size: 40px;
    display: inline-block;
    padding: 2px 20px;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 700;
    margin:20px 0 0 0;

    @media screen and (max-width: 1445px) {
        font-size: 30px;
    }

    @media screen and (max-width: 1366px) {
      font-size:24px;
      padding: 2px 10px;
  }
}
`

const Content = styled.div`
  margin:50px 0 0 0;
  line-height: 180%;
  font-family: 'Pretendard';
  width:80%;

  @media screen and (max-width: 2560px) {
    font-size:24px;
  }

  @media screen and (max-width: 1980px) {
    font-size:20px;
  }

  @media screen and (max-width: 1680px) {
    font-size:16px;
  }

  @media screen and (max-width: 1440px) {
    margin:20px 0 0 0;
    font-size:15px;
  }

  @media screen and (max-width: 1366px) {
    font-size:14px;
    margin:20px 0 0 0;
  }
`

const InfoImgLine = styled.div`
  position:absolute;
  z-index:0;
  width:80%;
  height:100%;
  right:0;
  top:-300px;
  right:-200px;
  opacity:${({ isOpen }) => (isOpen ? "0" : "1")};
  transtion: 4s ease;

  @media screen and (max-width: 1366px) {
    right:100px;
    top:-150px;
  }

  @media screen and (max-width: 1600px) {
    right:-100px;
    top:-300px;
  }

  @media screen and (max-width: 1366px) {
    right:-200px;
  }

  @media screen and (max-width: 1280px) {
    right:-100px;
    top:-250px;
  }


 & img {
  @media screen and (max-width: 1440px) {
    width:98%;
    margin-top:50px;
  }

  @media screen and (max-width: 1366px) {
    width:90%;
    margin-top:80px;
  }
 }

`

const InfoBottom = styled.div`
  height: 36%;
  width: 100%;
  display: flex;
  position: relative;
  box-sizing: border-box;
`;

const InfoLogo = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width: 20%;

  @media screen and (max-width: 1530px) {
    width:25%;
  }

  img{
    max-width: ${({ isOpen }) => (isOpen ? "0%" : "100%")};
    padding:20px;

  @media screen and (max-width: 1440px) {
    padding:80px;
  }
  @media screen and (max-width: 1366px) {
    padding:90px;
  }
  @media screen and (max-width: 1280px) {
    padding:70px;
  }
  }
`;

const InfoSlider = styled.div`
  width:80%;
  position:relative;
  display:flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media screen and (max-width: 1530px) {
    width:75%;
}

    @media screen and (max-width: 1245px) {
    width:70%;
}

`

const InfoSliderWrap = styled.div`
    position:absolute;
    width:100%;
    height:70%;
`


const Slider = styled.div`
    height:100%;
    min-width:200%;
    display:flex;
`

const Slide = styled.div`
     display:flex;
     width:100%;
     justify-content: center;
     box-sizing: border-box;
     padding:0 50px;
     
    img{
      max-width: 100%;
      margin:0 5px;
      object-fit:cover;
   }
`

const PrevButton = styled.div`
    position:absolute;
    top:53%;
    transform: translate(0,-50%);
    left:20px;  
    background:none;
    font-size:50px;
    border:none;
    color:white;
    z-index:100;
    cursor:pointer;

    @media screen and (max-width: 1280px) {
      font-size:40px;
    }
`

const NextButton = styled.div`
    position:absolute;
    top:53%;
    transform: translate(0,-50%);
    right:20px;  
    background:none;
    font-size:50px;
    border:none;
    color:white;
    z-index:100;
    cursor:pointer;   
     max-width: ${({ isOpen }) => (isOpen ? "0%" : "100%")};

     @media screen and (max-width: 1280px) {
      font-size:40px;
    }
`