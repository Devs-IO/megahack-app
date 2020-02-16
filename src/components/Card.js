import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styled from "styled-components/native";

import visa from "../assets/cards/visa.png";
import master from "../assets/cards/mastercard.svg";
import eye from "../assets/icons/olho.svg";

const cardtypes = { visa, master };
export default function Card({ type, end, limit }) {
  return (
    <Container>
      <CardContainer>
        <Image style={styles.firstLine} source={cardtypes[type]} />
        <View style={styles.firstLine} />
        <Image style={styles.firstLine} source={eye} />
        <CardNumber>**** **** **** {end}</CardNumber>
      </CardContainer>
      <Limit>
        <TextSaldo>R$ {limit}</TextSaldo>
        <SmallText> de limite</SmallText>
      </Limit>
    </Container>
  );
}

const styles = StyleSheet.create({
  firstLine: { flex: 1, height: 20 }
});

const Container = styled.View`
  width: 136px;
  border-radius: 10px;
  background-color: #f2f2f2;
`;

const CardContainer = styled.View`
  display: flex;
  flex-wrap: wrap;
  height: 70px;
  background-color: #347474;
  border-radius: 10px;
  padding: 12px;
`;

const CardNumber = styled.View`
  padding-top: 10px;
  flex-basis: 100%;
  font-size: 12px;
  color: white;
`;

const TextSaldo = styled.View`
  font-size: 18px;
  font-weight: bold;
`;

const SmallText = styled.View`
  font-size: 14px;
`;

const Limit = styled.View`
  align-content: flex-end;

  padding: 0px 8px;
`;
