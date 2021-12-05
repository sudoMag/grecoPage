import { ResultBox } from "./styles";
import styled from "styled-components";
import { ToMarkWords } from "./words marking";
import {
    getEnabledDictionaryNamesFromLocalStorage
} from "../../local storage";

const ResultTitle = styled.div`
    margin: 15px auto 15px auto;
    font-size: 1.5em;
    font-weight: bold;
    color: var(--font-color);
`;

const ResultDefinition = styled.div`
    margin: 0 auto 15px auto;
    color: var(--font-color);
`;

export const ResultContent = ({
        resultsList,
        wordsMarking,
        toMarkList,
        reSearch,
        referencesDefinition
    }) => {

    const dictionaryNames 
        = getEnabledDictionaryNamesFromLocalStorage();

    const FormatResultCard = ({
        authorTitle,
        cardContent,
        index
    }) => {
        return <ResultBox id={"Result-box" + index} key={index}>
                    <ResultTitle>
                        {authorTitle}
                    </ResultTitle>
                    <ResultDefinition id={"Result-word" + index} >
                        {wordsMarking === 'true' ? 
                            <ToMarkWords 
                                wordsToMark={cardContent}
                                toMarkList={toMarkList}
                                reSearch={reSearch}
                                referencesDefinition={referencesDefinition}
                            />
                            : cardContent
                        }
                    </ResultDefinition>
                </ResultBox>;
    }
    
    var otherList;
    if (dictionaryNames) {
        otherList = dictionaryNames.map((name, index) => {
            if (resultsList[name]) {
                let content = resultsList[name];
    
                return FormatResultCard({
                    authorTitle: name,
                    cardContent: content,
                    index: index
                });
            }
            return null;
        });
    }
    return otherList;
}