import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import theme from "../../theme";

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.darkBlue};
  flex: 1;
  align-items: center;
  padding-top: 25%;
`;

export const IdentifierContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const DataUserContainer = styled.View`
  width: 95%;
  gap: 8px;
  margin-top: 5%;
`;

export const style = StyleSheet.create({
  cardStyle: {
    backgroundColor: theme.colors.blackOpacity3,
    borderRadius: 8,
  },
  titleStyle: {
    fontFamily: "Poppins_700Bold",
    color: theme.colors.red,
  },
  subtitleStyle: {
    fontFamily: "Poppins_400Regular",
    color: theme.colors.white,
  },
  logoutText: {
    color: theme.colors.red,
    fontFamily: "Poppins_600SemiBold",
  },
  iconStyle: {
    backgroundColor: "transparent",
  },
});
