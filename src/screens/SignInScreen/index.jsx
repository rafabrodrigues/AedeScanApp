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
import { Button, ButtonText, ButtonWithIcon } from "../../components/Button";
import { Link, LinkForgetPassword, LinkText } from "../../components/Link";
import { SubTitle } from "../../components/SubTitle";
import { SpaceBetween } from "../../components/Containers/SpaceBetween";
import { Controller, useForm } from "react-hook-form";

import { supabase } from "../../Supabase/supabaseClient";
import { useNavigation } from "@react-navigation/native";
import { TextError } from "../../components/TextError";
export default function SignInScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  const navigation = useNavigation();

  const handleSignIn = async (data) => {
    const { email, password } = data;
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
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
        <Controller
          control={control}
          name="email"
          rules={{
            required: "O email é obrigatório",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Email inválido",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputSmooth
              placeholder="Email"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
        {errors.email && <TextError>{errors.email.message}</TextError>}

        <Controller
          control={control}
          name="password"
          rules={{
            required: "A senha é obrigatória",
            minLength: {
              value: 6,
              message: "A senha deve ter pelo menos 6 caracteres",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputPasswordSmooth
              placeholder="Senha"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
        {errors.password && <TextError>{errors.password.message}</TextError>}
      </InputContainer>

      <LinkContainer>
        <LinkForgetPassword>
          <LinkText color={theme.colors.blueGray}>esqueceu a senha?</LinkText>
        </LinkForgetPassword>
      </LinkContainer>
      <ButtonContainer>
        <ButtonWithIcon
          text="Login"
          fontSize="18px"
          onPress={handleSubmit(handleSignIn)}
          color={theme.colors.black}
        />
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
