import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const sliderRef = useRef();
  const [videoImg, setVideoImg] = useState([
    `${videos}`,
    `${videos}`,
    `${videos}`,
  ]);

  useEffect(() => {
    sliderRef.current.scrollLeft = (window.innerWidth*0.75 - (window.innerWidth - window.innerWidth*0.75) / 2);
  }, [])

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
        </Wrapper>
        <InfoWrap isOpen={isOpen}>
          <Info>
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
                width={1500}
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
                <SliderWrapper ref={sliderRef}>
                  {videoImg.map((video, index) => {
                    return <Imgs src={video} index={index} />;
                  })}
                </SliderWrapper>
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
  background: #040404;
  scroll-snap-align: start;
  display: flex;
  width: 20%;
  cursor: pointer;
  border-right: 1px solid #272727;

  &:hover Img {
    filter: grayscale(0%);
    transition: 0.3s ease-in-out;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: #040404;
  scroll-snap-align: start;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Img = styled.img`
  height: 100%;
  position: absolute;
  margin-left: -50px;
  filter: grayscale(100%);
`;

const HeroName = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0px;
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
  height: 65%;
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

const InfoImg = styled.img`
  position: absolute;
  height: auto;
  right: -100px;
  top: -300px;
  width: ${({ isOpen }) => (isOpen ? "0" : "80%")};
  transtion: 0.3s ease-in-out;
  z-index: -1;
`;

const InfoBottom = styled.div`
  height: 35%;
  width: 100%;
  display: flex;
  position: relative;
`;

const InfoMark = styled.div`
  width: 25%;
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
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
`;

const Imgs = styled.img`
  transform: scale(${(props) => (props.index === 1 ? 1.0 : 1.0)});
  opacity: ${(props) => (props.index === 1 ? 1 : 0.4)};
`;

const SliderWrapper = styled.div`
  white-space: nowrap;
  width:100%;
`;
