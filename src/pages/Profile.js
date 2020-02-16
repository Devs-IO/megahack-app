import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';


// import { Container } from './styles';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.viewSuperior}></View>
      <View style={styles.viewVerdePerfil}>
        
      </View>

      <View style={styles.viewFundo}>
          <TouchableOpacity style={styles.Botao}>
              <Text style={styles.titulo}>Meu numero</Text>
              <Text style={styles.Subtitulo}>{`(11)983514937`}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Botao}>
              <Text style={styles.titulo}>Meu email</Text>
              <Text style={styles.Subtitulo}>{`andreluisoliveira013@gmail.com`}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Botao}>
              <Text style={styles.titulo}>Nome de preferencia</Text>
              <Text style={styles.Subtitulo}>{`Andre Oliveira`}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Botao}>
              <Text style={styles.titulo}>Senha de 4 digitos</Text>
              <Text style={styles.Subtitulo}>{`Utilizada para confirmar movimentações`}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.BotaoSair}>
              <Text style={styles.Sair}>Sair</Text>
          </TouchableOpacity>
            
          


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
    flexDirection:'column',
    alignItems:'center'
    
  },
  viewSuperior:{
    width:'100%',
    height:'20%',
    backgroundColor:'#EFEFEF',
    display: 'flex',
    flexDirection:'column',
    zIndex:1
  },
  viewVerdePerfil:{
    width:'100%',
    height:'30%',
    backgroundColor:'#347474',
    display: 'flex',
    flexDirection:'column',
    borderTopStartRadius:30,
    borderBottomEndRadius:30,
    zIndex:2
  },
  viewFundo:{
      width:'100%',
      height:'50%',
      flexDirection:'column',
      backgroundColor:'#EFEFEF',
      justifyContent:'flex-start',
      alignItems:'center',
      zIndex:1
  },
  Botao:{
    width:'80%',
    height:'15%',
    backgroundColor: '#ffff',
    borderRadius: 10,
    marginTop:10,
    marginBottom:5,
    alignItems: 'flex-start',
    paddingLeft:20,
    justifyContent: 'center',
    zIndex:4
  },
  BotaoSair:{
    width:'80%',
    height:'15%',
    backgroundColor: '#FF6A6A',
    borderRadius: 10,
    marginTop:20,
    marginBottom:10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex:4
  },
  titulo:{
    color:'#347474',
    fontSize:18,
    fontWeight:'700',
  },
  Subtitulo:{
    color:'#323232',
    fontSize:16,
    fontWeight:'700',
  },
  Sair:{
    color:'#ffff',
    fontSize:26,
    fontWeight:'700',

  }
 
  

});