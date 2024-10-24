import * as Location from "expo-location";

export const getLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    console.log("Permissão negada");
    return null;
  }

  let locationData = await Location.getCurrentPositionAsync({});
  return locationData.coords;
};
