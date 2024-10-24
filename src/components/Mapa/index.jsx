import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { ContainerMapView, StyledMapView } from "./style";
import { Circle, Marker } from "react-native-maps";
import { supabase } from "./../../Supabase/supabaseClient";
import { getLocation } from "../../utils/getLocation";
import Loading from "../../screens/Loading";

const Mapa = () => {
  const [bairros, setBairro] = useState([]);
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const fetchBairros = async () => {
    setIsLoading(true);
    const { data, error } = await supabase.from("tab_bairros").select();

    if (error) {
      alert("Erro ao buscar dados dos bairros:", error);
      setIsLoading(false);
      return;
    }
    setBairro(data);
    setIsLoading(false);
  };

  const fetchLocation = async () => {
    const locationData = await getLocation();
    if (locationData) {
      setLocation(locationData);
    }
  };

  useEffect(() => {
    fetchBairros();
    fetchLocation();
  }, [0]);

  if (isLoading) {
    return <Loading />;
  }
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
              strokeColor={
                bairro.casos_bairro > 30
                  ? "#FF0000"
                  : bairro.casos_bairro < 15
                  ? "#008000"
                  : "#EEAD2D"
              }
              fillColor={
                bairro.casos_bairro > 30
                  ? "#ff00003d"
                  : bairro.casos_bairro < 15
                  ? "#0080004c"
                  : "#eeae2d65"
              }
            />
          </View>
        ))}
      </StyledMapView>
    </ContainerMapView>
  );
};

export default Mapa;
