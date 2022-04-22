
import styled from 'styled-components';
import { VscArrowLeft, VscArrowRight } from 'react-icons/vsc';
import React, { useState, useEffect, useRef } from 'react';

const Keyword = () => {

  const [slideIndex, setSlideIndex] = useState(0);
  const ref = useRef(null);
  const total_slide = 2;

  const NextSlide = () => {
    if (slideIndex >= total_slide) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  }

  const PrevSlide = () => {
    if (slideIndex >= total_slide) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  }

  useEffect(() => {
    ref.current.style.transform = `translateX(-${slideIndex}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [slideIndex]);


  return (
    <Container>
      <AllWrap ref={ref}>
        <SemiWrap>
          <Wrap>
            <ImgWrap>
              <img src="https://blog.kakaocdn.net/dn/cgv5V2/btrz48caKej/bas9vJBvF5BcWShaYbDbG1/img.jpg" />
            </ImgWrap>
            <Sub>
              <h1>에르디아 제국</h1>
              <span>2천년 전, 지금의 에르디아가 되는 고대 부족의  프리츠라는 족장은 우연히 자신의 노예 유미르가
                힘을 손에 넣은 것을 보고 야심을 드러냈다. 그 야심으로 인해 프리츠는 유미르를 이용해 마레에게
                반역하고 제국을 세운다. 그리고 그녀와의 사이에서 딸들을 낳게 된다. 이 유미르라는 여자는
                대지의 악마와 계약하여 최초로 거인이 된 인간이다.</span>
            </Sub>
          </Wrap>
          <Wrap>
            <ImgWrap2>
              <span>
                <img src="https://blog.kakaocdn.net/dn/cdPmXs/btrz9hf3upu/koNKJ8187xPavTQKolYYhk/img.png" />
              </span>
              <span>
                <img src="https://blog.kakaocdn.net/dn/cRag48/btrz9gVMNtw/mMQFUookOQj2vO2R9OXylk/img.png" />
              </span>
              <span>
                <img src="https://blog.kakaocdn.net/dn/biNRzL/btrAboLNiJZ/CPhLz1Rd5ERFBM5fynMRb0/img.png" />
              </span>
            </ImgWrap2>
            <Sub2>
              <h1>병단</h1>
              <span>
                각 병단은 실질적으로 단장이 이끌고 있으며, 그 위에는 3개 병단을 통솔하는 총통인 다리스 작클레가 있다. 헌병단의 경우 월-시나 안에서 총통 등 유력자들과 밀접한 관계를 맺고 있지만, 월-시나 바깥의 주둔 병단은 주둔지를 동서남북 4구획으로 나누어, 각 구획의 사령관이 통솔하는 것으로 보인다.
                <p>
                  그리고, 왕정의 최측근 4인방에 속하는 왕정 군지휘관 제랄드가 총통인 다리스 작클레의 병단의 통솔력에 관해서는 우위에 있었던 것으로 보인다. 그러나, 조사병단의 쿠데타 이후 다리스가 병단의 실권을 손에 쥐었다.
                </p>
                <p>
                  병단마다 규모가 크게 달라 헌병단 2000명, 조사병단 300명, 주둔병단 30000명으로 이루어져 있으며, 헌병단은 직속 주둔병단을 합해 실질 5000명 정도를 동원할 수 있다. 병단장들은 브로치 형태의 목걸이를 하고 있다.
                </p>
              </span>
            </Sub2>
          </Wrap>
          <Wrap>
            <ImgWrap3>
              <img src="https://blog.kakaocdn.net/dn/bsoDUx/btrAca7MEOs/sV9MjuK73ttKC7I56SkWc1/img.png" />
            </ImgWrap3>
            <Sub3>
              <h1>땅 울림</h1>
              <span>
              칼 프리츠가 시조의 거인의 힘으로 파라디 섬에서 방벽을 만들 때 타국의 침공을 막기 위해 수천만의 방벽 내부의 
거인들을 일종의 상호확증파괴의 개념으로 방벽에 집어넣었는데, 고열의 증기를 내뿜는 이 거인들을 
진격시켜서 전 세계의 모든 문명과 대륙을 짓밟아 파괴하여 평평한 토지로 만듦으로써 방벽 밖 모든 국가와 생물을 절멸시키는 행위이다.
              </span>
            </Sub3>
          </Wrap>
        </SemiWrap>
      </AllWrap>
      <Border style={{ borderRight: `${slideIndex === 2 ? "none" : "1px solid rgba(255,255,255,0.3)"}` }}>
      </Border>
      <Border style={{ borderRight: `${slideIndex < 3 ? "none" : "1px solid rgba(255,255,255,0.3)"}` }}>
      </Border>
      <Border style={{ borderRight: `${slideIndex === 1 ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(255,255,255,0.3)"}` }}>
      </Border>
      <Border>
        <KButton>
          <KButtonPrev onClick={PrevSlide}>
            <VscArrowLeft />
          </KButtonPrev>
          <KButtonNext onClick={NextSlide}>
            <VscArrowRight />
          </KButtonNext>
        </KButton>
      </Border>

      <Border>
        <Subtitle>
          keyword
        </Subtitle>

      </Border>
    </Container>
  )
}
export default Keyword;

const Container = styled.div`
  height:100%;
  background:#020202;
  width:100%;
  display: flex;
  position:relative;
  font-family: 'Pretendard';
  overflow:hidden;
`

const Border = styled.div`
    width:25%;
    height:100%;
    border-right:1px solid  rgba(255,255,255,0.2);
    text-transform:uppercase;
    color:white;
    position:relative;

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

const KButton = styled.div`
    position:absolute;
    bottom:0;
    display:flex;
    left:-120px;
`

const KButtonPrev = styled.button`
  height:120px;
  width: 120px;
  background:#6b1319;
  display:flex;
  align-items:center;
  justify-content:center;
  border:none;
  color:white;
  cursor:pointer;
  font-size:20px;
  border-right:1px solid rgba(255,255,255,0.2);
`

const KButtonNext = styled.button`
  height:120px;
  width: 120px;
  display:flex;
  background:#6b1319;
  align-items:center;
  justify-content:center;
  border:none;
  color:white;
  cursor:pointer;
  font-size:20px;
`

const AllWrap = styled.div`
    position:absolute;
    width:100%;
    height:100%;
`

const SemiWrap = styled.div`
    width:300%;
    display:flex;
`

const Wrap = styled.div`
  width:100%;
  position:relative;
  z-index:1;
`

const ImgWrap = styled.div`
    width:60%;
    overflow: hidden;

    & img{
     object-fit: cover;
     position:relative;
     z-index:2;
    }
`

const Sub = styled.div`
    position:absolute;
    bottom:220px;
    left:770px;
    color:white;
    width:1000px;
    display:flex;
    z-index:2;
    & h1{
      width:600px;
      font-weight:100;
    }

    & span{
      line-height:180%;
    }
`

const ImgWrap2 = styled.div`
    width:60%;
    overflow: hidden;
    margin: 0 auto;
    box-sizing: border-box;
    display:flex;
    background:#020202;
    height:100%;

    & span{
      width:33.33%;
      margin:0 30px;
    }

    & img{
      width:100%;
      padding:20px;
      margin:120px 0 0 0;
    }
`

const Sub2 = styled.div`
  position:absolute;
  bottom:210px;
  left:480px;
  color:white;
  width:940px;
  display:flex;
  z-index:2;
  flex-direction: column;

  & h1{
    margin:0 0 30px 0;
    font-weight:100;
  }

  & span{
    line-height:180%;
  }

  & p{
    margin:15px 0 0 0;
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

const ImgWrap3 = styled.div`
    width:60%;
    overflow: hidden; 
    position:absolute;
    right:0;
    box-sizing: border-box;
    display:flex;

    & img{
      width:100%;
      margin:90px 0 0 0;
    }
`


const Sub3 = styled.div`
  position:absolute;
  bottom:250px;
  left:180px;
  color:white;
  width:900px;
  display:flex;
  z-index:2;
  flex-direction: column;

  & h1{
    margin:0 0 30px 0;
    font-weight:100;
  }

  & span{
    line-height:180%;
  }
`