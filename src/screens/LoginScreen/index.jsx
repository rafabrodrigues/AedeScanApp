import React from "react";
import {
  Container,
  Logo,
  SubTitleContainer,
  SubTitle,
  ButtonContainer,
  
} from "./styles";
import { Button, ButtonText, ButtonCadastro } from "../../components/Button";

import { useNavigation } from "@react-navigation/native";
import theme from "../../theme";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <Container>
      <Logo
        resizeMode='center'
        source={require("../../../assets/images/aedeScan_title_oficial_png/title_aedescan.png")}
      />
      <SubTitleContainer>
        <SubTitle>
          Uma pequena atitude, pode fazer uma grande diferença na luta contra a
          dengue
        </SubTitle>
      </SubTitleContainer>

      <ButtonContainer>
        <Button onPress={() => navigation.navigate("signInStack")}>
          <ButtonText>Entrar na minha conta</ButtonText>
        </Button>
        <ButtonCadastro
          onPress={() => navigation.navigate("signUpStep1")}
          bgColor={theme.colors.darkBlue}
        >
          <ButtonText color={theme.colors.gray}>
            Não possuo uma conta
          </ButtonText>
        </ButtonCadastro>
      </ButtonContainer>
    </Container>
  );
}
