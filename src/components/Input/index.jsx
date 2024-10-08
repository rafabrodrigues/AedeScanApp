import styled from "styled-components/native";

export const Input = styled.TextInput`
  width: ${(props) => props.width || "100%"};
  background-color: ${(props) => props.theme.colors.darkBlue2};
  padding: ${(props) => props.padding || "12px"};
  color: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  font-family: "Poppins_400Regular";
  border: 1px solid ${(props) => props.theme.colors.blueGray};
`;
