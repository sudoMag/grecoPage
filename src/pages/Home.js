import styled from "styled-components";
import { SvgImg } from "../components/Image";
import ScreenShotsSvg from "../media/screenshots.svg";
import { DescriptionH1, DescriptionH2 } from "../components/TextTypes";
import { DownloadButton } from "../components/Button";

const Header = styled.header`
  display: flex;
  width: 100vw;
  min-height: 100vh;
`;

const LeftContent = styled.div`
  width: 40vw;
  margin: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DownloadBox = styled.div`
  margin: 2em 0;
  display: flex;
  flex-direction: row;
`;

const RightContent = styled.div`
  display: flex;
  justify-content: center;
`;

const Home = () => {
  return (
    <Header className="header mobile-change orientation reverse">
      <LeftContent className="mobile-change all-screen-width">
        <DescriptionH1>
          Varias Definiciones Para Todas Tus Consultas
        </DescriptionH1>
        <DescriptionH2>
          Con esta App puedes consultar palabras técnicas de tu área profesional
          y obtener varias perspectivas para utilizar.
        </DescriptionH2>
        <DownloadBox>
          <DownloadButton>Descargar</DownloadButton>
        </DownloadBox>
      </LeftContent>
      <RightContent
        className="
          mobile-change
          all-screen-width 
          navbar-space-padding
        "
      >
        <SvgImg
          src={ScreenShotsSvg}
          styleKeys={`
          width: 50vw;
          margin: auto;
          `}
          className="mobile-change all-screen-width"
        />
      </RightContent>
    </Header>
  );
};

export default Home;
