import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const Mapa = () => {
  const [location, setLocation] = useState(null);

  const bairros = [
    {
      nome: "Jardim do Lago",
      latitude: -23.1312,
      longitude: -46.55848,
      casos: 25,
      situacao: "Moderado",
    },
    {
      nome: "Centro",
      latitude: -23.1137,
      longitude: -46.55686,
      casos: 40,
      situacao: "Grave",
    },
    {
      nome: "Alvinópolis",
      latitude: -23.1316,
      longitude: -46.56832,
      casos: 12,
      situacao: "Controlado",
    },
  ];

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permissão negada");
      return;
    }

    let locationData = await Location.getCurrentPositionAsync({});
    setLocation(locationData.coords);
  };

  useEffect(() => {
    getLocation();
  }, []);

  if (!location) {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        initialRegion={{
          latitude: -23.1171,
          longitude: -46.5565,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {bairros.map((bairro, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: bairro.latitude,
              longitude: bairro.longitude,
            }}
            title={bairro.nome}
            description={`Casos: ${bairro.casos}, Situação: ${bairro.situacao}`}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: "80%",
    height: "50%",
 
  },
});
//mapa
export default Mapa;
