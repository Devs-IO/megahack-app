import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

// import { Container } from './styles';

export default function Login() {
  return (
    <View style={styles.container}>
      

      <View style={styles.divSuperior}>   
      </View>
      <View style={styles.retanguloUm}>
      </View>
      <View style={styles.retanguloDois}>
      </View>
      <View style={styles.retanguloTres}>
      </View>
      <View style={styles.retanguloQuatro}>
      </View>

      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    backgroundColor: '#EFEFEF',
    display: 'flex',
    flexDirection:'column'
    
  },
  divSuperior: {
    width:'100%',
    height:'60%',
    backgroundColor:'#323232',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex:0
  },
  retanguloUm:{
    width:'70%',
    height:'20%',
    backgroundColor:'#EFEFEF',
    display: 'flex',
    position: 'absolute',
    transform:([{ rotateX: '20deg' }, { rotateZ: '2.3rad' }, {rotateY: '10deg'}]),
    marginLeft:250,
    marginTop:300,
    flexDirection:'column',
    zIndex:1
  },
  retanguloDois:{
    width:'50%',
    height:'20%',
    backgroundColor:'#EFEFEF',
    display: 'flex',
    position: 'absolute',
    marginTop:326,
    marginLeft:115,
    transform:([{ rotateX: '20deg' }, { rotateZ: '0.45rad' }, {rotateY: '10deg'}]),
    zIndex:2
  },
  retanguloTres:{
    width:'50%',
    height:'20%',
    backgroundColor:'#EFEFEF',
    display: 'flex',
    position: 'absolute',
    marginTop:330,
    marginLeft:10,
    transform:([{ rotateX: '20deg' }, { rotateZ: '2.6rad' }, {rotateY: '10deg'}]),
    zIndex:2
  },
  retanguloQuatro:{
    width:'100%',
    height:'20%',
    backgroundColor:'#EFEFEF',
    display: 'flex',
    marginTop:420,
    position: 'absolute',
    zIndex:2
  }

});