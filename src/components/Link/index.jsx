import styled from "styled-components/native";
import { flex } from "./../../screens/HomeScreen/styles";

export const Link = styled.TouchableOpacity`
  background-color: transparent;
`;

export const LinkText = styled.Text`
  color: ${(props) => props.color || props.theme.colors.white};
  font-size: 12.5px;
  font-family: "Poppins_600SemiBold";
  
`;

export const LinkForgetPassword = styled(Link)`
  align-self: flex-end;
`;
