import styled from "styled-components";
import { ReferenceBox } from "./reference";
import { useState } from "react";

const Word = styled.a`
    font-weight: bold;
    cursor: pointer;
    ${({visible}) => {
        if (visible) {
            return "font-size: 1.5em"
        }
    }};
    transition-duration: 200ms;
`;

export const ToMarkWords = ({
    wordsToMark,
    toMarkList,
    reSearch,
    referencesDefinition,
    ...rest
}) => {
    const WordMarked = ({
        word,
        reSearch,
        referencesDefinition
    }) => {
        const [showCard, setShowCard] = useState(false);

        const handleReferenceVisibility = () => {
            if (showCard) {
                setShowCard(false);
            } else if (!showCard) {
                setShowCard(true);
            }
            
        }

        return (
            
            <Word
                onDoubleClick={(e) => {reSearch(word)}}
                onClick={handleReferenceVisibility}
                visible={showCard}
            >
                {word + " "}
                <ReferenceBox
                    visible={showCard}
                    word={word}
                    referencesDefinition={referencesDefinition}
                    reSearch={reSearch}
                />
            </Word>
        );
    }

    let finalText = [];
    const wordsList =  wordsToMark.split(' ');

    wordsList.forEach((word, index) => {
        if (toMarkList.includes(word)) {
            finalText[index] = 
            <WordMarked 
                key={index}
                word={word}
                reSearch={reSearch}
                referencesDefinition={referencesDefinition}
            />
        } else {
            finalText[index] = word + " ";
        }
    });
    return finalText;
}