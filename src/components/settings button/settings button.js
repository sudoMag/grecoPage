import { useState } from "react";
import styled from "styled-components";
import gearIcon from "./settings.svg";

const Button = styled.img`
    height: 35px;
    width: 35px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
    z-index: 4;
    ${({showIcon}) => {
        if (!showIcon) {
            return `transform: translateY(80%);`;
        }
    }}
    transition-duration: 200ms;
`;

export const SettingsButton = (props) => {
    const [showIcon, setShowIcon] = useState(false);

    return (
        <Button 
            src={ gearIcon }
            onClick={ props.settings }
            showIcon={ showIcon }
            onMouseEnter={() => {setShowIcon(true)}}
            onMouseLeave={() => {setShowIcon(false)}}
        />
    );
}