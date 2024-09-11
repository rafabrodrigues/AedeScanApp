import styled from "styled-components/native";
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
const BackButtonContainer = styled.TouchableOpacity`
    background-color: ${props => props.theme.colors.darkBlue};
    align-items: center;
    justify-content: center;
    padding-left: 10px;
`

const BackButtonIcon = styled.Text`

`

const BackButton = ({onPress}) => {
  return (
    <BackButtonContainer onPress={onPress}>
        <BackButtonIcon><Ionicons name="arrow-back" size={24} color="white"/></BackButtonIcon>
    </BackButtonContainer>
  )
}

export default BackButton