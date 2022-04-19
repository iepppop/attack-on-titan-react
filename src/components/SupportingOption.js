import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const SupportingOption = ({
  profileImg,
  mainImg,
  name,
  name2,
  korean,
  desc,
  region,
  color,
  heroOption
}) => {
  const [isListHover, setIsListHover] = useState(false);

  return (
    <Container>
      <Info show={isListHover}>
        <Profilewrap >
          <Name>{name}</Name>
          <ImgBorder>
            <MainImg
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
            <span>{desc}</span>
          </Desc>
        </DescName>
      </Info>
      <ImgWrap
        onMouseOver={()=>setIsListHover(true)}
        onMouseOut={()=>setIsListHover(false)}
        >
        <Img
          src={profileImg}
          alt={name}
        />
      </ImgWrap>
    </Container>
  );
};
export default SupportingOption;

const Charater = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  opacity: ${props => props.show ? "0" : "1"};
`;

const Container = styled.div`
`;

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
  padding: 2px 15px;
  font-size: 140px;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  line-height:90%;
  display: flex;
  justify-content: center;
  margin-bottom: -10px;
  opacity: 0.2;
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
  margin: 0 0 70px ;
  position: relative;
  z-index: 99;
  transform: skewX(-8deg) scale(0.9);
  transition: transform 0.1s, background-color 0.6s;
  &:hover {
    transform: skewX(-8deg) scale(1);
    z-index: 10;
  }
  padding:0 2px;
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
