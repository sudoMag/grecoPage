import styled, { keyframes } from "styled-components";
import { SvgImg } from "../../../components/Image";
import { DescriptionH1, PText } from "../../../components/TextTypes";

export const Container = styled.header`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(180deg, white 0%, #9ec9ff 100%);

  a {
    text-decoration: none;
  }
`;

export const DescriptionP = styled(PText)`
    margin: 0 0 4em;
`;

export const BigMessage = styled(DescriptionH1)`
  color: #336989;
  margin: 0.5em 0;
`;

export const LeftContent = styled.div`
  width: 40vw;
  margin: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RightContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const LevitationAnim = keyframes`
  0% {
    transform: translateY(5px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(5px);
  }
`;

export const IllustrationImg = styled(SvgImg)`
  width: 50vw;
  margin: auto;
  animation: ease-in-out 5s infinite ${LevitationAnim};
`;
