import styled from "styled-components";

export const SvgImg = styled.img``;

const ExternalLink = styled.a``;

export const LinkedImg = ({ imgSrc, href, ...args }) => {
  return (
    <ExternalLink href={href} target="_blank" {...args}>
      <SvgImg src={imgSrc} />
    </ExternalLink>
  );
};
