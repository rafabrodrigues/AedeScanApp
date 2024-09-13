import React, { useRef, useState } from "react";

import {
  Container,
  MainContainer,
  SearchContainer,
  SearchButtonIcon,
  SearchInput,
  SwitchContainer,
  Switch,
  SwitchText,
  SpaceBetween,
  SmallButton,
  SmallButtonText,
  NotificationContainer,
  Notification,
  NotificationDescription,
  NotificationButton,
  NotificationButtonText,
} from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../theme";
import { View, Text } from "react-native";
export default function AvisoScreen() {
  const searchRef = useRef(null);

  const handleSearchPress = () => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => previousState);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const notificationText =
    "Você foi localizado em uma área de risco! Por favor, evite a área e siga as instruções de segurança.";

  const truncatedText = truncateText(notificationText, 200);

  return (
    <Container contentContainerStyle={{ alignItems: "center" }}>
      <MainContainer>
        <SearchContainer>
          <SearchButtonIcon onPress={handleSearchPress}>
            <AntDesign name="search1" size={24} color={theme.colors.white} />
          </SearchButtonIcon>
          <SearchInput
            ref={searchRef}
            placeholder="Pesquisar..."
            placeholderTextColor={theme.colors.gray}
          />
        </SearchContainer>
        <SpaceBetween>
          <SwitchContainer>
            <Switch
              trackColor={{ false: "#111", true: "#111" }}
              thumbColor={
                isEnabled ? theme.colors.darkBlue : theme.colors.darkBlue2
              }
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <SwitchText>Somente não lidos</SwitchText>
          </SwitchContainer>
          <SmallButton>
            <Ionicons name="filter" size={22} color={theme.colors.gray} />
            <SmallButtonText color={theme.colors.gray}>Filtros</SmallButtonText>
          </SmallButton>
        </SpaceBetween>
        <NotificationContainer>
          <Notification>
            <NotificationDescription>{truncatedText}</NotificationDescription>
            <NotificationButton>
              <NotificationButtonText color={theme.colors.white}>
                Abrir
              </NotificationButtonText>
            </NotificationButton>
          </Notification>
          <Notification>
            <NotificationDescription>{truncatedText}</NotificationDescription>
            <NotificationButton>
              <NotificationButtonText color={theme.colors.white}>
                Abrir
              </NotificationButtonText>
            </NotificationButton>
          </Notification>
        </NotificationContainer>
      </MainContainer>
    </Container>
  );
}
