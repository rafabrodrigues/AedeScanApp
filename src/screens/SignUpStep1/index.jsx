import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import {
  MainContainer,
  ButtonContainer,
  Container,
  FormContainer,
  NameContainer,
  NameInputSmooth,
  Images,
} from "./styles";
import { Button, ButtonText } from "../../components/Button";
import InputSmooth from "../../components/InputSmooth";
import { useNavigation } from "@react-navigation/native";
import { theme } from "./../../theme/index";
export default function SignUpStep1() {
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();

  // const handleSignUp = async () => {
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
        <FormContainer>
          <NameContainer>
            <InputSmooth
              placeholder="Nome"
              onChangeText={setName}
              value={name}
              width="40%"
              bgColor="#fff"
            />
            <InputSmooth
              width="55%"
              placeholder="Sobrenome"
              onChangeText={setSecondName}
              value={secondName}
              bgColor="#000"
            />
          </NameContainer>

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
        </FormContainer>
      </MainContainer>
      <ButtonContainer>
        <Button
          bgColor={theme.colors.gray}
          onPress={() => navigation.navigate("signUpStep2")}
        >
          <ButtonText color={theme.colors.blueGray}>Próximo</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
}
