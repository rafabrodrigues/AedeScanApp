import styled from "styled-components/native"

export const DenunciaContainer = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: -8px;
    background-color:${props => props.theme.colors.red};
    width: 62px;
    height: 62px;
    border-radius: 360px;
`

export const TextDenuncia = styled.Text`
    color:${props => props.theme.colros.white};
    font-family: 'Poppins_400Regular';
    font-size: 8px;
`
