import styled from "styled-components";

const Page = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const NotFoundMessage = styled.h1`
  margin: auto;
  color: #afafaf;
  font-size: 3em;
  margin: 0 auto auto;
`;

const Code = styled.h1`
  margin: auto auto 0;
  color: #afafaf;
  font-size: 8em;
  font-family: monospace;
`;

const NotFoundErrorPage = () => {
  return (
    <Page>
      <Code>404</Code>
      <NotFoundMessage>Page Not Found :C</NotFoundMessage>
    </Page>
  );
};

export default NotFoundErrorPage;
