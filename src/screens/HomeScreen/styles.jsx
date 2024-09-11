import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #2b2d42;
    flex: 1;
    align-items: center;
`

export const InfoContainer = styled.View`
    align-items: center;
    flex-direction: row;
    padding: 10%;
`

export const PopulationContainer = styled.View`
    align-items: center;    
    padding: 6%;
`

export const Population = styled.Text`
    font-family: 'Poppins_700Bold';
    font-size: 48px;
    color: #8d99ae;
`

export const PopulationDescription = styled.Text`
    font-family: 'Poppins_600SemiBold';
    font-size: 8px;
    color: white;
    margin-top: -15px;
`

export const MapContainer = styled.View`
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 45%;
    background-color: #ffff;
    border-radius: 10px;
    padding: 5%;
`   
export const AlertContainer = styled.View`
    align-items: start;
    flex-direction: column;
`

export const Alert = styled.Text`
    font-family: 'Poppins_700Bold';
    font-size: 48px;
    color: #d90429;
`

export const AlertDescription = styled.Text`
    font-family: 'Poppins_600SemiBold';
    font-size: 8px;
    color: white;
    margin-top: -15px;
`

export const Case = styled.Text`
    font-family: 'Poppins_700Bold';
    font-size: 48px;
    color: #d90429;
`

export const CaseDescription = styled.Text`
    font-family: 'Poppins_600SemiBold';
    font-size: 8px;
    color: white;
    margin-top: -15px;
`

export const MapTitle = styled.Text`
    font-family: 'Poppins_700Bold';
    font-size: 14px;
    color: #d90429;
`
export const MapDescription = styled.Text`
    font-family: 'Poppins_500medium';
    font-size: 10px;
    color: black;
    margin-top: -8px;
    padding-bottom: 10px;
`

export const flex = styled.View`
    display: flex
`