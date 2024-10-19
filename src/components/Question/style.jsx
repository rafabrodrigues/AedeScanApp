import styled from "styled-components/native";
import { flex } from "./../../screens/HomeScreen/styles";
import { FlatList } from 'react-native';


export const DuvidaContainer = styled.View`
  max-width: 100%;
  padding: 8px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.brightDarkBlue};
  flex-direction: column;
  gap: 4px;
  margin-top: 4px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const OpenDescription = styled.TouchableOpacity``;

export const QuestionDescription = styled.Text`
  color: ${(props) => props.color || props.theme.colors.white};
  font-size: ${(props) => props.size || "16px"};
  font-family: "Poppins_400Regular";
  text-align: justify;
  display: ${(props) => (props.isDescriptionVisible ? "none" : "flex")};
`;


