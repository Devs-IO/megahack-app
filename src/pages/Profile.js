import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';

// import { Container } from './styles';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.viewSuperior}>

        <TouchableOpacity style={styles.Fechar} onPress={()=> navigation.navigate('Home')}>
          <Image source={require('../assets/icons/arrow.png')}/>
        </TouchableOpacity>

        <Text style={styles.topo}>Minha Conta</Text>

      </View>
      <View style={styles.viewVerdePerfil}>

        <View style={styles.Qrcode}></View>
        <View style={styles.Dados}>
          <Text style={styles.Nome}>Andre L S Oliveira</Text>
          <Text style={styles.Nome}>065.524.251-42</Text>

          <View style={styles.Id}>
            <Text style={styles.Subtitulo}>ufUNS465ah</Text>
            <View style={styles.Linha}></View>
            <Image source={require('../assets/icons/copy.png')} style={{marginLeft:15}}/>

          </View>

        </View>
        
        
        
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

          <TouchableOpacity style={styles.BotaoSair} onPress={()=> navigation.navigate('Login')}>
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
    flexDirection:'row',
    zIndex:1
  },
  viewVerdePerfil:{
    width:'100%',
    height:'30%',
    backgroundColor:'#347474',
    display: 'flex',
    alignItems:'center',
    flexDirection:'row',
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
  topo:{
    color:'#347474',
    fontSize:36,
    fontWeight:'700',
    marginTop:80,
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
  },
  Qrcode:{
    width:150,
    height:150,
    backgroundColor:'#ffff',
    borderRadius:10,
    marginLeft:30
  },
  Nome:{
    color:'#ffff',
    fontSize:26,
    fontWeight:'700',
    marginLeft:10
  },
  Dados:{
    width:200,
    height:150,
    borderRadius:10,
    marginLeft:20
  },

  Id:{
    width:'100%',
    height:'40%',
    backgroundColor:'#ffff',
    borderRadius:10,
    marginTop:20,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    paddingLeft:10
  },
  Linha:{
    width:'1%',
    height:'100%',
    backgroundColor:'#347474',
    marginLeft:60
  },
  Fechar:{
    width:50,
    height:50,
    backgroundColor:'#FFF',
    marginLeft:30,
    marginRight:50,
    marginTop:30,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  }
 
  

});