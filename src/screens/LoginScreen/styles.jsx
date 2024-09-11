import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #2b2d42;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const SubTitleContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-bottom: 25%;
`;

export const SubTitle = styled.Text`
  text-align: center;
  color: #8d99ae;
  font-family: Poppins_400Regular_Italic;
  align-items: center;
  font-size: 18px;
  margin-top: -20px;
`;

export const ButtonContainer = styled.View`
  width: 90%;
  gap: 16px;
  margin-bottom: 15%;
`;
