import styled from "styled-components";
import { DescriptionH2, PText } from "../../../components/TextTypes";
import { SvgImg } from "../../../components/Image";

export const H2Text = styled(DescriptionH2)`
	margin: auto auto 5px auto;
	color: #336989;
  font-size: 2em;
`;

export const Container = styled.div`
  //min-height: 600px;
  display: flex;
	margin: 2em;
`;

export const DescriptionP = styled(PText)`
    margin: 0 auto auto auto;
`;

export const RightContent = styled.div`
	width: 50vw;
	//min-height: 60vh;
	display: flex;
	flex-direction: column;
`;

export const LeftContent = styled.div`
	width: 50vw;
	display: flex;
`;

export const ScreenShotsImg = styled(SvgImg)`
	margin: auto;
	width: 80%;
`;