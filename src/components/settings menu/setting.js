import styled from "styled-components";

const Card = styled.div`
    padding: 10px 20%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

const TitleSetting = styled.h4`
    margin: 0;
    ${props => {
            if (props.enabled === true) {
                return "color: var(--font-color)";
            } else if (props.enabled === false) {
                return "color: var(--font-color-2)";
            }
        }};
`;

const SettingSwitch = styled.div`
    width: 40px;
    ${props => {
            if (props.switchState === true || 
            props.switchState === 'true') {
                return "background-color: #3f9e3f";
            } else if (!props.switchState ||
                props.switchState === 'false') {
                return "background-color: #b3b3b3";
            }
        }};
    border-radius: 30px;
    display: flex;
    align-items: center;
    ${props => {
        if (props.enabled === true) {
            return "cursor: pointer"
        }
    }};
    transition-duration: 200ms;

    &::after {
        background-color: #f7f7f7;
        width: 17px;
        height: 17px;
        border-radius: 50%;
        margin: auto 3px;
        content: "";
        transition-duration: 200ms;
        ${props => {
            if (props.switchState === true || 
            props.switchState === 'true') {
                return "transform: translateX(100%)";
            }
        }};
    }
`;

export const Setting = (props) => {

    return (
        <Card 
            onClick={props.handleSettingState}
            title={props.description}
        >
            <TitleSetting enabled={props.enabled}>
                {props.TitleSetting}
            </TitleSetting>
            <SettingSwitch 
                switchState={props.switchState}
                enabled={props.enabled}
                onClick={props.enabled === true ? props.trigger: null}
            />
        </Card>
    );
}