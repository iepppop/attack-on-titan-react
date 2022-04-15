import styled, { keyframes } from "styled-components";
import React, { useState, useRef } from "react";
import { BsChevronLeft,BsChevronRight, BsX } from "react-icons/bs";

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
  const [isSwiping, setIsSwiping] = useState(false);
  const transitionTime = 500;
  const transitionStyle = `transform ${transitionTime}ms ease 0s`;
  const [slideTransition, setTransition] = useState(transitionStyle);

  function setSlides() {
    let addedFront = [];
    let addedLast = [];
    var index = 0;
    while (index < 3) {
      addedLast.push(videoImg[index % videoImg.length])
      addedFront.unshift(videoImg[videoImg.length - 1 - index % videoImg.length])
      index++;
    }
    return [...addedFront, ...videoImg, ...addedLast];
  }

  let slides = setSlides();

  function handleSlide(index) {
    if (index < 0) {
      index = videoImg.length - 1;
    }
    else if (index > videoImg.length - 1) {
      index = 0;
    }
    setCurrentIndex(index);
  }

  function getItemIndex(index) {
    index -= 2;
    if (index < 0) {
      index += videoImg.length;
    }
    else if (index >= videoImg.length + 1) {
      index -= videoImg.length;
    }
    return index;
  }

  function replaceSlide(index) {
    setTimeout(() => {
      setTransition('');
      setCurrentIndex(index);
  }, transitionTime)
  }

  function handleSwipe(direction) {
    setIsSwiping(true);
    handleSlide(currentIndex + direction)
}

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
          <Gradient/>
        </Wrapper>
        <InfoWrap isOpen={isOpen}>
          <Info>
            <XIcon onClick={toggle} isOpen={!isOpen}>
            <BsX/>
            </XIcon>
            <InfoBackground>
              <Name>
                <Nameh1>
                  {name} {name2}
                </Nameh1>
                <Nameh2 style={{ background: color }}>{korean}</Nameh2>
                <Content>{content}</Content>
              </Name>
              <InfoImg
                src={infoimg}
                width={1400}
                onClick={toggle}
                isOpen={!isOpen}
              />
            </InfoBackground>
            <InfoBottom>
              <InfoMark style={{ background: color }}>
                <MarkWrap>
                  <InfoImgMark src={mark} width={250} />
                </MarkWrap>
              </InfoMark>
              <SliderWrap>
                <SliderWrapper
                  ref={sliderRef} style={{
                    
                    transform: `translateX(${-550 * currentIndex + 250}px)`,
                    transition: slideTransition
                  }}>
                  {slides.map((video, index) => {
                    const itemIndex = getItemIndex(index);
                    return (
                      <a>
                      <Imgs src={slides[itemIndex]} alt={`banner${itemIndex}`} 
                      style={{ 
                        opacity: `${currentIndex + 3 === index || currentIndex + 4 === index
                          ? '1'
                          : '0.5'}`, 
                        }} />
                      </a>
                    );
                  })}

                </SliderWrapper>
                <PrevButton direction="prev"  onClick={() => handleSwipe(-1)}>
                  <BsChevronLeft />
                </PrevButton>
                <NextButton direction="next" onClick={() => handleSwipe(1)}>
                  <BsChevronRight/>
                </NextButton>
              </SliderWrap>
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
  border-right: 1px solid #272727;

  &>*:nth-child(4){
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
  margin-left: -70px;
  filter: grayscale(100%);
  width:auto;
  z-index:0;
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
`;

const Koreaname = styled.div`
  font-size: 25px;
  display: inline-block;
  vertical-align: top;
  padding: 3px 10px 0px 10px;
  font-weight: 600;
`;

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
  flex-direction: column;
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
  // position: fixed;
  // z-index: 998;
  //width: 100%;
  height: 100%;
  // background-image: url(./../images/bg.jpg);
  // align-items: center;
  // top:0;
  // right:0;
  // transition: 0.3s ease-in-out;
  // color:white;
`;

const InfoBackground = styled.div`
  background-image: url("https://blog.kakaocdn.net/dn/bQ8E5E/btryn9q7n3M/laKIi6BCAT54tLz1wfRq30/img.jpg");
  background-repeat: no-repeat;
  background-position-y: -150px;
  z-index: 999;
  width: 100%;
  height: 64%;
  background-size: cover;
  padding: 100px;
  position: relative;
  overflow: hidden;
`;

const Name = styled.div`
  flex-direction: column;
`;

const Nameh1 = styled.h1`
  font-size: 100px;
  padding: 2px 15px;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
`;

const Nameh2 = styled.div`
  font-size: 40px;
  display: inline-block;
  padding: 2px 15px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
  margin: 0 0 0 20px;
  margin-top: -20px;
`;

const Content = styled.div`
  margin: 50px 0 0 20px;
  width: 600px;
  line-height: 180%;
`;

const fadein = keyframes`
    0%{
      opacity:0;
    }
    100%{
      opacity:1;
    }
`

const InfoImg = styled.img`
  position: absolute;
  height: auto;
  right: -100px;
  top: -300px;
  width: ${({ isOpen }) => (isOpen ? "0" : "auto")};
  transition: all 2s;
  z-index: -1;
  opacity:${({ isOpen }) => (isOpen ? "0" : "1")};
  transtion: 4s ease;
`;

const InfoBottom = styled.div`
  height: 36%;
  width: 100%;
  display: flex;
  position: relative;
  box-sizing: border-box;
`;

const InfoMark = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MarkWrap = styled.div`
  width: 250px;
`;

const InfoImgMark = styled.img`
  width: ${({ isOpen }) => (isOpen ? "0%" : "100%")};
`;

const SliderWrap = styled.div`
  width: 80%;
  position: relative;
  overflow:hidden;
  margin:20px 0 20px 0;

`;

const Imgs = styled.img`
  width:550px;
  padding: 10px 16px;
`;

const SliderWrapper = styled.div`
position:relative;
width: auto;
white-space: nowrap;
transition:0.3s;
position: relative;
top: 0;
display: flex;
flex-direction: row;
text-align: left;
left:-109.5%;
`;

const PrevButton = styled.button`
  position:absolute;
  top:53%;
  transform: translate(0,-50%);
  left:10px;  
  background:none;
  font-size:80px;
  border:none;
  color:white;
  cursor:pointer;
`

const NextButton = styled.button`
  position:absolute;
  right:10px; 
  top:53%;
  transform: translate(0,-50%);
  background:none;
  font-size:80px;
  border:none;
  color:white;
  cursor:pointer;
`
