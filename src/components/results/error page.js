import styled from "styled-components";

const Container = styled.section`

`;

export const ErrorSection = ({message}) => {
    return (
        <Container>
            { message }
        </Container>
    );
}