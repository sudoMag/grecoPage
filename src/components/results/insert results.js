import { ResultContent } from "./result content";
import errorLogo from "./error logo.svg";
import { AppBackgroundLogo } from "./background logo";
import { LoadSkeleton } from "./loadskeleton";

export const LoadingResult = ({
    searching,
    resultsListFromSearch,
    showResults,
    wordsMarking,
    toMarkList,
    reSearch,
    referencesDefinition
}) => {
    const numberOfResults = 10;
    let resultsList = [];
    
    if (showResults && resultsListFromSearch === "no results") {
        resultsList = 
            <AppBackgroundLogo src={ errorLogo } 
                show={ true }
            />;
    } else if (showResults && resultsListFromSearch.length !== 0) {  
        resultsList = 
                <ResultContent
                    resultsList={ resultsListFromSearch }
                    wordsMarking={ wordsMarking }
                    toMarkList={toMarkList}
                    reSearch={reSearch}
                    referencesDefinition={referencesDefinition}
                />
    } else if (searching) {
        for (let i = 0; i < numberOfResults; i++) {
            
            resultsList[resultsList.length] = 
                LoadSkeleton(i);
        }
    }
    return resultsList;
}