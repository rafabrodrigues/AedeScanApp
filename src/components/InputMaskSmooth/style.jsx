import styled from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";
export const InputContainer = styled.View`
  width: ${(props) => props.width || "100%"};
`;

export const Input = styled(TextInputMask)`
  font-family: "Poppins_400Regular";
  padding: 10px;
  border-width: 2px;
  border-color: ${(props) =>
    props.hasError
      ? props.theme.colors.red
      : props.isFocused
      ? props.theme.colors.blueGray
      : props.theme.colors.gray};
  border-radius: 5px;
  color: ${(props) => props.theme.colors.white};
`;

export const Placeholder = styled.Text`
  position: absolute;
  display: ${(props) =>
    props.hasError || props.isFocused || props.hasValue ? "flex" : "none"};
  font-size: ${(props) => (props.isFocused ? "11px" : "14px")};
  padding-right: 5px;
  padding-left: 5px;
  font-family: "Poppins_400Regular";
  color: ${(props) =>
    props.hasError ? props.theme.colors.red : props.theme.colors.blueGray};
  top: ${(props) => (props.isFocused ? "-10px" : "0px")};
  left: 10px;
  background-color: ${(props) => props.theme.colors.darkBlue};
`;
