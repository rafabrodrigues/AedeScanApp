import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.darkBlue};
  flex: 1;
  align-items: center;
`;

export const InfoContainer = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 10%;
`;

export const PopulationContainer = styled.View`
  align-items: center;
  padding: 6%;
`;

export const Population = styled.Text`
  font-family: "Poppins_700Bold";
  font-size: 48px;
  color: ${(props) => props.theme.colors.blueGray};
`;

export const PopulationDescription = styled.Text`
  font-family: "Poppins_600SemiBold";
  font-size: 8px;
  color: ${(props) => props.theme.colors.white};
  margin-top: -15px;
`;

export const AlertContainer = styled.View`
  align-items: start;
  flex-direction: column;
`;

export const Alert = styled.Text`
  font-family: "Poppins_700Bold";
  font-size: 48px;
  color: ${(props) => props.theme.colors.red};
`;

export const AlertDescription = styled.Text`
  font-family: "Poppins_600SemiBold";
  font-size: 8px;
  color: ${(props) => props.theme.colors.white};
  margin-top: -15px;
`;

export const Case = styled.Text`
  font-family: "Poppins_700Bold";
  font-size: 48px;
  color: ${(props) => props.theme.colors.red};
`;

export const CaseDescription = styled.Text`
  font-family: "Poppins_600SemiBold";
  font-size: 8px;
  color: ${(props) => props.theme.colors.white};
  margin-top: -15px;
`;

export const MapContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 50%;
  background-color: ${(props) => props.theme.colors.brightDarkBlue};
  border-radius: 10px;
  padding: 3%;
`;

export const MapMainContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.gray};
  border-radius: 16px;
  padding: 5%;
`;

export const MapTitle = styled.Text`
  font-family: "Poppins_700Bold";
  font-size: 16px;
  color: ${(props) => props.theme.colors.red};
  text-align: center;
`;
export const MapDescription = styled.Text`
  font-family: "Poppins_500Medium";
  font-size: 10px;
  color: ${(props) => props.theme.colors.black};
  margin-top: -8px;
  margin-bottom: -4px;
  padding-bottom: 10px;
  text-align: center;
`;

export const flex = styled.View`
  display: flex;
`;
