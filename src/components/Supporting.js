import styled from 'styled-components';

const Supporting = () => {
  return (
    <Container>
<Wrapper>ffsas</Wrapper>
    </Container>
  )
}
export default Supporting;

const Container = styled.div`
    height:100%;
    width:100%;
    scroll-snap-align: start;


    background:url('https://blog.kakaocdn.net/dn/TznwK/btryKQwh70O/tfXHhXVRUaoNSfsVGtbRbk/img.jpg') no-repeat;
    background-size: cover;
    
    background-blend-mode: screen;
`

const Wrapper = styled.div`
position:relative;
z-index:1;
width:100%;
height:100%;
background: linear-gradient(
    360deg,
    rgba(4,4,4,0.2) 0%,
    rgba(4,4,4,0.7) 90%,
    rgba(4,4,4,1.0) 100%
    ), 
    linear-gradient(180deg, rgba(0,0,0,0.9) 0%, transparent 100%);
`

