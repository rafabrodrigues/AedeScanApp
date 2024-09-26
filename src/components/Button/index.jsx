import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import theme from "../../theme";
import AntDesign from '@expo/vector-icons/AntDesign';

export const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.bgColor || props.theme.colors.gray};
  align-items: center;
  justify-content: center;
  padding-top: 12px;
  padding-right: 4px;
  padding-bottom: 12px;
  border-radius: 4px;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.color || props.theme.colors.darkBlue};
  font-size: ${(props) => props.fontSize || "16px"};
  font-family: "Poppins_700Bold";
`;

export const ButtonCadastro = styled(Button)`
  border: 2px solid ${(props) => props.theme.colors.gray};
`;

const ButtonWIContainer = styled.TouchableOpacity`
  background-color: ${(props) => props.bgColor || props.theme.colors.black};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: ${(props) => props.width || "50%"};
  padding-top:8px;
  padding-bottom: 8px;
  border-radius: 4px;
`;

export const ButtonWithIcon = ({ text, onPress }) => {
  return (
    <ButtonWIContainer bgColor='#0000004d' onPress={onPress}>
      <ButtonText color={theme.colors.black}>{text}</ButtonText>
      <AntDesign name="arrowright" size={24} color={theme.colors.black} />
    </ButtonWIContainer>
  )
}

