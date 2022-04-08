import styled from 'styled-components';

const Supporting = () => {
  return (
    <Container>
      <Wrapper>
        <HeroOption>
       <Img src="https://blog.kakaocdn.net/dn/csfkPq/btryMZGLf3Q/kosbfG4qsEuarW9okptyQK/img.jpg" alt="name" />
       <Img src="https://blog.kakaocdn.net/dn/csfkPq/btryMZGLf3Q/kosbfG4qsEuarW9okptyQK/img.jpg" alt="name" />
       <Img src="https://blog.kakaocdn.net/dn/csfkPq/btryMZGLf3Q/kosbfG4qsEuarW9okptyQK/img.jpg" alt="name" />
       <Img src="https://blog.kakaocdn.net/dn/csfkPq/btryMZGLf3Q/kosbfG4qsEuarW9okptyQK/img.jpg" alt="name" />
       <Img src="https://blog.kakaocdn.net/dn/csfkPq/btryMZGLf3Q/kosbfG4qsEuarW9okptyQK/img.jpg" alt="name" />
       <Img src="https://blog.kakaocdn.net/dn/csfkPq/btryMZGLf3Q/kosbfG4qsEuarW9okptyQK/img.jpg" alt="name" />
       </HeroOption>
      </Wrapper>
    </Container>
  )
}
export default Supporting;

const Container = styled.div`
width:100%;
height:100%;
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
    display:flex;
    color:white;
    background-repeat:no-repeat;
`

const HeroOption = styled.div`
    width:60%;
    display:flex;
    justify-content:center;
    align-items:center;
    border:3px solid red;
`

const Img = styled.img`
  width:60px;
  height:60px;
  object-fit: cover;
`

