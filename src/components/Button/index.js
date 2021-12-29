import StyledButton from "./styles";

const Button = ({ color, moreStyles, contentText }) => {
  return (
    <StyledButton color={color} moreStyles={moreStyles}>
      {contentText}
    </StyledButton>
  );
};

export const DownloadButton = ({ color, moreStyles }) => {
  return (
    <Button 
			color={color} 
			moreStyles={moreStyles} 
			contentText="Descargar" 
		/>
  );
};

export default Button;
