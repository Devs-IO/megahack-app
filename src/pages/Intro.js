import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// import { Container } from './styles';

export default function Intro({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.divSuperior}>
        <Image
          source={require("../assets/Imagen.png")}
          style={{ width: 430, height: 400, marginBottom: 60 }}
        />
      </View>
      <View style={styles.retanguloUm}></View>
      <View style={styles.retanguloDois}></View>
      <View style={styles.retanguloTres}></View>
      <View style={styles.retanguloQuatro}>
        <View style={styles.viewText}>
          <Text style={styles.Text}>O modo mais</Text>
          <Text style={styles.Text}>simples de</Text>
          <Text style={styles.Text}>pagar contas</Text>
        </View>
        <View style={styles.viewIndicador}>
          <View style={styles.indicadorSelect}></View>
          <View style={styles.indicador}></View>
          <View style={styles.indicador}></View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#EEBED3",
    display: "flex",
    flexDirection: "column"
  },
  divSuperior: {
    width: "100%",
    height: "60%",
    backgroundColor: "#EEBED3",
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
    marginTop: 400,
    flexDirection: "column",
    zIndex: 1
  },
  retanguloDois: {
    width: "50%",
    height: "20%",
    backgroundColor: "#EFEFEF",
    display: "flex",
    position: "absolute",
    marginTop: 400,
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
    marginTop: 420,
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
    height: "39%",
    backgroundColor: "#EFEFEF",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 490,
    position: "absolute",
    zIndex: 2
  },
  viewText: {
    width: "100%",
    height: "60%",
    backgroundColor: "#EFEFEF",
    display: "flex",
    paddingLeft: 40,
    marginBottom: 60
  },
  Text: {
    color: "#323232",
    fontSize: 42,
    fontWeight: "700",
    marginBottom: -20
  },
  viewIndicador: {
    width: 70,
    height: 40,
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row"
  },
  indicador: {
    width: 15,
    height: 30,
    backgroundColor: "#BABDBF",
    borderRadius: 5
  },
  indicadorSelect: {
    width: 15,
    height: 40,
    backgroundColor: "#4BFF47",
    borderRadius: 5
  }
});
