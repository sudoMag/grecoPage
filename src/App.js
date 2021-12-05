import { useEffect, useState } from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import { SearchSender } 
  from './components/search engine';
import { ConfigSection } from './configSection';
import { getDictionaryNames } 
  from './components/search engine/service calls';
import {
  getFromLocalStorage,
  setInLocalStorage } from './local storage';

const GeneralStyles = createGlobalStyle`
  ${props => {
    if (props.theme === "light") {
      return `
        html {
          --font-color: #585858;
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
    } else if (props.theme === "dark") {
      return `
        html {
          --font-color: #b3b3b3;
          --font-color-2: #868686;
          --font-color-ngtv: #131313;
          --bg-color-1: #202124;
          --bg-color-2: #3a3d42;
          --bg-color-3: #363a40;
          --bg-color-4: #4d575d;
          --bg-color-5: #3a3d42;
          --bg-color-6: #28292b;
        }
      `;
    }
  }}
`;

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--bg-color-1);

`;

function App() {
  const [theme, setTheme] = useState(
    getFromLocalStorage('colorTheme') ||
    "light"
  );
  const [wordsMarking, setWordsMarking] = useState(
    getFromLocalStorage('wordsMarking') ||
    'true'
  );
  const [ dictionaryNames, setDictionaryNames ]  = useState([]);
  const [ showSettingsMenu, setSettingsMenu ] = useState(false);
  
  const settingsMenu = () => {
    if (showSettingsMenu === true) {
      setSettingsMenu(false);
    } else if (showSettingsMenu === false) {
      setSettingsMenu(true);
    }
  }

  const handleTheme = () => {
    if (theme === "light") {
      setInLocalStorage('colorTheme', 'dark');
      setTheme("dark");
    } else if (theme === "dark") {
      setInLocalStorage('colorTheme', 'light');
      setTheme("light");
    }
  }

  const handleWordsMarkingSetting = () => {
    if (wordsMarking === 'false') {
      setInLocalStorage('wordsMarking', 'true');
      setWordsMarking('true');
    } else if (wordsMarking === 'true') {
      setInLocalStorage('wordsMarking', 'false');
      setWordsMarking('false');
    }
  }

  const updateDictionaryNames = async () => {
      const results = await getDictionaryNames();
      setDictionaryNames(results);
  }

  useEffect(() => {
      if (showSettingsMenu) {
        if (dictionaryNames.length === 0) {
          updateDictionaryNames();
        }
      }
  });


  return (
    <MainContainer id="App">
      <GeneralStyles theme={theme}/>
      <ConfigSection
        settings={settingsMenu}
        theme={theme}
        showMenu={showSettingsMenu}
        changeTheme={handleTheme}
        handleMarked={handleWordsMarkingSetting}
        wordsMarking={wordsMarking}
        dictionaryNames={dictionaryNames}
      />
      <SearchSender
        showSettingsMenu={showSettingsMenu}
        wordsMarking={wordsMarking}
      />
    </MainContainer>
  );
}

export default App;
