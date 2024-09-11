import React from 'react';
import { View, Text } from 'react-native';
import { Container, PopulationContainer,Population, PopulationDescription } from './styles';

export default function HomeScreen() {
  return (
    <Container>
      <PopulationContainer>
        <Population>170.000</Population>
        <PopulationDescription><Text style={{color:'#8d99ae'}}>População</Text> do estado de Atibaia </PopulationDescription>
      </PopulationContainer>
    </Container>
  );
}