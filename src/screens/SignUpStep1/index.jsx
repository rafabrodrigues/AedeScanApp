import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import {
  MainContainer,
  ButtonContainer,
  Container,
  InputContainer,
  Images,
} from "./styles";
import { NextButton, NextButtonText } from "../../components/Button";
import InputSmooth from "../../components/InputSmooth";
import { useNavigation } from "@react-navigation/native";

export default function SignUpStep1() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();

  // Função para lidar com o processo de inscrição
  // const handleSignUp = async () => {
  //   // Adicione a lógica de inscrição aqui, se necessário
  //   // const { data: { session }, error } = await supabase.auth.signUp({
  //   //   email: email,
  //   //   password: password,
  //   //   options: {
  //   //     data: {
  //   //       full_name: fullName,
  //   //       cpf: cpf,
  //   //       avatar_url: avatarUrl
  //   //     },
  //   //   },
  //   // });

  //   // if (error) Alert.alert(error.message);
  //   // if (!session)
  //   //   Alert.alert("Please check your inbox for email verification!");
  // };

  return (
    <Container>
      <MainContainer>
        <Images
          resizeMode="center"
          source={require("../../../assets/images/aedeScan_title_oficial_png/title_aedescan.png")}
        />
        <InputContainer>
          <InputSmooth
            placeholder="Nome Completo"
            onChangeText={setFullName}
            value={fullName}
          />
          <InputSmooth
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
          />
          <InputSmooth
            placeholder="Senha"
            onChangeText={setPassword}
            value={password}
          />
          <InputSmooth
            placeholder="Confirme sua senha"
            onChangeText={setConfirmPassword}
            value={confirmPassword}
          />
        </InputContainer>
      </MainContainer>
      <ButtonContainer>
        <NextButton bgColor="transparent" onPress={() => navigation.navigate('signUpStep2')}>
          <NextButtonText color="white">Próximo</NextButtonText>
        </NextButton>
      </ButtonContainer>
    </Container>
  );
}
