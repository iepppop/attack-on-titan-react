import styled from 'styled-components';
import React, {useRef, useEffect } from 'react';
import Eren from '../images/eren2.png'
import ReactFullpage from '@fullpage/react-fullpage';

const Anchor = () => {
    const array = [1];

  return (
    <Container>
        <Slider>
        <BorderLine1 />
            <BorderLine />
            <Img src={Eren} />
        </Slider>
    </Container>
  )
}
export default Anchor;

const Container = styled.div`
    position:relative;
`

const Slider = styled.div`
    position:absolute;
    right: 20px;
    color:#fff;
`

const BorderLine1 = styled.div`
    background:#fff;
    width:1px;
    height:500px;
    right:250px;
    position:absolute;
    opacity:0.5;
`

const BorderLine = styled.div`
    background:#fff;
    width:1px;
    height:500px;
    right:100px;
    position:absolute;
    opacity:0.5;
`

const Img = styled.img`
    position:absolute;
    right:40px;
    top:270px;
`
