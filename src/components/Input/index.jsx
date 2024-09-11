import styled from "styled-components/native";

export const Input = styled.TextInput`
  background-color: ${props => props.theme.colors.darkBlue2};
  padding: 12px;
  color: white;
  border-radius: 4px;
  font-family: "Poppins_400Regular";
  border: 1px solid ${props => props.theme.colors.white};
`;


