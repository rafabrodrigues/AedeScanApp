import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { ContainerMapView, StyledMapView } from "./style";
import { Circle, Marker } from "react-native-maps";
import { supabase } from "./../../Supabase/supabaseClient";
import { getLocation } from "../../utils/getLocation";

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

  const fetchLocation = async () => {
    const locationData = await getLocation();
    if (locationData) {
      setLocation(locationData);
      console.log(bairros)
    }
  };

  useEffect(() => {
    fetchBairros();
    fetchLocation();
  }, []);

  if (!location) {
    return <StyledMapView />;
  }

  return (
    <ContainerMapView>
      <StyledMapView
        showsUserLocation={true}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
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
