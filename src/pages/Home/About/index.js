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
				<H2Text>Si eres Igeniero, Arquitecto, Desarrollador de Software o tal vez estudiante,</H2Text>
        <DescriptionP> y necesitas tener varias palabras del ámbito profesional o palabras coloquiales y sus significados solo tienes que buscarlo en Greco y listo</DescriptionP>
      </RightContent>
    </Container>
  );
};
