import React from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';

// import { Container } from './styles';

export default function Login() {
  return (
    <View style={styles.container}>
      <View>

      </View>

      <View>
        <View>
          <Text>Email</Text>
          <TextInput></TextInput>
        </View>
        <View>
          <Text>Senha</Text>
          <TextInput></TextInput>
        </View>

      </View>

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