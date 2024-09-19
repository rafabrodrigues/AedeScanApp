import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { ContainerMapView, StyledMapView } from "./style";
import { Circle, Marker } from "react-native-maps";
import * as Location from "expo-location";

import { supabase } from "./../../Supabase/supabaseClient";

const Mapa = () => {
  const [bairros, setBairro] = useState([]);
  const [location, setLocation] = useState(null);

  const fetchBairros = async () => {
    const { data, error } = await supabase.from("tab_bairros").select();

    if (error) {
      alert("Erro ao buscar dados dos bairros:", error);
      return;
    }
    setBairro(data);
  };

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permissão negada");
      return;
    }

    let locationData = await Location.getCurrentPositionAsync({});
    console.log(locationData);
    setLocation(locationData.coords);
  };

  useEffect(() => {
    fetchBairros();
    getLocation();
  }, []);

  if (!location) {
    return <StyledMapView />;
  }

  return (
    <ContainerMapView>
      <StyledMapView
        showsUserLocation={true}
        initialRegion={{
          latitude: -23.1171,
          longitude: -46.5565,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {bairros.map((bairro, index) => (
          <View key={index}>
            <Marker
              coordinate={{
                latitude: bairro.latitude_bairro,
                longitude: bairro.longitude_bairro,
              }}
              title={bairro.nome_bairro}
              description={`Casos: ${bairro.casos_bairro}, Situação: ${bairro.situacao_bairro}`}
            />
            <Circle
              center={{
                latitude: bairro.latitude_bairro,
                longitude: bairro.longitude_bairro,
              }}
              radius={600}
              strokeWidth={2}
              strokeColor="rgba(0, 0, 255, 0.5)"
              fillColor="rgba(0, 0, 255, 0.2)"
            />
          </View>
        ))}
      </StyledMapView>
    </ContainerMapView>
  );
};

export default Mapa;
