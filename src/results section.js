import { Component } from "react";
import styled from "styled-components";
import { LoadingResult } from "./components/results/insert results";
import grecoLogo from "./components/results/greco logo.svg";
import { SimilarWords } from "./components/results/similar words";
import { AppBackgroundLogo } from "./components/results/background logo";

const Section = styled.section`
    overflow-y: scroll;
    height: 90%;
    display: flex;
    flex-direction: column;
    ${props => {
        if (props.blur === true) {
            return "filter: blur(10px) brightness(0.6)"
        }
    }};

    &::-webkit-scrollbar {
        -webkit-appearance: none;
    }

    &::-webkit-scrollbar:vertical {
        width:10px;
    }

    &::-webkit-scrollbar-button:increment,.contenedor::-webkit-scrollbar-button {
        
    } 

    &::-webkit-scrollbar:horizontal {
        height: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--font-color-2);
        border-radius: 20px;
        border: 2px solid var(--bg-color-1);
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: var(--font-color-2);
        border: 1px solid var(--bg-color-1);
    }

    &::-webkit-scrollbar-thumb:active {
        background-color: var(--font-color);
        border: 1px solid var(--bg-color-1);
    }
`;

const SearchTitle = styled.h1`
    ${props => {
            if ( props.searchText ) {
                return "display: none" 
            } else {
                return "display: block"
            }
        }
    };
    text-align: center;
    font-family: system-ui;
    font-size: 2em;
    font-weight: bold;
    color: var(--font-color);;
    text-transform: capitalize;
`;

const MessageText = styled.h4`
    color: var(--font-color-2);
    margin: 0;
    text-align: center;
    font-weight: normal;
`;

class ResultsSection extends Component {

    render () {
        return (
            <Section blur={ this.props.blur }>
                
                <AppBackgroundLogo src={ grecoLogo } 
                    show={ !this.props.showResults ? 
                        true : false
                    }
                />
                <SearchTitle>
                    { this.props.searchText }
                </SearchTitle>
                <MessageText>
                    { this.props.messageText }
                </MessageText>
                <LoadingResult 
                    searching={ this.props.searching }
                    resultsListFromSearch={ this.props.resultsList }
                    showResults={ this.props.showResults }
                    wordsMarking={this.props.wordsMarking}
                    toMarkList={this.props.toMarkList}
                    reSearch={this.props.reSearch}
                    referencesDefinition={this.props.referencesDefinition}
                />
                <SimilarWords
                    enable={true}
                    similarWords={this.props.similarWords}
                    reSearch={this.props.reSearch}
                />
            </Section>
        );
    }
}

export default ResultsSection;