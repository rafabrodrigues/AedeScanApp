import styled from "styled-components/native";

export const InputPasswordContainer = styled.View`
  width: ${(props) => props.width || "100%"};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid;
  border-color: ${(props) =>
    props.isFocused ? props.theme.colors.blueGray : props.theme.colors.gray};
  border-radius: 5px;
  padding-right: 8px;
  margin-top: 10px;
`;

export const InputPassword = styled.TextInput`
  font-family: "Poppins_400Regular";
  width: 100%;
  padding: 10px;
  color: ${(props) => props.theme.colors.white};
`;

export const Placeholder = styled.Text`
  position: absolute;
  display: ${(props) => (props.isFocused || props.hasValue ? "flex" : "none")};
  font-size: 14px;
  padding-right: 5px;
  padding-left: 5px;
  font-family: "Poppins_400Regular";
  color: ${(props) => props.theme.colors.blueGray};
  top: ${(props) => (props.isFocused ? "-10px" : "0")};
  left: 10px;
  font-size: ${(props) => (props.isFocused ? "12px" : "14px")};
  background-color: ${(props) => props.theme.colors.darkBlue};
`;