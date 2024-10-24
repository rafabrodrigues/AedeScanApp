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

export const FormContainer = styled.View`
  margin-top: 8px;
  flex-direction: column;
  width: 85%;
  gap: 10px;
`;

export const AvatarContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const NameContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
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
