import { Header } from "./Header";
import { About } from "./About";
import styled from "styled-components";
import { Download } from "./Download";

const Container = styled.div``;

export const Home = ({...args}) => {
  return (
    <Container>
      <Header className="header mobile-change orientation reverse" />
      <About/>
      <Download/>
    </Container>
  );
};
