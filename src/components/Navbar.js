import styled from "styled-components";
import GrecoLogoSvg from "../media/greco logo.svg";
import GitHubLogoSvg from "../media/github logo.svg";
import { SvgImg, LinkedImg } from "./Image";
import { addScrollFx } from "../services/getScrollPosition";
import { useState } from "react/cjs/react.development";

const Bar = styled.nav`
  width: 100vw;
  height: 60px;
  //background-color: gray;
  display: flex;
  position: fixed;
  backdrop-filter: blur(px);
  ${({ scrollPosition }) => {
    //console.log((scrollPosition[1] / 0.74) * 0.3 ,"px");
    return `backdrop-filter: blur(${(scrollPosition[1] / 0.74) * 0.3}px);`;
  }};
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
      <SvgImg
        src={GrecoLogoSvg}
        styleKeys={`
            margin: auto;
          `}
      />
      <LinkedImg
        imgSrc={GitHubLogoSvg}
        styleKeys={`
            margin: auto 2vw auto auto;
            width: 10vw;
            display: flex;
            justify-content: flex-end;
          `}
      />
    </Bar>
  );
};

export default Navbar;
