import styled from 'styled-components';
import InfoData from './InfoData';



const Info = ({ isOpen, toggle, name, alt }) => {

  return (
    <InfoContainer isOpen={isOpen} onClick={toggle} >
        {name?.name}
        </InfoContainer>
  )
}
export default Info;

 const InfoContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #000000;
    align-items: center;
    top:0;
    right:0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '0' : '100%')};
    width: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    color:white;
`;

const Img = styled.img`

`;