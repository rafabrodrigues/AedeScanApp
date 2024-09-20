import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { InputPasswordContainer, InputPassword, Placeholder } from "./style";
const InputPasswordSmooth = ({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  width,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <InputPasswordContainer
      width={width}
      isFocused={isFocused || value.length > 0}
    >
      <View style={{ width: "90%" }}>
        <InputPassword
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          isFocused={isFocused || value.length > 0}
          placeholder={isFocused ? "" : placeholder}
          placeholderTextColor="#999"
          keyboardType={keyboardType ? keyboardType : "default"}
          secureTextEntry={secureTextEntry}
        />
        <Placeholder isFocused={isFocused || value.length > 0}>
          {placeholder}
        </Placeholder>
      </View>

      <TouchableOpacity onPress={togglePasswordVisibility}>
        {secureTextEntry ? (
          <Entypo name="eye" color="#FFF" size={22} />
        ) : (
          <Entypo name="eye-with-line" color="#FFF" size={22} />
        )}
      </TouchableOpacity>
    </InputPasswordContainer>
  );
};

export default InputPasswordSmooth;
