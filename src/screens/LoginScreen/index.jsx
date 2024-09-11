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

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <Container>
      <Title>
        AedeS<Text style={{ color: "#8d99ae" }}>can</Text>
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
          bgColor="#2b2d42"
        >
          <ButtonText color="#edf2f4">Não possuo uma conta</ButtonText>
        </ButtonCadastro>
      </ButtonContainer>
    </Container>
  );
}
