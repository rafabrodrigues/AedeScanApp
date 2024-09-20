import styled from "styled-components/native";

export const SubTitle = styled.Text`
  color: ${(props) => props.color || props.theme.colors.white};
  font-size: ${(props) => props.size || "16px"};
  font-family: "Poppins_400Regular";
  text-align: justify;
`;
