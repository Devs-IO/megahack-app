import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'

// import { Container } from './styles';

export default function Pay({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.viewSuperior}>
            <TouchableOpacity style={styles.Fechar} onPress={() => navigation.navigate('Home')}>
            <Image source={require('../assets/icons/arrow.png')}/>
            </TouchableOpacity>
            <Text style={styles.topo}>Minha carteira</Text>
        </View>

        <View style={styles.viewDados}>
            <View style={styles.viewSaldo}>
                <View style={styles.viewTextESaldo}>
                    <Text style={styles.TextSaldoEmConta}>Saldo em conta</Text>
                    <Text style={styles.TextSaldo}>R$ 1.500,62</Text>
                    <View style={styles.viewBarra}>
                        <View style={styles.viewGastos}></View>
                        <View style={styles.viewTotal}></View>
                    </View>
                </View>
                <TouchableOpacity style={styles.viewOlho}>
                    <Image source={require('../assets/icons/olhoverde.png')} style={{width:50, height:30}}/>
                </TouchableOpacity>
                
            </View>

            <View style={styles.viewGrafic}>
                <Image source={require('../assets/grafico.png')} style={{width:'100%', height:'100%'}}/>

            </View>

            <View style={styles.viewBotoes}>
                <TouchableOpacity style={styles.botao}>
                    <Image source={require('../assets/icons/pig.png')} style={{width:32, height:30}}/>
                    <Text style={styles.TextBotao}>Guardar dinheiro</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao}>
                    <Image source={require('../assets/icons/bank.png')} style={{width:40, height:30}}/>
                    <Text style={styles.TextBotao}>Retirar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao}>
                    <Image source={require('../assets/icons/pay.png')} style={{width:40, height:28}}/>
                    <Text style={styles.TextBotao}>Pagar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao}>
                    <Image source={require('../assets/icons/paytwo.png')} style={{width:40, height:28}}/>
                    <Text style={styles.TextBotao}>Depositar</Text>
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
      flexDirection:'column',
      alignItems:'center'
    },
    viewSuperior:{
        width:'100%',
        height:'30%',
        backgroundColor:'#EFEFEF',
        display: 'flex',
        flexDirection:'row',
        zIndex:1
    },
    Fechar:{
        width:50,
        height:50,
        backgroundColor:'#FFF',
        marginLeft:30,
        marginRight:10,
        marginTop:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    viewDados:{
        width:'100%',
        height:'70%',
        backgroundColor:'#ffff',
        display: 'flex',
        paddingLeft:30,
        paddingRight:30,
        alignItems:'center',
        flexDirection:'column',
        borderTopStartRadius:30,
        borderTopEndRadius:30,
        zIndex:1
    },
    topo:{
        color:'#347474',
        fontSize:36,
        fontWeight:'700',
        marginTop:100,
    },
    Subtitulo:{
        color:'#347474',
        fontSize:20,
        fontWeight:'700',
    },
    viewSaldo:{
        width:'100%',
        height:'20%',
        marginTop:30,
        flexDirection:'row'
    },
    viewGrafic:{
        width:'100%',
        height:'30%',
        marginTop:10
    },
    viewBotoes:{
        width:'100%',
        height:'13%',
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    TextSaldoEmConta: {
        color: "#347474",
        fontSize: 20
    },
    TextBotao: {
        color: "#347474",
        fontSize: 14
    },
    TextSaldo: {
        color: "#323232",
        fontSize: 35,
        fontWeight: "bold",
        marginTop: -5
    },
    viewTextESaldo:{
        width:'80%',
        height:'100%',
        backgroundColor:'#fff',
    },
    viewOlho:{
        width:'20%',
        height:'60%',
        borderRadius:10,
        borderWidth:3,
        borderColor:'#347474',
        justifyContent:'center',
        alignItems:'center'
    },
    botao:{
        width:'23%',
        height:'100%',
        borderRadius:10,
        borderWidth:3,
        borderColor:'#347474',
        padding:2,
        paddingLeft:5,
        paddingBottom:2,
    },
    viewBarra:{
        width:'100%',
        height:'15%',
        marginTop:10,
        
    },
    viewTotal:{
        width:'100%',
        height:'100%',
        backgroundColor:'#347474',
        borderRadius:10,
        display:'flex',
        position:'absolute',
        zIndex:1
    },
    viewGastos:{
        width:'30%',
        height:'100%',
        backgroundColor:'#F56476',
        borderRadius:10,
        display:'flex',
        position:'absolute',
        zIndex:2
    }


})