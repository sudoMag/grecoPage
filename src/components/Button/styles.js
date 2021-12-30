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

export const PillText = styled.div`
  padding: 0 0.9em;
  border-radius: 30px;
  /* line-height: 1; */
  background-color: gray;
  color: white;
  margin: auto 10px;
  height: 25px;
  color: #ebd1d1;
  background-color: #831b1b;
  border: #ed9b9b solid 2px;
  ${({ moreStyles }) => moreStyles};
`;

export default StyledButton;
