import styled from "styled-components";
import { SettingsButton } from "./components/settings button/settings button"
import { SettingsMenu } from './components/settings menu/settings menu';

const Container = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ConfigSection = (props) => {
    return (
        <Container>
            <SettingsMenu
                theme={props.theme}
                wordsMarking={props.wordsMarking}
                showMenu={props.showMenu}
                changeTheme={props.changeTheme}
                handleMarked={props.handleMarked}
                dictionaryNames={props.dictionaryNames}
            />
            <SettingsButton settings={props.settings}/>
        </Container>
    );
} 