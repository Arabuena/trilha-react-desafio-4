import React from "react";
import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button: React.FC<IButtonProps & { disabled?: boolean }> = ({ title, onClick, disabled }) => {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled}>
      {title}
    </ButtonContainer>
  );
};

export default Button;
