import styled from "styled-components/native";

export const Title = styled.Text`
  color: ${(props) => props.color || props.theme.colors.white};
  font-size: ${(props) => props.size || "28px"};
  font-family: "Poppins_700Bold";
  width: ${(props) => props.width};
`;

