import styled from "styled-components/native";

import InputSmooth from "../../components/InputSmooth";
import { InputContainer } from "../../components/InputSmooth/style";
export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.darkBlue};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TitlesContainer = styled.View`
  width: 65%;
`;

export const FormContainer = styled.View`
  margin-top: 8px;
  flex-direction: column;
  width: 85%;
  gap: 12px;
`;

export const NameContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonContainer = styled.View`
  width: 85%;
  margin-top: 16px;
`;

export const LinkContainer = styled.View`
  width: 85%;
  flex-direction: row;
  margin-top: 8px;
`;
