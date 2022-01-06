import styled from "styled-components";
import { SvgImg } from "../../../components/Image";
import { PText } from "../../../components/TextTypes";

export const DownloadBox = styled.div`
  margin: 0 auto 0;
  display: flex;
  flex-direction: row;
`;

export const PlatformText = styled.h4`
  margin: auto 0;
  color: #363636;
`;

export const DownloadMessage = styled(PText)`
  font-size: 1em;
	margin: 20px auto auto;
	max-width: 300px;
`;

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  background: linear-gradient(180deg,#9ec9ff 0%,white 100%);
`;

export const FileImg = styled(SvgImg)`
  margin: auto auto 20px;
  width: 250px;
`;
