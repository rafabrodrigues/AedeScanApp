import React, { useState } from "react";
import {
  Container,
  FormContainer,
  NameContainer,
  ButtonContainer,
  LinkContainer,
  AvatarContainer,
} from "../styles";
import PickImage from "../../../components/PickImage";
import UploadAvatar from "./../../../components/UploadAvatar/index.";
import { SubTitle } from "../../../components/SubTitle";
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
import { supabase } from "../../../Supabase/supabaseClient";
const schema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  secondName: yup.string().required("Sobrenome é obrigatório"),
  cpf: yup
    .string()
    .required("CPF é obrigatório")
    .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido"),
  dateOfBirth: yup
    .string()
    .required("Data de nascimento é obrigatória")
    .matches(/^\d{2}\/\d{2}\/\d{4}$/, "Data de nascimento inválida"),
});

export default function SignUpStep2() {
  const navigation = useNavigation();
  const route = useRoute();
  const { email, password } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(null);

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
    try {
      const { name, secondName, cpf, dateOfBirth } = data;
      const fullName = `${name} ${secondName}`;

      const { user, error: signUpError } = await signUpUser({
        email: email,
        password: password,
      });

      if (signUpError) {
        return showAlert("Erro", signUpError.message);
      }

      let imageUrl = null;
      if (image) {
        imageUrl = await uploadAvatar(image);
        if (!imageUrl) {
          return console.log("Erro ao salvar imagem");
        }
      }

      const { error: insertError } = await insertUserData({
        id: user.id,
        fullName,
        email,
        imageUrl,
        cpf,
        dateOfBirth,
      });

      if (insertError) {
        return showAlert("Erro", insertError.message);
      }

      showAlert("Sucesso", "Verifique seu e-mail para confirmar o cadastro!");
      navigation.navigate("signInStack");
    } catch (error) {
      console.error("Erro no processo de cadastro:", error);
      showAlert("Erro", "Ocorreu um erro inesperado.");
    }
  };

  const signUpUser = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    return { user: data?.user, error };
  };

  const insertUserData = async ({
    id,
    fullName,
    email,
    imageUrl,
    cpf,
    dateOfBirth,
  }) => {
    const { error } = await supabase.from("tab_users").insert([
      {
        id_users: id,
        name_users: fullName,
        email_users: email,
        avatar_url_users: imageUrl,
        cpf_users: cpf,
        date_birth_users: dateOfBirth,
      },
    ]);

    return { error };
  };

  const uploadAvatar = async (uri) => {
    try {
      const fileName = uri.split("/").pop();

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("avatars_bucket")
        .upload(`denuncias/${fileName}`, { uri });

      if (uploadError) {
        throw new Error(uploadError.message);
      }

      const { data: urlData, error: urlError } = await supabase.storage
        .from("avatars_bucket")
        .getPublicUrl(uploadData.path);

      if (urlError) {
        throw new Error(urlError.message);
      }

      return urlData.publicUrl;
    } catch (error) {
      console.error("Erro no upload do avatar:", error);
      return null;
    }
  };

  const showAlert = (title, message) => {
    Alert.alert(title, message);
  };

  return (
    <Container>
      <PickImage
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        setImage={setImage}
        setModalVisible={setModalVisible}
      />
      <FormContainer>
        <AvatarContainer>
          <UploadAvatar onPress={() => setModalVisible(true)} image={image} />
          {image && (
            <SubTitle size="11px">Imagem selecionada com sucesso!</SubTitle>
          )}
        </AvatarContainer>

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
