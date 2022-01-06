import StyledButton, { PillText } from "./styles";

const Button = ({ children, color, ...args }) => {
  return (
    <StyledButton color={color} {...args}>
      {children}
    </StyledButton>
  );
};

export const DownloadButton = ({ color, HoverColor = "none", ...args }) => {
  return (
    <a
      href="./Greco.exe"
      download="Greco-Beta-0.0.1.exe"
      style={{textDecoration: 'none'}}
    >
      <Button color={color} HoverColor={HoverColor} {...args}>
        Descargar
      </Button>
    </a>
  );
};

export const TextInsidePill = ({ children, ...args }) => {
  return <PillText {...args}>{children}</PillText>;
};

export default Button;
