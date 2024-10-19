import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 48px; 
  background-color: ${(props) => props.theme.colors.darkBlue};
  flex: 1;
`;

export const QuestionList = styled.FlatList`

`;
