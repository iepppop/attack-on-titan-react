
import './App.css';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainPage from './pages/MainPage';


function App() {
  return (
    <Container>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
    </BrowserRouter>
    </Container>
  
  );
}

export default App;

const Container = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  scroll-behavior: smooth;
`


