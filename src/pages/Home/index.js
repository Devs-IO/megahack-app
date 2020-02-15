import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import { Container } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Page, rendered in React Navigation(TM)</Text>
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
