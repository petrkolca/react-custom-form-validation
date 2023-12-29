import { useState } from "react";
import { StyledFormInput } from "./styles/FormInput.styled";

const FormInput = ({ label, errorMessage, onChange, ...inputProps }) => {
  const [focused, setFocused] = useState(false);
  // const { label, errorMessage, onChange, id, ...inputProps } = props;

  const focusHandler = (e) => {
    setFocused(true);
  };

  console.log('focused :>> ', focused);

  return (
    <StyledFormInput>
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={focusHandler}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      {errorMessage && <span>{errorMessage}</span>}
    </StyledFormInput>
  );
};

export default FormInput;
