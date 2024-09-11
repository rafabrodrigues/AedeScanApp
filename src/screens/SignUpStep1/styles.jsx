import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #2b2d42;
  flex: 1;
  justify-content: space-between;
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

export const InputContainer = styled.View`
  flex-direction: column;
  width: 85%;
  gap: 12px;
  margin-top: 24px;
`;

export const ButtonContainer = styled.View`
  height: 64px;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-top-color: #000; 
  border-top-style: solid;
`;
