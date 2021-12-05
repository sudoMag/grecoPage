import styled from "styled-components";

export const AppBackgroundLogo = styled.img`
    opacity: 10%;
    height: 50vw;
    width: auto;
    margin: auto;

    ${props => {
            if( props.show === true ){
                return "display: block"
            } else if ( props.show === false ) {
                return "display: none" 
            }
        }
    };
`;