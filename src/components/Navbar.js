import styled from "styled-components";
import GrecoLogoSvg from "../media/greco logo.svg";
import GitHubLogoSvg from "../media/github logo.svg";
import { SvgImg, LinkedImg } from "./Image";
import { addScrollFx } from "../services/getScrollPosition";
import { useState } from "react";

const Bar = styled.nav.attrs(({ scrollPosition }) => {
  const [, axisY] = scrollPosition;
  //console.log((axisY > 40 ? 40 : axisY / 0.74) * 0.3);
  return {
    style: {
      backdropFilter: `blur(${(axisY > 40 ? 40 : axisY / 0.74) * 0.3}px)`,
    },
  };
})`
  width: 100%;
  height: 60px;
  //background-color: gray;
  display: flex;
  position: fixed;
  z-index: 2;
  backdrop-filter: blur(0px);
`;

const PageTitle = styled.span`
  margin: auto auto auto 2vw;
  line-height: 1;
  width: 10vw;
  text-align: start;
  color: black;
  font-size: 1.2em;
  font-weight: 600;
`;

const GithubLink = styled(LinkedImg)`
  & {
    margin: auto 2vw auto auto;
    width: 10vw;
    display: flex;
    justify-content: flex-end;
  }
`;

const Logo = styled(SvgImg)`
  margin: auto;
  width: 30px;
`;

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState([0, 0]);
  const [fxSwitch, setFxSwitch] = useState(true);

  if (fxSwitch === true) {
    addScrollFx((scrollPosition) => {
      setScrollPosition([scrollPosition.axisX, scrollPosition.axisY]);
    });
    setFxSwitch(false);
  }

  return (
    <Bar scrollPosition={scrollPosition}>
      <PageTitle>GRECO</PageTitle>
      <Logo src={GrecoLogoSvg} />
      <GithubLink
        imgSrc={GitHubLogoSvg}
        href="https://github.com/sudoMag/greco"
      />
    </Bar>
  );
};

export default Navbar;
