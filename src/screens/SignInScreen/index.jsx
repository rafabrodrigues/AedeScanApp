import {Alert} from "react-native";
import React, { useState } from "react";
import {
  Container,
  Image,
  LinkContainer,
  InputContainer,
  ButtonContainer,
} from "./styles";

import InputSmooth from "../../components/InputSmooth";
import { Button, ButtonText } from "../../components/Button";
import { Link, LinkText } from "../../components/Link";
import { supabase } from "../../Supabase/supabaseClient";
import { useNavigation } from "@react-navigation/native";
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
      <Image
        resizeMode="center"
        source={require("../../../assets/images/aedeScan_title_oficial_png/title_aedescan.png")}
      />
      <InputContainer>
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
      </InputContainer>

      <LinkContainer>
        <Link>
          <LinkText color='#8d99ae'>esqueceu a senha?</LinkText>
        </Link>
      </LinkContainer>
      <ButtonContainer>
        <Button onPress={handleSignIn}>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
}
