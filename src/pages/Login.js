import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

// import { Container } from './styles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.divSuperior}>
        <Text style={styles.TextLogin}>Login</Text>
      </View>
      <View style={styles.retanguloUm}></View>
      <View style={styles.retanguloDois}></View>
      <View style={styles.retanguloTres}></View>
      <View style={styles.retanguloQuatro}>
        <View style={styles.ViewInput}>
          <Text style={styles.TextInput}>Email</Text>
          <TextInput
            style={styles.Input}
            keyboardType="email-address"
            maxLength={30}
            autoCapitalize="none"
            value={email}
            onChangeText={(setEmail)}
          ></TextInput>
          <View style={styles.ViewFina}></View>
        </View>

        <View style={styles.ViewInput}>
          <Text style={styles.TextInput}>Senha</Text>
          <TextInput
            style={styles.Input}
            secureTextEntry={true}
            autoCapitalize="none"
            value={password}
            onChangeText={setPassword}
          ></TextInput>
          <View style={styles.ViewFina}></View>
        </View>

        <TouchableOpacity style={styles.Botao} onPress={login}>
          <Text style={styles.TextEntrar}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.BotaoCadastrar}
          onPress={() => navigation.navigate("NewAccount")}
        >
          <Text style={styles.TextCadastrar}>Cadastra-se</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.TextCadastrar}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#EFEFEF",
    display: "flex",
    flexDirection: "column"
  },
  divSuperior: {
    width: "100%",
    height: "60%",
    backgroundColor: "#323232",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0
  },
  retanguloUm: {
    width: "70%",
    height: "20%",
    backgroundColor: "#EFEFEF",
    display: "flex",
    position: "absolute",
    transform: [
      { rotateX: "20deg" },
      { rotateZ: "2.3rad" },
      { rotateY: "10deg" }
    ],
    marginLeft: 250,
    marginTop: 250,
    flexDirection: "column",
    zIndex: 1
  },
  retanguloDois: {
    width: "50%",
    height: "20%",
    backgroundColor: "#EFEFEF",
    display: "flex",
    position: "absolute",
    marginTop: 300,
    marginLeft: 115,
    transform: [
      { rotateX: "20deg" },
      { rotateZ: "0.45rad" },
      { rotateY: "10deg" }
    ],
    zIndex: 2
  },
  retanguloTres: {
    width: "60%",
    height: "20%",
    backgroundColor: "#EFEFEF",
    display: "flex",
    position: "absolute",
    marginTop: 320,
    marginLeft: -17,
    transform: [
      { rotateX: "20deg" },
      { rotateZ: "2.5rad" },
      { rotateY: "10deg" }
    ],
    zIndex: 2
  },
  retanguloQuatro: {
    width: "100%",
    height: "60%",
    backgroundColor: "#EFEFEF",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 390,
    position: "absolute",
    zIndex: 2
  },
  TextLogin: {
    color: "#FFF",
    fontSize: 36,
    fontWeight: "700",
    marginBottom: 100
  },
  ViewInput: {
    width: "70%",
    height: "12%",
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: 40,
    zIndex: 4
  },
  Input: {
    width: "100%",
    height: "80%"
  },
  TextInput: {
    color: "#323232",
    fontSize: 26,
    fontWeight: "700"
  },
  ViewFina: {
    width: "100%",
    height: "5%",
    backgroundColor: "#323232"
  },
  Botao: {
    width: "70%",
    height: "12%",
    backgroundColor: "#347474",
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 4
  },
  TextEntrar: {
    color: "#ffff",
    fontSize: 20,
    fontWeight: "700"
  },
  BotaoCadastrar: {
    width: "70%",
    height: "12%",
    backgroundColor: "#ffff",
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 4
  },
  TextCadastrar: {
    color: "#323232",
    fontSize: 20,
    fontWeight: "700"
  }
});
