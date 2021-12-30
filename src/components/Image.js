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

export const LinkedImg = ({ imgSrc, href, styleKeys }) => {
  return (
    <ExternalLink
      href={href}
      styleKeys={`${styleKeys}`}
      target="_blank"
		>
      <SvgImg src={imgSrc} />
    </ExternalLink>
  );
};
