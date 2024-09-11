import styled from "styled-components/native";

export const Link = styled.TouchableOpacity`
    background-color:transparent;
    align-self: flex-end;
`

export const LinkText = styled.Text`
    color: ${props => props.color || '#fff'};
    font-size: 12.5px;
    font-family: 'Poppins_600SemiBold';
    text-decoration-line: underline;
`


