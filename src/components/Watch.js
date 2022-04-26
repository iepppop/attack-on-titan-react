import styled, {keyframes} from 'styled-components';
import React, { useRef } from 'react'; 

const Watch = () => {

    let animationDelay = "0s"; // 기본 값은 0초이다.
    let left = "0px"; // 기본 폰트사이즈는 14px로 했다.
    const arr = Array.from("fire fall flake fire fall flake"); // length가 15인 array가 생긴다.

    return (
        <Container>
          <Grad />
            <Wrap>
            <img src="https://blog.kakaocdn.net/dn/dLluiw/btrAx7jmq1K/Hm1O4H4sHShhmV3dVLsNI1/img.png" />
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
            <Net>
            <img src="https://blog.kakaocdn.net/dn/sb2ms/btrAyM0mBwp/ovxlnDBSohLmoQLsscJK00/img.png" />
                   <img src="https://blog.kakaocdn.net/dn/8ByJw/btrAwDwy75w/h6iZ2a9kZeyI3Upk2cWQKk/img.png" />
                    </Net>
            </Border>
            <Border>

            </Border>
        <Adress>
            copyright © 2022 attack on titan all right reserved.
        </Adress>
        </Container>
    )
}
export default Watch;

const Adress = styled.div`
    position:absolute;
    bottom:62px;
    left:50%;
    transform:translate(-50%,0);
    color:white;
    font-size:10px;
    opacity:0.3;
    letter-spacing: 1px;
`

const Wrap = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    overflow:hidden;
    left:0;
    bottom:0;
    display:flex;
    justify-content:center;
    z-index:0;

    img{
        display:inline-block;
        z-index:0;
    }
`


const Container = styled.div`
    width:100%;
    height:100%;
    background:#020202;
    display:flex;
    position:relative;
    background:url('https://blog.kakaocdn.net/dn/bnU18a/btrAeIYEEmF/BcF5E3GHKhhSu8gAiisie0/img.jpg');
    background-size: cover;
`


const Grad = styled.div`
    width:100%;
    height:100%;
    background: linear-gradient(#020202 0%, rgba(2,2,2,0.4) 70% ,rgba(2,2,2,0.9) 90%);
    position:absolute;
    z-index:0;
    left:0;
    top:0;
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
    top:80px;
    font-size:20px;
    font-family: "Poppins", sans-serif;
    line-height:170%;
    left:50%;
    transform: translate(-50%,0);


    & h1{
        display:inline-block;

        @media screen and (max-width: 1366px) {
            font-size:26px;
            line-height:100%;
          }
    }

    & h2{
        font-weight:100;
        font-family: 'Pretendard';
        margin:20px 0 0 0;
    }
`

const Net = styled.div`
    position:absolute;
    top:80px;
    max-width:100%;
    left:50%;
    transform:translate(-50%,0);
    display:flex;

    img:first-child{
       margin-right:50px;
    }

    img {
        width:90px;
        height:90px;
        border-radius:20px;
        box-shadow: 3px 3px 0 #2d2d2d;

        @media screen and (max-width: 1366px) {
            width:60px;
            height:60px;
          }
    }


`