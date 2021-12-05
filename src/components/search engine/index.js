import { useState } from 'react';
import styled from 'styled-components';
import SearchSection from '../search input';
import ResultsSection from '../../results section';
import { handleSearching } from './service calls';
import { ErrorSection } from '../results/error page';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const SearchSender = ({
    showSettingsMenu,
    wordsMarking
}) => {
    const [ results, setResults ] = useState({});
    const [ searching, setSearching ] = useState(false);
    const [ showResults, setShowResults ] = useState(false);
    const [ searchText, setSearchText ] = useState("");
    const [ messageText, setMessageText ] = useState("");
    const [ errorState, setErrorState ] = useState(false);


    const sendAndHandleResult = async (textToSearch) => {
        const resivedResults = await handleSearching(textToSearch);
        console.log(resivedResults);
        if (resivedResults !== "no results" 
            || resivedResults !== undefined) {
            setResults(resivedResults);
        }
        if (resivedResults[1] === "no results") {
            if (searchText !== "") {
                setSearchText("");
            }
            setMessageText("sin resultados");
        }
        if (resivedResults === "error") {
            setErrorState(true);
        }
        setSearchText(textToSearch);
        setShowResults(true);
        setSearching(false);
    }

    const search = (textToSearch) => {
            sendAndHandleResult(textToSearch);
            setSearching(false);
    }

    return (
        <Container>
            <SearchSection 
                search={search}
                blur={showSettingsMenu} 
            />
            {
                errorState === false ?
                <ResultsSection
                    searching={searching}
                    resultsList={results[1]} 
                    showResults={showResults}
                    searchText={searchText}
                    blur={showSettingsMenu}
                    wordsMarking={wordsMarking}
                    toMarkList={results[0]}
                    reSearch={search}
                    referencesDefinition={results[2]}
                    similarWords={results[3]}
                    messageText={messageText}
                />
                : <ErrorSection
                    message={'Error al Enviar'}
                />
            }
            
        </Container>
    )
}