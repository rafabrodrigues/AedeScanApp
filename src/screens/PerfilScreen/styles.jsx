import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.darkBlue};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Texto = styled.Text`
  color: ${(props) => props.theme.colors.white};
`;
