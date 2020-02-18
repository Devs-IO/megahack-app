import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'

// import { Container } from './styles';

export default function Despesas({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.viewSuperior}>
            <TouchableOpacity style={styles.Fechar} onPress={() => navigation.navigate('Home')}>
            <Image source={require('../assets/icons/arrow.png')}/>
            </TouchableOpacity>
            <Text style={styles.topo}>Minhas despesas</Text>
        </View>

        <View style={styles.viewDados}>
            <View style={styles.itemFiltro}>
                <TouchableOpacity style={styles.botaoFilter}>
                    <Image source={require('../assets/icons/filter.png')} style={{width:20, height:15}}/>
                    <Text style={styles.TextDescricao}>Filtrar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.itemGeral}>
                <View style={styles.viewIcon}>
                    <Image source={require('../assets/icons/paytwo.png')} style={{width:50, height:34}}/>

                </View>
                <TouchableOpacity style={styles.viewText}>
                    <Text style={styles.TextId}>Pagamento de conta</Text>
                    <Text style={styles.TextDescricao}>Sabesp</Text>
                    <Text style={styles.TextDescricao}>R$ 150,00</Text>
                    
                </TouchableOpacity>
                <View style={styles.viewBotaoEData}>
                    <Image source={require('../assets/icons/Ok.png')} style={{width:40, height:40}}/>
                    <Text style={styles.TextId}>04 FEV</Text>
                </View>
            </View>
            <View style={styles.itemGeral}>
                <View style={styles.viewIcon}>
                    <Image source={require('../assets/icons/paytwo.png')} style={{width:50, height:34}}/>

                </View>
                <TouchableOpacity style={styles.viewText}>
                    <Text style={styles.TextId}>Pagamento de conta</Text>
                    <Text style={styles.TextDescricao}>Sabesp</Text>
                    <Text style={styles.TextDescricao}>R$ 150,00</Text>
                    
                </TouchableOpacity>
                <View style={styles.viewBotaoEData}>
                    <Image source={require('../assets/icons/Ok.png')} style={{width:40, height:40}}/>
                    <Text style={styles.TextId}>04 FEV</Text>
                </View>
            </View>
            <View style={styles.itemGeral}>
                <View style={styles.viewIcon}>
                    <Image source={require('../assets/icons/paytwo.png')} style={{width:50, height:34}}/>

                </View>
                <TouchableOpacity style={styles.viewText}>
                    <Text style={styles.TextId}>Pagamento de conta</Text>
                    <Text style={styles.TextDescricao}>Sabesp</Text>
                    <Text style={styles.TextDescricao}>R$ 150,00</Text>
                    
                </TouchableOpacity>
                <View style={styles.viewBotaoEData}>
                    <Image source={require('../assets/icons/Ok.png')} style={{width:40, height:40}}/>
                    <Text style={styles.TextId}>04 FEV</Text>
                </View>
            </View>
            <View style={styles.itemGeral}>
                <View style={styles.viewIcon}>
                    <Image source={require('../assets/icons/paytwo.png')} style={{width:50, height:34}}/>

                </View>
                <TouchableOpacity style={styles.viewText}>
                    <Text style={styles.TextId}>Pagamento de conta</Text>
                    <Text style={styles.TextDescricao}>Sabesp</Text>
                    <Text style={styles.TextDescricao}>R$ 150,00</Text>
                    
                </TouchableOpacity>
                <View style={styles.viewBotaoEData}>
                    <Image source={require('../assets/icons/Ok.png')} style={{width:40, height:40}}/>
                    <Text style={styles.TextId}>04 FEV</Text>
                </View>
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
    itemGeral:{
        width:'100%',
        height:'13%',
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    itemFiltro:{
        width:'100%',
        height:'13%',
        marginTop:30,
        flexDirection:'row',
        justifyContent:'flex-end'
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
    viewIcon:{
        width:'20%',
        height:'100%',
        justifyContent:'flex-start',
        alignItems:"center"
    },
    viewText:{
        width:'40%',
        height:'100%',
    },
    viewBotaoEData:{
        width:'40%',
        height:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:30,
    },
    TextId: {
        color: "#347474",
        fontSize: 18,
        fontWeight:'bold'
    },
    TextDescricao: {
        color: "#347474",
        fontSize: 16,
        fontWeight:'bold'
    },
    botaoFilter:{
        width:'25%',
        height:'50%',
        borderWidth:3,
        borderRadius:10,
        borderColor:'#347474',
        paddingLeft:5,
        paddingRight:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
    

})