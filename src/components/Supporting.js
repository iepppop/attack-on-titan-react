
import styled, { keyframes } from 'styled-components';
import { jean, connie, sasha, hange, historia, zeke, yelena, gabi, falco,  pieck, porco, colt} from './SupportingData';
import SupportingOption from './SupportingOption';

const Supporting = () => {
  return (
    <Container>  
      <Wrapper>
       
        <HeroOption>
          <One>
       <SupportingOption {...jean} />
       <SupportingOption {...connie} />
       <SupportingOption {...hange} />
       <SupportingOption {...historia} />
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

const One = styled.div`
  display:flex;
`

const Container = styled.div`
  width:100%;
  height:100%;
  background-image: url("https://blog.kakaocdn.net/dn/6CR6f/btry7uf9KaR/X9L40hH1JQKRFeb7WdvzK1/img.gif");
  background-size: cover;
  position:relative;
  z-index:1;
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
