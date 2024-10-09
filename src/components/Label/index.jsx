import styled from "styled-components/native";

export const Label = styled.Text`
  color: ${(props) => props.color || props.theme.colors.blueGray};
  font-size: ${(props) => props.size || "16px"};
  font-family: "Poppins_400Regular";
`;
