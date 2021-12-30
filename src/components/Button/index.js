import StyledButton, { PillText } from "./styles";

const Button = ({ children, color, moreStyles }) => {
  return (
    <StyledButton color={color} moreStyles={moreStyles}>
      {children}
    </StyledButton>
  );
};

export const DownloadButton = ({ color, moreStyles }) => {
  return (
    <a href="./Greco.exe" download="Greco-Beta-0.0.1.exe">
      <Button color={color} moreStyles={moreStyles}>
        Descargar
      </Button>
    </a>
  );
};

export const TextInsidePill = ({ children }) => {
  return <PillText>{children}</PillText>;
};

export default Button;
