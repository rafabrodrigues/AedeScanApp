import React, { useState, useEffect } from "react";
import { supabase } from "../../Supabase/supabaseClient";
import { getUserId } from "../../utils/getUserId";
import { Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import {
  Container,
  FormContainer,
  HeaderContainer,
  TitleContainer,
  MidiaContainer,
  ButtonContainer,
  MidiaTitleContainer,
  CepContainer,
  PickFileContainer,
  AgroupContainer,
} from "./styles";
import { Title } from "../../components/Title";
import theme from "../../theme";
import { SubTitle } from "../../components/SubTitle";
import InputSmooth from "../../components/InputSmooth";
import {
  ButtonWithLeftIcon,
  ButtonWithRightIcon,
} from "../../components/Button";
import { TextArea } from "../../components/TextArea";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Feather from "@expo/vector-icons/Feather";

export default function DenunciaScreen() {
  const [users, setUsers] = useState([]);
  const [image, setImage] = useState(null);

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cep: "",
      bairro: "",
      rua: "",
      numero: "",
      descricao: "",
    },
  });

  const onSubmit = async (data) => {
    const userId = await getUserId();
    let imageUrl = null;

    if (image) {
      imageUrl = await uploadImage(image);
      if (!imageUrl) {
        console.log("Erro ao salvar imagem", imageUrl);

        return;
      }
    }

    // console.log("Inserting data:", {
    //   cep_denuncia: data.cep,
    //   bairro_denuncia: data.bairro,
    //   rua_denuncia: data.rua,
    //   numero_denuncia: data.numero,
    //   descricao_denuncia: data.descricao,
    //   foto_denuncia: imageUrl,
    //   id_users_denuncia: userId,
    // });

    const { error: denunciaError } = await supabase
      .from("tab_denuncias")
      .insert([
        {
          cep_denuncia: data.cep,
          bairro_denuncia: data.bairro,
          rua_denuncia: data.rua,
          numero_denuncia: data.numero,
          descricao_denuncia: data.descricao,
          foto_denuncia: imageUrl,
          id_users_denuncia: userId,
        },
      ]);

    if (denunciaError) {
      console.log("Supabase error:", denunciaError);
      Alert.alert(
        "Erro ao enviar a denúncia:",
        denunciaError.message || "Erro desconhecido"
      );
    } else {
      Alert.alert("Denúncia enviada com sucesso!");
      reset();
      setImage(null);
    }
  };

  const uploadImage = async (uri) => {
    const fileName = uri.split("/").pop();
    const { data: uploadImage, error } = await supabase.storage
      .from("denuncias_bucket")
      .upload(`denuncias/${fileName}`, {
        uri,
      });
    if (error) {
      Alert.alert("Erro ao fazer upload da imagem:", error.message);
      return null;
    }

    const { data: publicURL, error: urlError } = supabase.storage
      .from("denuncias_bucket")
      .getPublicUrl(uploadImage.path);
    console.log(uploadImage.path);
    if (urlError) {
      Alert.alert("Erro ao obter URL da imagem:", urlError.message);
      return null;
    }

    return publicURL.publicUrl;
  };

  const searchAddress = async (cep) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) {
        Alert.alert("Erro", "CEP não encontrado");
      } else {
        setValue("bairro", response.data.bairro);
        setValue("rua", response.data.logradouro);
      }
    } catch (err) {
      Alert.alert("Erro", "Erro ao buscar o CEP");
    }
  };

  const pickImageFromGallery = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert(
        "Permissão negada",
        "Você precisa conceder a permissão de acesso à galeria."
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert(
        "Permissão negada",
        "Você precisa conceder a permissão de uso da câmera."
      );
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <TitleContainer>
          <Title color={theme.colors.red} size="24px">
            Formulário para denúncia
          </Title>
          <SubTitle size="16px">
            Denuncie uma área que corre o {"\n"}
            risco de proliferação da dengue.
          </SubTitle>
        </TitleContainer>
      </HeaderContainer>
      <FormContainer>
        <CepContainer>
          <Controller
            control={control}
            name="cep"
            rules={{
              required: "CEP é obrigatório",
              pattern: {
                value: /^\d{5}-\d{3}$/,
                message: "O formato deve ser 00000-000",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputSmooth
                placeholder="Digite o CEP:"
                placeholderTextColor="#999"
                width="72%"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                maxLength={9}
                keyboardType="numeric"
                errorMessage={errors.cep?.message}
              />
            )}
          />

          <ButtonWithRightIcon
            text="Pesquisar"
            width="40%"
            color={theme.colors.white}
            bgColor={theme.colors.blackOpacity4}
            paddingVeritcal="12px"
            paddingHorizontal="12px"
            justifyContent="flex-start"
            fontSize="12px"
            gap="8px"
            icon={
              <MaterialIcons
                name="search"
                size={24}
                color={theme.colors.white}
              />
            }
            onPress={() => {
              const cepValue = getValues("cep");
              searchAddress(cepValue);
            }}
          />
        </CepContainer>

        <Controller
          control={control}
          name="bairro"
          rules={{ required: "Bairro é obrigatório" }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputSmooth
              placeholder="Bairro"
              placeholderTextColor="#999"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              errorMessage={errors.bairro?.message}
            />
          )}
        />
        <AgroupContainer>
          <Controller
            control={control}
            name="rua"
            rules={{ required: "Rua é obrigatória" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputSmooth
                placeholder="Rua"
                placeholderTextColor="#999"
                width="50%"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                errorMessage={errors.rua?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="numero"
            rules={{ required: "Número é obrigatório" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputSmooth
                placeholder="Num"
                placeholderTextColor="#999"
                width="47%"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                keyboardType="numeric"
                errorMessage={errors.numero?.message}
              />
            )}
          />
        </AgroupContainer>
      </FormContainer>
      <MidiaContainer>
        <MidiaTitleContainer>
          <Title size="16px" color={theme.colors.white}>
            Mídia
          </Title>
          <SubTitle size="11px">
            Adicione uma foto ou vídeo do local onde foi localizado o foco
            proliferativo da dengue
          </SubTitle>
        </MidiaTitleContainer>
        <PickFileContainer>
          <ButtonWithLeftIcon
            text="Adicionar Imagem"
            width="54%"
            color={theme.colors.white}
            bgColor={theme.colors.blackOpacity4}
            paddingVeritcal="4px"
            justifyContent="flex-start"
            fontSize="12px"
            gap="8px"
            icon={
              <FontAwesome5
                name="file-image"
                size={16}
                color={theme.colors.white}
              />
            }
            onPress={pickImageFromGallery}
          />
          <ButtonWithLeftIcon
            text="Tire uma foto"
            width="45%"
            color={theme.colors.white}
            bgColor={theme.colors.blackOpacity4}
            paddingVeritcal="4px"
            justifyContent="flex-start"
            fontSize="12px"
            gap="8px"
            icon={
              <Feather name="camera" size={16} color={theme.colors.white} />
            }
            onPress={takePhoto} // Tirar foto
          />
        </PickFileContainer>
        {image && (
          <SubTitle size="11px">Imagem selecionada com sucesso!</SubTitle>
        )}
      </MidiaContainer>

      <FormContainer>
        <Controller
          control={control}
          name="descricao"
          rules={{ required: "Descrição é obrigatória" }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextArea
              placeholder="Descrição"
              multiline={true}
              numberOfLines={5}
              maxLength={270}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              errorMessage={errors.descricao?.message}
            />
          )}
        />
      </FormContainer>
      <ButtonContainer>
        <ButtonWithRightIcon
          text="Enviar denúncia"
          bgColor={theme.colors.red}
          color={theme.colors.white}
          width="100%"
          paddingHorizontal="20px"
          onPress={handleSubmit(onSubmit)}
        />
      </ButtonContainer>
    </Container>
  );
}
