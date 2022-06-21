import styled, { keyframes } from "styled-components";
import {AiOutlineLoading3Quarters} from 'react-icons/ai';

const Loading = () => {
  return (
    <Contain>
        <AiOutlineLoading3Quarters />
        </Contain>
  )
}
export default Loading;

const Contain = styled.div`
    background:black;
    width:100%;
    height:100%;
    color:white;
`