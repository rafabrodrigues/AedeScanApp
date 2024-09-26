import React, { useState } from "react";
import {
  Container,
  TitlesContainer,
  FormContainer,
  NameContainer,
  ButtonContainer,
  LinkContainer,
} from "./styles";
import { SpaceBetween } from "../../components/Containers/SpaceBetween";
import { Title } from "../../components/Title";
import { SubTitle } from "../../components/SubTitle";
import { StyledImage } from "./../../components/StyledImage/index";
import InputSmooth from "../../components/InputSmooth";
import InputPasswordSmooth from "../../components/InputPasswordSmooth";
import { ButtonWithIcon } from "../../components/Button";
import { Link, LinkText } from "../../components/Link";
import { useNavigation } from "@react-navigation/native";
import { theme } from "./../../theme/index";
export default function SignUpStep1() {
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

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
      <SpaceBetween width="85%">
        <TitlesContainer>
          <Title size="22px">Seja bem vindo!</Title>
          <SubTitle color={theme.colors.blueGray} size="12.8px">
            Cadastre-se! Sua participação faz toda a diferença para a causa.
            Faça Parte!
          </SubTitle>
        </TitlesContainer>

        <StyledImage
          source={require("../../../assets/icons/icon.png")}
          resizeMode="cover"
          width="40%"
          height="100%"
        />
      </SpaceBetween>
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
            width="58%"
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
        <InputPasswordSmooth
          placeholder="Senha"
          onChangeText={setPassword}
          value={password}
        />
        <InputPasswordSmooth
          placeholder="Confirme sua senha"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
        />
        <InputSmooth placeholder="CPF" onChangeText={setCpf} value={cpf} />
        <InputSmooth
          placeholder="Data de Nascimento"
          onChangeText={setDateOfBirth}
          value={dateOfBirth}
        />
      </FormContainer>
      <ButtonContainer>
        <ButtonWithIcon
          text="Cadastrar"
          fontSize="18px"
          width="60%"
          color={theme.colors.black}
        />
      </ButtonContainer>
      <LinkContainer>
        <LinkText color={theme.colors.paleGray}>Já possui uma conta?</LinkText>
        <Link onPress={() => navigation.navigate("signInStack")}>
          <LinkText color={theme.colors.red}> Faça login!</LinkText>
        </Link>
      </LinkContainer>
    </Container>
  );
}
