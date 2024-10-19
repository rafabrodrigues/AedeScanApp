import React from "react";
import {
  Container,
  FormContainer,
  NameContainer,
  ButtonContainer,
  LinkContainer,
} from "../styles";
import InputSmooth from "../../../components/InputSmooth";
import InputMaskSmooth from "../../../components/InputMaskSmooth";
import { ButtonWithRightIcon } from "../../../components/Button";
import { Link, LinkText } from "../../../components/Link";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Alert } from "react-native";
import { theme } from "../../../theme/index";
import { StyledImage } from "../../../components/StyledImage/index";
import { supabase } from "../../../Supabase/supabaseClient";

const schema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  secondName: yup.string().required("Sobrenome é obrigatório"),
  cpf: yup
    .string()
    .required("CPF é obrigatório")
    .matches(/^\d{11}$/, "CPF inválido"),
  dateOfBirth: yup
    .string()
    .required("Data de nascimento é obrigatória")
    .matches(/^\d{2}\/\d{2}\/\d{4}$/, "Data de nascimento inválida"),
});

export default function SignUpStep2() {
  const navigation = useNavigation();
  const route = useRoute();
  const { email, password } = route.params;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      secondName: "",
      cpf: "",
      dateOfBirth: "",
    },
  });

  const handleSignUp = async (data) => {
    const { name, secondName, cpf, dateOfBirth } = data;
    const fullName = `${name} ${secondName}`;
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          fullName,
          cpf,
          dateOfBirth,
        },
      },
    });

    if (error) {
      Alert.alert("Erro", error.message);
    } else {
      Alert.alert("Sucesso", "Verifique seu e-mail para confirmar o cadastro!");
      navigation.navigate("signInStack");
    }
  };

  return (
    <Container>
      <FormContainer>
        <NameContainer>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <InputSmooth
                placeholder="Nome"
                onChangeText={onChange}
                value={value}
                bgColor="#fff"
                width="40%"
                errorMessage={errors.name?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="secondName"
            render={({ field: { onChange, value } }) => (
              <InputSmooth
                placeholder="Sobrenome"
                onChangeText={onChange}
                value={value}
                bgColor="#000"
                width="58%"
                errorMessage={errors.secondName?.message}
              />
            )}
          />
        </NameContainer>

        <Controller
          control={control}
          name="cpf"
          render={({ field: { onChange, value } }) => (
            <InputMaskSmooth
              placeholder="CPF"
              onChangeText={onChange}
              value={value}
              bgColor="#fff"
              keyboardType="numeric"
              type="cpf"
              maxLength={14}
              errorMessage={errors.cpf?.message}
            />
          )}
        />
        

        <Controller
          control={control}
          name="dateOfBirth"
          render={({ field: { onChange, value } }) => (
            <InputMaskSmooth
              placeholder="Data de Nascimento"
              onChangeText={onChange}
              value={value}
              bgColor="#fff"
              keyboardType="numeric"
              maxLength={10}
              type="datetime"
              errorMessage={errors.dateOfBirth?.message}
            />
          )}
        />
        
      </FormContainer>
      <ButtonContainer>
        <ButtonWithRightIcon
          text="Cadastrar"
          fontSize="18px"
          width="60%"
          color={theme.colors.black}
          onPress={handleSubmit(handleSignUp)}
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
