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

const ButtonWithIconContainer = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.bgColor || props.theme.colors.blackOpacity3};
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent || "space-between"};
  align-items: center;
  width: ${(props) => props.width || "50%"};
  padding-top: ${(props) => props.paddingVeritcal || "10px"};
  padding-bottom: ${(props) => props.paddingVeritcal || "10px"};
  padding-right: ${(props) => props.paddingHorizontal || "10px"};
  padding-left: ${(props) => props.paddingHorizontal || "10px"};
  border-radius: 4px;
  gap: ${(props) => props.gap || "4px"};
`;

export const ButtonWithLeftIcon = ({
  text,
  onPress,
  width,
  fontSize,
  bgColor,
  color,
  paddingVeritcal,
  paddingHorizontal,
  justifyContent,
  gap,
  icon,
}) => {
  return (
    <ButtonWithIconContainer
      bgColor={bgColor}
      onPress={onPress}
      width={width}
      paddingVeritcal={paddingVeritcal}
      paddingHorizontal={paddingHorizontal}
      justifyContent={justifyContent}
      gap={gap}
    >
      {icon || <FontAwesome6 name="arrow-right-long" size={24} color={color} />}
      <ButtonText color={color} fontSize={fontSize}>
        {text}
      </ButtonText>
    </ButtonWithIconContainer>
  );
};

export const ButtonWithRightIcon = ({
  text,
  onPress,
  width,
  fontSize,
  bgColor,
  color,
  paddingVeritcal,
  paddingHorizontal,
  justifyContent,
  gap,
  icon,
}) => {
  return (
    <ButtonWithIconContainer
      bgColor={bgColor}
      onPress={onPress}
      width={width}
      paddingVeritcal={paddingVeritcal}
      paddingHorizontal={paddingHorizontal}
      justifyContent={justifyContent}
      gap={gap}
    >
      <ButtonText color={color} fontSize={fontSize}>
        {text}
      </ButtonText>
      {icon || <FontAwesome6 name="arrow-right-long" size={24} color={color} />}
    </ButtonWithIconContainer>
  );
};
