import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  width: 85%;
`;

export const CepContainer = styled.View`
  width: 85%;
  flex-direction: row;
  gap: 12px;
  align-items: center;
`;

export const TitleContainer = styled.View`
  width: 100%;
  flex-direction: column;
`;

export const MidiaTitleContainer = styled(TitleContainer)`
  margin-bottom: 8px;
`;

export const FormContainer = styled.View`
  width: 85%;
  margin-top: 12px;
  gap: 12px;
`;

export const AgroupContainer = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 8px;
`;

export const MidiaContainer = styled.View`
  width: 85%;
  background-color: rgba(0, 0, 0, 0.1);
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 12px;
`;

export const PickFileContainer = styled(AgroupContainer)`
  margin-bottom: 4px;
`;

export const ButtonContainer = styled.View`
  width: 85%;
  margin-top: 12px;
`;

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: "center",
  },
}))`
  background-color: ${(props) => props.theme.colors.darkBlue};
  flex: 1;
  padding-top: 48px;
`;
