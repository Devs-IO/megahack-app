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
            <Text style={styles.topo}>Realizar pagamento</Text>
        </View>

        <TouchableOpacity style={styles.item}>
            <Image source={require('../assets/icons/scanner.png')}
            style={{width:45, height:40}}/>
            <Text style={styles.Subtitulo}>Pagar boleto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemDois}>
            <Image source={require('../assets/icons/transfer.png')}
            style={{width:45, height:45, marginTop:20,}}/>
            <Text style={styles.Subtitulo}>Transferir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemTres}>
            <Image source={require('../assets/icons/cobrar.png')}
            style={{width:45, height:45, marginTop:20,}}/>
            <Text style={styles.Subtitulo}>Cobrar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.itemQuatro}>
            <Image source={require('../assets/icons/qr.png')}
            style={{width:45, height:45, marginTop:20}}/>
            <Text style={styles.Subtitulo}>Transferir por QrCode</Text>
        </TouchableOpacity>
        


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
    item:{
        width:'100%',
        height:'15%',
        backgroundColor:'#ffff',
        display: 'flex',
        paddingLeft:30,
        flexDirection:'column',
        justifyContent:'center',
        borderTopStartRadius:30,
        borderBottomEndRadius:30,
        marginBottom:-25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        elevation: 5,
        zIndex:1
    },
    itemDois:{
        width:'100%',
        height:'15%',
        backgroundColor:'#fff',
        display: 'flex',
        paddingLeft:30,
        flexDirection:'column',
        borderTopStartRadius:30,
        borderBottomEndRadius:30,
        justifyContent:'center',
        marginBottom:-25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        elevation: 4,
        zIndex:1
    },
    itemTres:{
        width:'100%',
        height:'15%',
        backgroundColor:'#fff',
        display:'flex',
        paddingLeft:30,
        flexDirection:'column',
        borderTopStartRadius:30,
        borderBottomEndRadius:30,
        justifyContent:'center',
        marginBottom:-25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        elevation: 3,
        zIndex:1
    },
    itemQuatro:{
        width:'100%',
        height:'15%',
        backgroundColor:'#fff',
        display: 'flex',
        paddingLeft:30,
        flexDirection:'column',
        borderTopStartRadius:30,
        borderBottomEndRadius:30,
        justifyContent:'center',
        marginBottom:-25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        elevation: 2,
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

})