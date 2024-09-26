import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import theme from "../../theme";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

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
  background-color: ${(props) =>
    props.bgColor || props.theme.colors.blackOpacity};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: ${(props) => props.width || "50%"};
  padding-top: ${(props) => props.paddingVeritcal || "10px"};
  padding-bottom: ${(props) => props.paddingVeritcal || "10px"};
  border-radius: 4px;
`;

export const ButtonWithIcon = ({
  text,
  onPress,
  width,
  fontSize,
  bgColor,
  color,
}) => {
  return (
    <ButtonWIContainer bgColor={bgColor} onPress={onPress} width={width}>
      <ButtonText color={color} fontSize={fontSize}>
        {text}
      </ButtonText>
      <FontAwesome6 name="arrow-right-long" size={24} color={color} />
    </ButtonWIContainer>
  );
};
