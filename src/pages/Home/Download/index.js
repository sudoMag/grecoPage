import FileIllustration from "../../../media/download illustration.svg";
import { DownloadButton, TextInsidePill } from "../../../components/Button";
import {
  DownloadBox,
  PlatformText,
  DownloadMessage,
  Container,
  FileImg,
} from "./styles";

export const Download = () => {
  return (
    <Container>
      <FileImg src={FileIllustration} />
      <DownloadBox>
        <DownloadButton HoverColor="gray">Descargar</DownloadButton>
        <TextInsidePill>Beta</TextInsidePill>
        <PlatformText>Windows</PlatformText>
      </DownloadBox>
      <DownloadMessage>
        Puedes probar esta Versión sin necesidad de instalar la app en tu
        ordenador
      </DownloadMessage>
    </Container>
  );
};
