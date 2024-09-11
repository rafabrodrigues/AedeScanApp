import styled from "styled-components/native";

export const InputContainer = styled.View`
  width: 100%;
  position: relative;
`;

export const Input = styled.TextInput`
  font-family: "Poppins_400Regular";
  padding: 10px;
  border: 2px solid ${props => props.theme.colors.gray};
  border-radius: 5px;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.white};
  ${(props) =>
    props.isFocused &&
    `
    border-color:${props => props.theme.colors.cian};
  `}
`;

export const Placeholder = styled.Text`
  position: absolute;
  display: none;
  font-size: 14px;
  padding-right: 5px;
  padding-left: 5px;
  font-family: "Poppins_400Regular";
  ${(props) =>
    props.isFocused &&
    `
    display:flex;
    color:${props => props.theme.colors.cian };
    top: -10px;
    left: 10px;
    font-size: 12px;
    background-color: #2b2d42;
  `}
`;

