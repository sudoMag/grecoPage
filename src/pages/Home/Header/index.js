import {
  Container,
  DescriptionP,
  BigMessage,
  LeftContent,
  RightContent,
  IllustrationImg,
} from "./styles";
import IllustrationSvg from "../../../media/greco ilustration.svg";

export const Header = ({...args}) => {
  return (
    <Container {...args}>
      <LeftContent className="mobile-change all-screen-width">
        <BigMessage>Varias Definiciones Para Todas Tus Consultas</BigMessage>
        <DescriptionP>
          Con esta App puedes consultar palabras técnicas de tu área profesional
          y obtener varias perspectivas para utilizar.
        </DescriptionP>
      </LeftContent>
      <RightContent
        className="
          mobile-change
          all-screen-width 
          navbar-space-padding
        "
      >
        <IllustrationImg
          src={IllustrationSvg}
          className="mobile-change all-screen-width"
        />
      </RightContent>
    </Container>
  );
};
