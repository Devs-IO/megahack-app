import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

// import { Container } from './styles';

export default function NewAccount() {
  return (
    <View style={styles.container}>
      <View style={styles.divSuperior}>
        <Text style={styles.TextLogin}>Cadastre-se</Text>   
      </View>
      <View style={styles.retanguloUm}>
      </View>
      <View style={styles.retanguloDois}>
      </View>
      <View style={styles.retanguloTres}>
      </View>
      <View style={styles.retanguloQuatro}>

        <View style={styles.ViewInput}>
          <Text style={styles.TextInput}>Nome completo</Text>
          <TextInput style={styles.Input} keyboardType='default' maxLength={30}
        autoCapitalize='none'></TextInput>
          <View style={styles.ViewFina}></View>
        </View>

        <View style={styles.ViewInput}>
          <Text style={styles.TextInput}>CPF</Text>
          <TextInput style={styles.Input} keyboardType='number-pad' maxLength={11}
        autoCapitalize='none'></TextInput>
          <View style={styles.ViewFina}></View>
        </View>

        <View style={styles.ViewInput}>
          <Text style={styles.TextInput}>Telefone</Text>
          <TextInput style={styles.Input} keyboardType='number-pad' maxLength={15}
        autoCapitalize='none'></TextInput>
          <View style={styles.ViewFina}></View>
        </View>




        <View style={styles.ViewInput}>
          <Text style={styles.TextInput}>Senha</Text>
          <TextInput style={styles.Input} secureTextEntry={true} autoCapitalize='none'></TextInput>
          <View style={styles.ViewFina}></View>
        </View>

        <View style={styles.ViewBotoes}>
        <TouchableOpacity style={styles.BotaoDois}>
            <Text style={styles.TextCancelar}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Botao}>
            <Text style={styles.TextCadastrar}>Cadastrar</Text>
          </TouchableOpacity>
        </View>

        
  

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
    height:'45%',
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
    marginTop:200,
    flexDirection:'column',
    zIndex:1
  },
  retanguloDois:{
    width:'50%',
    height:'20%',
    backgroundColor:'#EFEFEF',
    display: 'flex',
    position: 'absolute',
    marginTop:250,
    marginLeft:115,
    transform:([{ rotateX: '20deg' }, { rotateZ: '0.45rad' }, {rotateY: '10deg'}]),
    zIndex:2
  },
  retanguloTres:{
    width:'60%',
    height:'20%',
    backgroundColor:'#EFEFEF',
    display: 'flex',
    position: 'absolute',
    marginTop:270,
    marginLeft:-17,
    transform:([{ rotateX: '20deg' }, { rotateZ: '2.5rad' }, {rotateY: '10deg'}]),
    zIndex:2
  },
  retanguloQuatro:{
    width:'100%',
    height:'60%',
    backgroundColor:'#Efefef',
    display: 'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    marginTop:340,
    position: 'absolute',
    zIndex:2
  },
  TextLogin:{
    color:'#FFF',
    fontSize:36,
    fontWeight:'700',
    marginBottom:100
  },
  ViewInput:{
    width:'70%',
    height:'12%',
    justifyContent:'center',
    alignItems:'flex-start',
    marginBottom:40,
    zIndex:4
  },
  Input:{
    width:'100%',
    height:'80%',
  },
  TextInput:{
    color:'#323232',
    fontSize:26,
    fontWeight:'700',
  },
  ViewFina:{
    width:'100%',
    height:'5%',
    backgroundColor:'#323232'
  },
  Botao:{
    width:'45%',
    height:'100%',
    backgroundColor: '#347474',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex:4
  },
  BotaoDois:{
    width:'45%',
    height:'100%',
    backgroundColor: '#ffff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex:4
  },
  TextCadastrar:{
    color:'#ffff',
    fontSize:20,
    fontWeight:'700',
  },
  TextCancelar:{
    color:'#323232',
    fontSize:20,
    fontWeight:'700',
  },
  ViewBotoes:{
    width:'80%',
    height:'12%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    zIndex:4

  },

});