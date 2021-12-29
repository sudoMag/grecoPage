import styled from "styled-components";

const StyledButton = styled.div`
  padding: 0.6em 2em;
  border-radius: 30px;
  line-height: 1;
  background-color: ${({ color }) => color};
  background-color: black;
  font-size: 1.1em;
  cursor: pointer;
  color: white;
  ${({ moreStyles }) => moreStyles};
`;

export default StyledButton;