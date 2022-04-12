
import './App.css';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  overflow-y: scroll;
  height: 100vh;
`


