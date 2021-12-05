import styled from "styled-components";

const ResultBox = styled.li`
display: flex;
margin: 20px auto;
width: 80vw;
flex-direction: column;
border-top: solid 2px var(--bg-color-4);
font-family: system-ui;

.skeleton-content {
    height: 15px;
    border-radius: 30px;
    background-color: var(--bg-color-4);
}

& #result-title {
    width: 40%;
    height: 20px;
    margin: 15px auto 15px 20px;
}

& #result-words-1 {
    width: 80%;
    margin: 10px auto 10px 20px;
}

& #result-words-2 {
    width: 70%;
    margin: 10px auto auto 20px;
}
`;

export { ResultBox };