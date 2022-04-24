import styled, {keyframes} from 'styled-components';
import React, { useRef } from 'react'; 

const Watch = () => {

    let animationDelay = "0s"; // 기본 값은 0초이다.
    let left = "0px"; // 기본 폰트사이즈는 14px로 했다.
    const arr = Array.from("fire fall flake fire fall flake"); // length가 15인 array가 생긴다.

    return (
        <Container>
            <Wrap>
            <img src="https://blog.kakaocdn.net/dn/dyE2Sy/btrAeQb6sdS/gxPoNf1peAh18vhWZIKJ1K/img.png" />
            </Wrap>
            <WBackground>
                <FireWrap>   
                {arr.map((el,i)=>{
                        animationDelay = `${(Math.random() * 100).toFixed(2)}s`;
                        left = `${(Math.random() * window.innerWidth + 'px')}`
                        const style = {
                            animationDelay,
                            left
                          };
                          return(
                              <FireFlake key={i} style={style} />
                          )
                })}
                   
                    <Fire> </Fire>
          
                </FireWrap>
         

            </WBackground>

            <Border>

            </Border>

            <Border>
                <Content>
                    <h1>NOW WATCH</h1>
                    <h2>→</h2>
                </Content>
            </Border>
            <Border>

            </Border>
            <Border>

            </Border>
            <Border>

            </Border>

        </Container>
    )
}
export default Watch;

const Wrap = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    overflow:hidden;
    left:0;
    bottom:0;

    img{
        margin-top:-150px;
        margin-left:-200px;
        position:absolute;
        z-index:0;
    }
`

const Container = styled.div`
    width:100%;
    height:100%;
    background:#020202;
    display:flex;
    position:relative;
`

const FireWrap = styled.div`
   width:100%;
   height:100%;
   z-index:0;
   background-size:cover;
   position:relative;
   padding-top:-100px;
`

const opacity = keyframes`
    0% {
        opacity:0.1;
    }
    50%{
        opacity:0.3;
    }
    100%{
        opacity:0.1; 
    }
    
`

const Fire = styled.div`
    background: linear-gradient(transparent 60%, #ff4200 95%, red 100%);
    width:100%;
    height:100%;
    position:absolute;
    z-index:9999;
    bottom:0;
    left:0;
    animation: ${opacity} 2.3s infinite linear;
`

const fall = keyframes`{
    to {
        transform: translateY(-300px);
    }
}`

const FireFlake = styled.div`
    position:absolute;
    z-index:9999;
    width:5px;
    height:5px;
    bottom:-5px;
    background:#fff;
    border-radius:50%;
    animation: ${fall} 4s infinite linear;
    left:10px;     opacity:0.2; 
}
`

const WBackground = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    bakcground:#fff;
    overflow:hidden;

`

const Border = styled.div`
    width:25%;
    height:100%;
    border-right:1px solid  rgba(255,255,255,0.2);
    text-transform:uppercase;
    color:white;
    position:relative;
    z-index:1;

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

const Content = styled.div`
    position:absolute;
    bottom:60px;
    font-size:20px;
    font-family: "Poppins", sans-serif;
    line-height:170%;
    left:50%;
    transform: translate(-50%,0);

    & h1{
        display:inline-block;
    }

    & h2{
        font-weight:100;
        font-family: 'Pretendard';
    }
`