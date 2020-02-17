import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
     <View style={styles.viewSuperior}></View>
     <View style={styles.viewDados}>

       <View style={styles.viewSaldo}>
         <View style={styles.viewVisualSaldo}>
           <View style={styles.viewTextos}>
             <Text style={styles.TextSaldoEmConta}>Saldo em conta</Text>
             <Text style={styles.TextSaldo}>R$ 1.500,62</Text>
           </View>
           <View style={styles.viewBotaoOlho}>
           </View>       
         </View>
         <View style={styles.viewBotoesSaldo}>
           <TouchableOpacity>
             <Text></Text>
           </TouchableOpacity>
           <TouchableOpacity>
             <Text></Text>
           </TouchableOpacity>
           <TouchableOpacity>
             <Text></Text>
           </TouchableOpacity>


         </View>
         
         


       </View>
       <View style={styles.viewCartao}></View>
       <View style={styles.viewBorda}></View>
       
       

     </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
  viewSuperior:{
    width:'100%',
    height:'30%',
    backgroundColor:'#494949',
    display: 'flex',
    flexDirection:'row',
    zIndex:1
  },
  viewDados:{
    width:'100%',
    height:'50%',
    display: 'flex',
    flexDirection:'column',
  },
  viewSaldo:{
    width:'100%',
    height:'35%',
    backgroundColor:'#ffff',
    display: 'flex',
    flexDirection:'column',
    borderTopLeftRadius:30,
    borderBottomRightRadius:30,
    zIndex:3,
    shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        elevation: 5,
  },
  viewCartao:{
    width:'100%',
    height:'43%',
    backgroundColor:'#85B2B2',
    display: 'flex',
    flexDirection:'row',
    borderTopLeftRadius:30,
    borderBottomRightRadius:30,
    marginTop:-25,
    marginBottom:-25,
    zIndex:2,
    shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        elevation: 4,
  },
  viewBorda:{
    width:'100%',
    height:'35%',
    backgroundColor:'#FFF',
    display: 'flex',
    flexDirection:'row',
    borderTopLeftRadius:30,
    borderBottomRightRadius:30,
    zIndex:1,
    shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        elevation: 3,
  },
  viewVisualSaldo:{
    width:'100%',
    height:'50%',
    flexDirection:'row'
  },
  TextSaldoEmConta:{
    color:'#347474',
    fontSize:20,
    
  },
  TextSaldo:{
    color:'#323232',
    fontSize:35,
    fontWeight:'bold',
    marginTop:-5
  },
  viewTextos:{
    width:'70%',
    height:'100%',
    paddingLeft:20,
    justifyContent:'center'
  },
  viewBotaoOlho:{
    width:'30%',
    height:'100%',
    backgroundColor:'#292929',
    paddingLeft:20,
    justifyContent:'center'
  },
  viewBotoesSaldo:{
    width:'100%',
    height:'50%',
    flexDirection:'row',
    backgroundColor:'#898989',
    
  },
});
