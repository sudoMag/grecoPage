import { ResultBox } from "./styles";

export const LoadSkeleton = (index) => {
    return <ResultBox id={"Result" + index} key={index}>
        <div id="result-title" className="skeleton-content">
        </div>
        <div id="result-words-1" className="skeleton-content"></div>
        <div id="result-words-2" className="skeleton-content"></div>
    </ResultBox>;
}