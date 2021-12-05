import styled from "styled-components";

const Box = styled.div`
    background-color: var(--bg-color-6);
    border: 1px solid var(--bg-color-4);
    border-radius:10px;
    display: flex;
    ${({visible}) => {
        if (visible === true) {
            return 'transform: scaleY(1)';
        } else if (visible === false) {
            return 'transform: scaleY(0); display: none';
        }
    }};
    margin: 5px 0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    z-index: 5;
    transition-duration: 200ms;
`;

const BoxContent = styled.p`
    width: 80%;
    font-size: 1rem;
    font-weight: normal;
    margin: 10px auto;
    ${({visible}) => {
        if (visible === true) {
            return 'opacity: 1';
        } else if (visible === false) {
            return 'opacity: 0';
        }
    }};
    transition-duration: 1s;
`;

const ReSearchButton = styled.div`
    margin: 0.5em;
    max-width: 25vw;
    padding: 0.5em 1em;
    font-size: 0.8rem;
    text-align: end;
    border-radius: 20px;
    color: var(--font-color);
    background-color: var(--bg-color-4);
    white-space: break-spaces;
    font-weight: normal;
    transition-duration: 200ms;

    &:hover {
        background-color: var(--bg-color-1);
    }

    & span {
        text-transform: capitalize;
        font-weight: normal;
        font-size: 1rem;
    }
`;

export const ReferenceBox = ({
    word,
    visible,
    referencesDefinition,
    reSearch
}) => {

    return (
        <Box
            visible={visible}
        >
            <BoxContent visible={visible}>
                {referencesDefinition[word]}
            </BoxContent>
            <ReSearchButton
                onClick={() => {reSearch(word)}}
            >
                {'ver más de '}
                <span>{word}</span>
            </ReSearchButton>
        </Box>
    );
}