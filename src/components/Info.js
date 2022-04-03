import styled from 'styled-components';

const Info = ({ isOpen, toggle }) => {
  return (
    <InfoContainer isOpen={isOpen} onClick={toggle} >
        Info
        </InfoContainer>
  )
}
export default Info;

 const InfoContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top:0;
    left:0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;