import React from "react";
import {
  Container,
  TitlesContainer,
  FormContainer,
  ButtonContainer,
  LinkContainer,
} from "../styles";
import { SpaceBetween } from "../../../components/Containers/SpaceBetween";
import { Title } from "../../../components/Title";
import { SubTitle } from "../../../components/SubTitle";
import { StyledImage } from "../../../components/StyledImage/index";
import InputSmooth from "../../../components/InputSmooth";
import InputPasswordSmooth from "../../../components/InputPasswordSmooth";
import { ButtonWithRightIcon } from "../../../components/Button";
import { Link, LinkText } from "../../../components/Link";
import { TextError } from "../../../components/TextError";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../../../theme/index";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Alert } from "react-native";

const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("Senha é obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas não conferem")
    .required("Confirmação de senha é obrigatória"),
});

export default function SignUpStep1() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleNext = (data) => {
    navigation.navigate("signUpStep2", {
      email: data.email,
      password: data.password,
    });
  };

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
          source={require("../../../../assets/icons/icon.png")}
          resizeMode="cover"
          width="40%"
          height="100%"
        />
      </SpaceBetween>
      <FormContainer>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <InputSmooth
              placeholder="Email"
              onChangeText={onChange}
              value={value}
              bgColor="#fff"
            />
          )}
        />
        {errors.email && <TextError>{errors.email.message}</TextError>}

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <InputPasswordSmooth
              placeholder="Senha"
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.password && <TextError>{errors.password.message}</TextError>}

        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, value } }) => (
            <InputPasswordSmooth
              placeholder="Confirme sua senha"
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.confirmPassword && (
          <TextError>{errors.confirmPassword.message}</TextError>
        )}
      </FormContainer>
      <ButtonContainer>
        <ButtonWithRightIcon
          text="Próximo"
          fontSize="18px"
          width="60%"
          color={theme.colors.black}
          onPress={handleSubmit(handleNext)}
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
