import styled from "styled-components"

const WordPill = styled.span`
    padding: 0.5em 10px;
    margin: 5px;
    border-radius: 30px;
    background-color: var(--bg-color-3);
    color: var(--font-color);
    cursor: pointer;
    line-height: 1;

    &:hover {
        background-color: var(--bg-color-4);
    }
    transition-duration: 200ms;
`;

const PillContainer = styled.div`
    background-color: transparent;
    display: flex;
    flex-wrap: wrap;
    margin: 10px auto;
    width: 80vw;
`;

export const SimilarWords = ({
    enable,
    similarWords,
    reSearch
}) => {
    var pills = [];

    if (enable && similarWords) {
        
        
        pills = similarWords.map((word, index) => { 
                return <WordPill
                    key={index}
                    onClick={(e) => {reSearch(word)}}
                >
                    {word}
                </WordPill>;
        });
    }

    return (
        <PillContainer>
            {pills}
        </PillContainer>
    );
} 