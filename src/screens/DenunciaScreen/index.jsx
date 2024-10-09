import React from "react";
import { Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import {
  Container,
  FormContainer,
  HeaderContainer,
  TitleContainer,
  MidiaContainer,
  ButtonContainer,
  MidiaTitleContainer,
  CepContainer,
} from "./styles";
import { Title } from "../../components/Title";
import theme from "../../theme";
import { SubTitle } from "../../components/SubTitle";
import { Input } from "../../components/Input";
import {
  ButtonWithLeftIcon,
  ButtonWithRightIcon,
} from "../../components/Button";
import { TextArea } from "../../components/TextArea";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { TextError } from "../../components/TextError";

export default function DenunciaScreen() {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
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
            rules={{ required: "CEP é obrigatório" }}
            render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Digite o CEP:"
                  placeholderTextColor="#999"
                  width="60%"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  keyboardType='numeric'
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
              handleSubmit((data) => searchAddress(data.cep))();
            }}
          />
        </CepContainer>
        {errors.cep && <TextError>{errors.cep.message}</TextError>}
        <Controller
          control={control}
          name="bairro"
          rules={{ required: "Bairro é obrigatório" }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Input
                placeholder="Bairro:"
                placeholderTextColor="#999"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
              {errors.bairro && <TextError>{errors.bairro.message}</TextError>}
            </>
          )}
        />

        <Controller
          control={control}
          name="rua"
          rules={{ required: "Rua é obrigatória" }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Input
                placeholder="Rua:"
                placeholderTextColor="#999"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
              {errors.rua && <TextError>{errors.rua.message}</TextError>}
            </>
          )}
        />
      </FormContainer>
      <MidiaContainer>
        <MidiaTitleContainer>
          <Title size="16px" color={theme.colors.white}>
            Mídia
          </Title>
          <SubTitle size="8px">
            Adicione uma foto ou vídeo do local onde foi localizado o foco
            proliferativo da dengue
          </SubTitle>
        </MidiaTitleContainer>
        <ButtonWithLeftIcon
          text="Adicionar Foto"
          width="45%"
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
        />
      </MidiaContainer>
      <FormContainer>
        <Controller
          control={control}
          name="descricao"
          rules={{ required: "Descrição é obrigatória" }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <TextArea
                multiline={true}
                numberOfLines={5}
                maxLength={270}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
              {errors.descricao && (
                <TextError>{errors.descricao.message}</TextError>
              )}
            </>
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
          onPress={handleSubmit(onSubmit)} // Submete o formulário
        />
      </ButtonContainer>
    </Container>
  );
}
