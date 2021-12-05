import styled from "styled-components";
import { DarkModeSetting } from "./dark mode";
import { ReferenceMarkerSetting } from "./reference marker";
import { DictionariesOrder } from "./dictionaries order";

const Menu = styled.div`
    width: 85vw;
    height: 60vh;
    background-color: var(--bg-color-2);
    position: absolute;
    z-index: 4;
    bottom: 0;
    border-radius: 30px 30px 0 0;
    border: 1px solid var(--bg-color-4);
    transition-duration: 200ms;
    ${props => {
        if (!props.showMenu) {
            return "transform: translateY(100%)";
        } else if (props.showMenu === true) {
            return null;
        }
    }};
`;

const Title = styled.h2`
    text-align: center;
    color: var(--font-color);
`;

const SettingTitle = styled.h3`
    text-align: center;
    color: var(--font-color);
`;

const OptionsContainer = styled.div`
    height: 45vh;
    overflow-y: auto;
    
    &::-webkit-scrollbar {
        -webkit-appearance: none;
    }

    &::-webkit-scrollbar:vertical {
        width:10px;
    }

    &::-webkit-scrollbar-button:increment,.contenedor::-webkit-scrollbar-button {
        
    } 

    &::-webkit-scrollbar:horizontal {
        height: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--font-color-2);
        border-radius: 20px;
        border: 2px solid var(--bg-color-2);
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: var(--font-color-2);
        border: 1px solid var(--bg-color-1);
    }

    &::-webkit-scrollbar-thumb:active {
        background-color: var(--font-color);
        border: 1px solid var(--bg-color-1);
    }
`;

const Credits = styled.div`
    margin: 10px auto;
    width: 100%;
    display: flex;
    justify-content: center;
    line-height: 1;
    color: var(--font-color-2);
    white-space: break-spaces;

    & span {
        font-weight: bold;
    }
`;

export const SettingsMenu = (props) => {
    return (
        <Menu
            showMenu={props.showMenu}
        >
            <Title>
                Settings
            </Title>
            <OptionsContainer>
                <DarkModeSetting
                    theme={props.theme}
                    changeTheme={props.changeTheme}
                />
                <ReferenceMarkerSetting
                    wordsMarking={props.wordsMarking}
                    handleMarked={props.handleMarked}
                />
                <SettingTitle>
                    Orden de prioridades
                </SettingTitle>
                <DictionariesOrder
                    dictionaryNames={props.dictionaryNames}
                    visible={props.showMenu}
                />
                <Credits>
                    By
                    <span> MANUEL CASANOVA</span>
                </Credits>
            </OptionsContainer>
        </Menu>
    );
}