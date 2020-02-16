import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import Card from '../components/Card'

// import { Container } from'./styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Page, rendered in React Navigation(TM)</Text>
      <Card />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
