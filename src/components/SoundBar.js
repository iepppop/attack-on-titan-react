import styled, {keyframes} from 'styled-components';
import music from '../audio/attack.mp3';
import React, { useRef,useState } from 'react';
import { AiOutlineSound } from 'react-icons/ai';

const SoundBar = () => {

    const ref = useRef(null);
    const [ click, setClick ] = useState(false);

    const handleClick = () => {
        setClick(!click);

        if(!click){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    }

    return (
        <Box onClick={()=>handleClick()}>
            <SoundIcon>
        <AiOutlineSound/>
        </SoundIcon>
         <Line click={click} />
         <Line click={click} />
         <Line click={click} />
         <Line click={click} />
         <Line click={click} />
            <audio src={music} ref={ref} loop={true}> </audio>
        </Box>
    )
}
export default SoundBar;

const Box = styled.div`
    cursor:pointer;
    position:fixed;
    top:6.5%;
    right:3%; 
    z-index:997;
    display: flex;

    &>*:nth-child(1){
        animation-delay: 0.2s;
    }
    &>*:nth-child(2){
        animation-delay: 0.3s;
    }
    &>*:nth-child(3){
        animation-delay: 0.4s;
    }
    &>*:nth-child(4){
        animation-delay: 0.5s;
    }
    &>*:nth-child(5){
        animation-delay: 0.8s;
    }
`
const SoundIcon = styled.div`
    color: white;
    font-size:20px;
    margin:0 10px 0 0;
    margin-top:-6px;
`

const play = keyframes`
    0%{
        transform: scaleY(1);
    }
    50%{
        transform:scaleY(2);
    }
    100%{
        transform:scaleY(1);
    }
`

const Line = styled.div`
    border:1px solid #fff;
    animation:${play} 1s ease infinite;
    animation-play-state: ${props => props.click ? "running" : "paused"};
    height: 8px;
    width: 2px;
    margin: 2px 0.1rem;
`