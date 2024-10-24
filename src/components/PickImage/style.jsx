import styled from "styled-components/native";

export const PickImageContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const PickImageContent = styled.View`
  width: 75%;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #000;
`;

export const PickImageButton = styled.TouchableOpacity`
  width: 100%;
  padding: 12px;
`;

export const PickImageText = styled.Text`
  font-family: "Poppins_400Regular";
  font-size: 14px;
  color: ${(props) => props.theme.colors.white};
`;
