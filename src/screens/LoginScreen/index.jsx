import { Text } from "react-native";
import React from "react";
import {
  Container,
  SubTitleContainer,
  SubTitle,
  ButtonContainer,
} from "./styles";
import { Button, ButtonText, ButtonCadastro } from "../../components/Button";
import { Title } from "../../components/Title";
import { useNavigation } from "@react-navigation/native";
import theme from "../../theme";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <Container>
      <Title>
        AedeS<Text style={{ color: theme.colors.blueGray }}>can</Text>
      </Title>
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
          <ButtonText color={theme.colors.gray}>Não possuo uma conta</ButtonText>
        </ButtonCadastro>
      </ButtonContainer>
    </Container>
  );
}
