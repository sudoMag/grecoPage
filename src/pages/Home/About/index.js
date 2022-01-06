import screenShots from "../../../media/screenshots.svg";
import {
  DescriptionP,
	H2Text,
  Container,
  RightContent,
  LeftContent,
  ScreenShotsImg,
} from "./styles";

export const About = () => {
  return (
    <Container className="mobile-change orientation">
      <LeftContent className="mobile-change all-screen-width">
        <ScreenShotsImg src={screenShots} />
      </LeftContent>
      <RightContent className="mobile-change all-screen-width">
				<H2Text>Sí eres Igeniero, Arquitecto, Desarrollador de Software o tal véz estudiante,</H2Text>
        <DescriptionP> y necesitas tener varias palabras técnicas o palabras coloquiales y sus significado solo tienes que buscarlo y listo</DescriptionP>
      </RightContent>
    </Container>
  );
};
