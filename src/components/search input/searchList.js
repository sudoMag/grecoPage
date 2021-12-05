import styled from "styled-components";

const SearchListFrame = styled.div`
    position: absolute;
    width: 80vw;
    max-width: 500px;
    background-color: var(--bg-color-5);
    display: flex;
    flex-direction: column;
    padding: 15px 0;
    border-radius: 0 0 20px 20px;
    transition-duration: 300ms;
    transition-delay: 100ms;
    z-index: -1;
    ${props => {
        if (props.inputIsFocused) {
            return `transform: translate(0);
                    opacity: 1;`
        } else if (!props.inputIsFocused) {
            return `transform: translate(0, -100%);
                    opacity: 0;`
        }
    }}

    ${props => 
        `& #${props.sugerencySelected} {
            background-color: var(--bg-color-4);
        }`
    }

`;

const ListText = styled.li`
    width: 88%;
    height: 20px;
    margin: 5px auto;
    padding: 5px 20px;
    border-radius: 50px;
    transition-duration: 500ms;
    display: block;
    display: flex;
    white-space: break-spaces;
    cursor: pointer;
    color: var(--font-color-2);

    &:hover {
        background-color: var(--bg-color-4);
    }

    & div {
        font-weight: bold;
        color: var(--font-color);
    }
`;

export const SearchList = ({
    textToSearch,
    sugerencySelected,
    inputIsFocused,
    sugerencies,
    clickEventHandler,
    ...rest
}) => {

    return (
        <SearchListFrame
            sugerencySelected={sugerencySelected}
            inputIsFocused={inputIsFocused}
            data-testid="search-list"
        >
            { sugerencies
            .map((sugerency, index) =>
                    <ListText 
                        id={"sug" + index}
                        key={index}
                        onClick={e => {clickEventHandler(index)}}
                    >
                        <div key={index}>
                            {textToSearch}
                        </div>
                        { sugerency }
                    </ListText>
                )
            }
        </SearchListFrame>);
}