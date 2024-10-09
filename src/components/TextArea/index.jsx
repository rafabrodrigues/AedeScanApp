import styled from "styled-components/native";

export const TextArea = styled.TextInput`
  width: ${(props) => props.width || "100%"};
  background-color: ${(props) => props.theme.colors.darkBlue2};
  padding-right: 16px;
  padding-left: 16px;
  color: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  font-family: "Poppins_400Regular";
  text-align: top;
  border: 1px solid ${(props) => props.theme.colors.blueGray};
`;
