import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.darkBlue};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TitlesContainer = styled.View`
  width: 65%;
`;


export const InputContainer = styled.View`
  flex-direction: column;
  width: 85%;
  gap: 8px;
  margin-top: 12px;
  margin-bottom: 4px;
`;

export const LinkContainer = styled.View`
  width: 85%;
`;

export const CreateAccountContainer = styled.View`
  width: 85%;
  flex-direction: row;
`

export const ButtonContainer = styled.View`
  width: 85%;
  margin-top: 16px;
  margin-bottom: 8px;
`;
