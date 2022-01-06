//import { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import NotFoundErrorPage from "./pages/404";
import Navbar from "./components/Navbar";

const GeneralStyles = createGlobalStyle`
  ${(props) => {
    if (props.theme === "light") {
      return `
        html {
          --font-color: #2e2e2e;
          --font-color-2: gray;
          --font-color-ngtv: #b3b3b3;
          --bg-color-1: white;
          --bg-color-2: #ffffff;
          --bg-color-3: #e0e0e0;
          --bg-color-4: #e2e2e2;
          --bg-color-5: #edeff3;
          --bg-color-6: #d0d0d0;
        }
        `;
    }
  }}

  @media only screen and (max-width: 800px) {
    .mobile-change {
      &.orientation {
        flex-direction: column;
        
        &.reverse {
          flex-direction: column-reverse;
        }
      }

      &.all-screen-width {
        width: 80vw;
        margin: auto;
      }

      &.navbar-space-padding {
        padding-top: 60px;
      }
    }
  }
`;

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--bg-color-1);
`;

const App = () => {
  //const [ theme, setThemeColors ] = useState('light');
  const theme = "light";
  return (
    <MainContainer id="App">
      <GeneralStyles theme={theme} />
      <Navbar />
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/*" element={<NotFoundErrorPage />} />
        </Routes>
      </Router>
    </MainContainer>
  );
};

export default App;
