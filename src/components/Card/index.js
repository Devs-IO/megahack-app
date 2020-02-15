import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import visa from '../../assets/cards/visa';

export default function Card(props) {
  return (
    <View style={styles.card}>
      <Image source={visa}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 120,
    height: 70,
    backgroundColor: 'blue',
    borderRadius: 5
  }
});
