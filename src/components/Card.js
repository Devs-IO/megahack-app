import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styled from "styled-components/native";

import visa from "../assets/cards/visa.png";
import master from "../assets/cards/mastercard.svg";
import eye from "../assets/icons/olho.svg";

const cardtypes = {
  visa,
  master
};

const Container = styled.View`
  width: 136px;
  border-radius: 10px;
  background-color: #f2f2f2;
`;

const CardContainer = styled.View`
  display: grid;
  grid-template-columns: 30px auto 20px;
  grid-template-rows: 20px auto 25px;
  height: 70px;
  background-color: #347474;
  border-radius: 10px;
  padding: 8px;
`;

const Limit = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: flex-end;

  padding: 0px 8px;
`;

export default function Card({ type, end, limit }) {
  return (
    <Container>
      <CardContainer>
        <Image source={cardtypes[type]} />
        <Image source={eye} />
        <Text>**** **** **** {end}</Text>
      </CardContainer>
      <Limit>
        <Text>R$ {limit}</Text>
        <Text> de limite</Text>
      </Limit>
    </Container>
  );
}
