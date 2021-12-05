import styled from "styled-components";

export const BoxContainer = styled.div`
    width: 80%;
    max-width: 500px;
    margin: auto auto;
    z-index: 3;
`;

export const InputFrame = styled.input`
    position: absolute;
    background-color: transparent;
    border: none;
    width: 70%;
    outline: none;
    margin: 0 5%;
    font-size: 0.97em;
    font-family: system-ui;
    z-index: 2;
    color: transparent;
`;

export const TextBox = styled.div`
    height: 30px;
    transition-duration: 500ms;
    transition-delay: 100ms;
    ${props => {
        if (props.isFocused) {
            return "border-radius: 20px 20px 0 0"
        } else if (!props.isFocused) {
            return "border-radius: 50px"
        }
    }};
    background-color: var(--bg-color-3);
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const SugerencyText = styled.div`
    position: absolute;
    color: var(--font-color-2);
    max-width: 70%;
    margin: 0 5%;
    display: flex;
    white-space: break-spaces;
    justify-content: flex-end;
    overflow-x: hidden;

    & div {
        color: var(--font-color);
    }
`;