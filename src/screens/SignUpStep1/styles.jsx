import styled from "styled-components/native";

import InputSmooth from "../../components/InputSmooth";
import { InputContainer } from "../../components/InputSmooth/style";
export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.darkBlue};
  flex: 1;
  justify-content: space-around;
  align-items: center;
  gap: 16px;
  flex-direction: column;
`;

export const MainContainer = styled.View`
  margin-top: 16px;
  width: 100%;
  align-items: center;
`;

export const Images = styled.Image`
  width: 90%;
  height: 56px;
`;

export const FormContainer = styled.View`
  flex-direction: column;
  width: 85%;
  gap: 4px;
  margin-top: 24px;
`;

export const NameContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonContainer = styled.View`
  width: 85%;
  border-top-color: ${(props) => props.theme.colors.black};
  border-top-style: solid;
`;
