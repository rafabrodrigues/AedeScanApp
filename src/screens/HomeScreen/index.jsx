import React from "react";
import { View, Text } from "react-native";
import {
  Container,
  PopulationContainer,
  Population,
  PopulationDescription,
  InfoContainer,
  AlertContainer,
  Alert,
  AlertDescription,
  Case,
  CaseDescription,
  MapContainer,
  MapMainContainer,
  MapTitle,
  MapDescription,
} from "./styles";

import Mapa from "../../components/Mapa";
export default function HomeScreen() {
  return (
    <Container>
      <InfoContainer>
        <PopulationContainer>
          <Population>171.000</Population>
          <PopulationDescription>
            <Text style={{ color: "#8d99ae" }}>População</Text> do estado de
            Atibaia{" "}
          </PopulationDescription>
        </PopulationContainer>
        <AlertContainer>
          <Alert>4</Alert>
          <AlertDescription>
            Nivel de <Text style={{ color: "#d90429" }}>alerta</Text>
          </AlertDescription>
          <Case>114</Case>
          <CaseDescription>
            Numero de <Text style={{ color: "#d90429" }}>casos</Text> semanais
          </CaseDescription>
        </AlertContainer>
      </InfoContainer>
      <MapContainer>
        <MapMainContainer>
          <MapTitle>Mapa das areas em foco proliferativo!</MapTitle>
          <MapDescription>
            Consulte o mapa para saber se voce esta em uma area de risco.
          </MapDescription>
          <Mapa />
        </MapMainContainer>
      </MapContainer>
    </Container>
  );
}
