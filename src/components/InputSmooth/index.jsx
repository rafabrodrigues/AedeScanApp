import { useState } from "react";
import React from "react";
import { InputContainer, Input, Placeholder } from "./style";

const InputSmooth = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
  mask,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <InputContainer>
      <Input
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        isFocused={isFocused || value.length > 0}
        placeholder={isFocused ? "" : placeholder}
        placeholderTextColor="#999"
        keyboardType={keyboardType ? keyboardType : "default"}
      />
      <Placeholder isFocused={isFocused || value.length > 0}>
        {placeholder}
      </Placeholder>
    </InputContainer>
  );
};

export default InputSmooth;
