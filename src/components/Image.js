import styled from "styled-components";

export const SvgImg = styled.img`
  ${({ styleKeys }) => {
    return `${styleKeys}`;
  }}
`;

const ExternalLink = styled.a`
  ${({ styleKeys }) => {
    return `${styleKeys}`;
  }}
`;

export const LinkedImg = ({ imgSrc, styleKeys }) => {
  return (
    <ExternalLink
      href="*"
      styleKeys={`${styleKeys}`}
		>
      <SvgImg src={imgSrc} />
    </ExternalLink>
  );
};
