import Hero from "../components/Hero";
import Main from "../components/Main";
import styled from 'styled-components';
import { eren, mikasa, levi, armin, reiner } from '../components/HeroData';
import Supporting from "../components/Supporting";
import SupportingPage from "./SupportingPage";


const MainPage = () => {
  return (
      <>
    <Main />
    <HeroWrap>
    <Hero {...levi} />
    <Hero {...armin} />
    <Hero {...eren}/>
    <Hero {...mikasa}/>
    <Hero {...reiner}/>
    </HeroWrap>
    <SupportingWrap >
    <Supporting />
    </SupportingWrap>
    </>
  )
}
export default MainPage;

const HeroWrap = styled.div`
  display:flex;
  width:100%;
  box-sizing: border-box;
  position:relative;
`

const SupportingWrap = styled.div`
  height:100%;
  width:100%;
  scroll-snap-align: start;
  background:url('https://blog.kakaocdn.net/dn/TznwK/btryKQwh70O/tfXHhXVRUaoNSfsVGtbRbk/img.jpg') no-repeat;
  background-size: cover;
  background-blend-mode: screen;
`
