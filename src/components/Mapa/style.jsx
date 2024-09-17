import styled from "styled-components/native";
import MapView from "react-native-maps";

export const ContainerMapView = styled.View`
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  height: 80%;
`;

export const StyledMapView = styled(MapView)`
  width: 100%;
  height: 100%;
`;
