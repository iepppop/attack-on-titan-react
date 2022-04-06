import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Slider = (props) => {
    const slides = [1, 2, 3, 4, 5, 6, 7, 8];


    return (
        <>
        <PrevButton onClick={slideLeft}>
        prev
    </PrevButton>
        <ImageWrapper>
            <Wrapper>
                <Wrap>
                {slides.map((slide, index) => {
                    return (
                        <SliderWrap>
                            helloss
                        </SliderWrap>
                    )
                })}
            
         
                </Wrap>
            </Wrapper>
        </ImageWrapper>
           <NextButton>
           next
       </NextButton>
       </>
    )
}


const ImageWrapper = styled.div`
    widtn:100%;
    height:100%;
    background:red;
    white-space:nowrap;
`
const Wrapper = styled.div`

`

const Wrap = styled.div`
position:absolute;
width:300vw;
z-index:0;
left:0;overflow: scroll;
`

const SliderWrap = styled.div`
background:blue;
width:320px;
height:200px;
border-radius:10px;
white-space:nowrap;    float:left;
margin :0 30px;

`
const PrevButton = styled.button`
    position:absolute;
    left:0; 
    z-index:3;
`
const NextButton = styled.button`
position:absolute;
right:0; 
top:0; z-index:3;
`


export default Slider;