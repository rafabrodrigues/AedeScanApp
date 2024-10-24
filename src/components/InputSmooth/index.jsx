import React, { useState } from "react";
import { InputContainer, Input, Placeholder } from "./style";

const InputSmooth = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
  width,
  errorMessage,
  multiline,
  numberOfLines,
  maxLength,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <InputContainer width={width}>
      <Input
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        isFocused={isFocused || value.length > 0}
        placeholder={isFocused || !!errorMessage ? "" : placeholder}
        placeholderTextColor="#999"
        keyboardType={keyboardType || "default"}
        hasError={!!errorMessage}
        multiline={multiline}
        numberOfLines={numberOfLines}
        maxLength={maxLength}
      />
      <Placeholder
        isFocused={isFocused || value.length > 0 || errorMessage}
        hasError={!!errorMessage}
      >
        {errorMessage || placeholder}
      </Placeholder>
    </InputContainer>
  );
};

export default InputSmooth;
