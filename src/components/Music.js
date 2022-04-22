import styled from 'styled-components';

const Music = () => {
    return (

        <Container>
            <MusicWrap>
                <Musics>
                    <MusicImg>
                        <Cover>
                <img src="https://blog.kakaocdn.net/dn/x0t9f/btrAcQCfjUV/0XrzB4fDib549fMIJENDsk/img.jpg" />
                </Cover>
                <span>
                    <img src="https://blog.kakaocdn.net/dn/ccrDjN/btrAcQa8Jsd/l7Iq25qMX0Quo42YvyDSB1/img.png" />
                </span>
                </MusicImg>
                <Title>
                <h1>
                    The Rumbling
                </h1>
                <h2>
                   진격의 거인  시즌 4 파트 2
                </h2>
                </Title>
                </Musics>
            </MusicWrap>
            <Border>

            </Border>

            <Border>

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
export default Music;

const Container = styled.div`
    width:100%;
    height:100%;
    background:#020202;
    display:flex;
    position:relative;
`

const MusicWrap = styled.div`
    position:absolute;
    width:100%;
    color:white;
`

const Musics = styled.div`
    width:60%;
    height:100vh;
    margin:0 auto;
    text-align:center;
`

const Title = styled.div`
    position:absolute;
    bottom:46px;
    left:50%;
    transform: translate(-50%,0);

    & h1{
    background:#6b1319;
    display:inline-block;
    padding:10px 30px;
    margin:50px 0 0 0;
    text-transform:uppercase;
    font-family: "Poppins", sans-serif;
}

& h2{
    font-size:15px;
    font-weight:200;
    font-family: 'Pretendard';
    margin:20px 0 0 0;
}
` 

const MusicImg = styled.div`
    margin:0 auto;
    padding:120px 0 0 0;

    & span{
        position:absolute;
        left:59.5%;
        z-index:0;
        transform:translate(-50%,0);

         img{
            width:90%;
            margin:20px 0 0 0;
        }
    }
`

const Cover = styled.div`
    position:absolute;
    left:44.3%;
    transform:translate(-50%,0);
    z-index:1;
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