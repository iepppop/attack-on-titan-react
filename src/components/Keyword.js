import styled from 'styled-components';
import Anchor from './Anchor';
import React, { useState, useEffect, useRef } from 'react';
import { BsChevronLeft, BsChevronRight, BsX } from "react-icons/bs";

const Keyword = ({ scrollNav }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(0);
  const TOTAL_SLIDES = 1;

  const moveRight = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const moveLeft = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.3s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);


  return (
    <Container>
      <Animation scrollNav={scrollNav}>
        <Anchor />
      </Animation >
      <KeywordBtnLeft onClick={moveLeft}><BsChevronLeft /></KeywordBtnLeft>
      <KeywordBtnRight onClick={moveRight}><BsChevronRight /></KeywordBtnRight>
      <h1>KEYWORD</h1>
      <KeywordWrap>
        <KeywordWrapperContain ref={slideRef}>
          <KeywordContain>
            <KeywordWrapper >
              <h2>
                에르디아 제국
              </h2>
              <span>
                2천년 전, 지금의 에르디아가 되는 고대 부족의 프리츠라는 족장은 우연히 자신의 노예 유미르가 힘을 손에 넣은 것을 보고 야심을 드러냈다. 그 야심으로 인해 프리츠는 유미르를 이용해 마레에게 반역하고 제국을 세운다. 그리고 그녀와의 사이에서 딸들을 낳게 된다. 이 유미르라는 여자는 대지의 악마와 계약하여 최초로 거인이 된 인간이다.
              </span>
              <h2>
                파라디 섬
              </h2>
              <span>
                약 100 년 전. 엘디아 제국은 아홉 명의 거인 중 일곱 명을 잃고 잃어버렸고, 마레는 위대한 세력이었다. 엘디아의 프리츠 왕은 파라디스 섬의 남은 땅에 삼중 벽을 쌓고 사람들과 함께 도망쳤다. 사람들은 엘렌과 다른 사람들의 조상이었고, 프리츠 왕의 '설립자의 거인'의 힘은 우리가 벽 밖의 인류가 파괴되었다고 믿게했다.
              </span>
              <h2>
                아홉 거인
              </h2>
              <span>
                아홉 명의 거인 중 시즌 3은 설립자의 거인 여섯 명, 타이탄에 대한 공격, 슈퍼 대형 거인, 갑옷의 거인, 여성의 거인, 짐승의 거인으로 확인되었습니다. 현재로서는 유밀이 아홉 명의 거인들의 능력을 소유했는지는 알려져 있지 않다. 아홉 자이언츠의 후계자는 권력 승계 후 13년 만에 사망한다.
              </span>
            </KeywordWrapper>
            <KeywordWrapper>
              <h2>
                전사
              </h2>
              <span>
                마레 정부는 수용소의 에르디아인으로부터 전사를 모집하고 일곱 거인을 물려받음으로써 마레의 군대를 만들었다. 전사가 된 사람들의 가족은 "명예 에르디아인"이라는 칭호를 받았으며 그 나라에서 자유를 보장받았다.
              </span>
              <h2>
                파라다이스 보내기
              </h2>
              <span>
                마레 정부는 에르디아 반군을 세상에 보내어 파라디스 섬에 있는 엘렌과 다른 사람들을 "파라다이스 보냄"이라고 불렀고, 그들을 지적인 "무고한 거인"으로 풀어 놓았다. 벽에서 인류를 공격하고 먹은 거인들은이 에르디아 반역자의 끝이다.
              </span>
              <h2>
                마레 제국
              </h2>
              <span>
                칼 프리츠는 시조의 거인과 일부 백성들과 다이나 프리츠의 조상들인 방계 왕가를 제외한 직계 왕가를 데리고 최후의 영토인 변방 파라디 섬으로 도주해 버렸고, 그 전에 미리 세워둔 세 개의 방벽 월 마리아, 월 시나, 월 로제 안에 가둔 초대형 거인들을 내세워 만일 우리의 평화를 방해하겠다면 수천만 마리의 거인들을 풀어놓아 세계를 고르게 만들어 버리겠노라고 협박을 남긴 뒤 은둔에 들어간다. 마레는 일곱 거인들을 재기의 원동력으로 삼아 1,820년 멸망당한 마레 제국을 부활시킨다.
              </span>
            </KeywordWrapper>
          </KeywordContain>
        </KeywordWrapperContain>

      </KeywordWrap>
    </Container>
  )
}
export default Keyword;
const KeywordBtnRight = styled.button`
cursor: pointer;
position:absolute;
z-index:9999;
padding:20px;
right:20%;
top:50%;
background:none;
color:#fff;
border:none;
font-size:50px;
`

const KeywordBtnLeft = styled.button`
cursor: pointer;
position:absolute;
z-index:9999;
padding:20px;
left:20%;
top:50%;
background:none;
color:#fff;
border:none;
font-size:50px;
`

const Container = styled.div`
    width:100%;
    height:100%;
    background-image:url('https://blog.kakaocdn.net/dn/crrvsO/btrzn8xGCsS/krvF6YnKkHkZPDaL2jTGG0/img.gif');
    color:#fff;
    position:relative;
    z-index:-9999px;
    text-align:center;


    & h1{
      font-family: "Poppins", sans-serif;
      padding:94px 0 40px 0;
      font-size: 120px;
      opacity:0.2;
      font-weight: 800;
      text-transform: uppercase;
      line-height:90%;
      position:relative;
      z-index:1;
      letter-spacing:10;
  } 
`

const Animation = styled.div`
  transition: 4s ease;
  transform: ${({ scrollNav }) => (scrollNav ? 'translateY(-200px)' : 'translateY(-1000px)')}
`

const KeywordWrap = styled.div`
  max-width:900px;
  height:660px;
  background:rgba(0,0,0,0.9);
  margin:0 auto;
  margin-top:-10px;
  position:relative;
  box-sizing: border-box;
  overflow-x:scroll;

  
  & h2:first-child{
    margin:0 0 0 0;
  }

  & h2{
    text-align:left;
    margin:40px 0 0 0;
    font-size:30px; color:red; 
  }

  & span{
    text-align:left;
    display:block;
    margin:22px 0 -10px 0;
    line-height:180%;
  }
`

const KeywordWrapperContain = styled.div`
  left:0;
  top:0;  
  position:absolute;
  width:100%;
`

const KeywordContain = styled.div`
  width:200%;
  position:absolute;
  display:flex;
`


const KeywordWrapper = styled.div`
  width:100%;
  padding:60px;
`
