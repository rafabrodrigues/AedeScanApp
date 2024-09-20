import { Alert } from "react-native";
import React, { useState } from "react";
import {
  Container,
  TitlesContainer,
  LinkContainer,
  InputContainer,
  ButtonContainer,
  CreateAccountContainer,
} from "./styles";
import theme from "../../theme";
import { Title } from "../../components/Title";
import { StyledImage } from "../../components/StyledImage";
import InputSmooth from "../../components/InputSmooth";
import InputPasswordSmooth from "../../components/InputPasswordSmooth";
import { Button, ButtonText } from "../../components/Button";
import { Link, LinkForgetPassword, LinkText } from "../../components/Link";
import { supabase } from "../../Supabase/supabaseClient";
import { useNavigation } from "@react-navigation/native";
import { SubTitle } from "../../components/SubTitle";
import { SpaceBetween } from "../../components/Containers/SpaceBetween";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert("Erro", error.message);
      console.log("Login Error:", error);
    } else {
      navigation.navigate("tabRoutes");
    }
  };
  return (
    <Container>
      <SpaceBetween width="85%">
        <TitlesContainer>
          <Title size="22px">Seja bem vindo!</Title>
          <SubTitle color={theme.colors.blueGray} size="14px">
            Faça login para desbloquear todas as funções do aplicativo
          </SubTitle>
        </TitlesContainer>

        <StyledImage
          source={require("../../../assets/icons/icon.png")}
          resizeMode="cover"
          width="40%"
          height="100%"
        />
      </SpaceBetween>

      <InputContainer>
        <InputSmooth
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        <InputPasswordSmooth
          placeholder="Senha"
          onChangeText={setPassword}
          value={password}
        />
      </InputContainer>

      <LinkContainer>
        <LinkForgetPassword>
          <LinkText color={theme.colors.blueGray}>esqueceu a senha?</LinkText>
        </LinkForgetPassword>
      </LinkContainer>
      <ButtonContainer>
        <Button onPress={handleSignIn}>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </ButtonContainer>

      <CreateAccountContainer>
        <LinkText color={theme.colors.paleGray}>Não possui uma conta?</LinkText>
        <Link onPress={() => navigation.navigate("signUpStep1")}>
          <LinkText color={theme.colors.red}> Crie uma!</LinkText>
        </Link>
      </CreateAccountContainer>
    </Container>
  );
}
