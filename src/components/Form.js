
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,  
} from 'react-native';
import NetworkService from '../network/NetworkService';

export default class Logo extends Component<{}>{
  async login() {
    console.log("Login Clicked");
    let data = await NetworkService.getUser();
    console.log(data);
  }
 render(){
  return(
      <View style={styles.container}>
        <TextInput style={styles.inputBox}
         underlineColorAndroid='rgba(0,0,0,0)'
         placeholder='Name'
         onSubmitEditing={()=> this.password.focus()}
         />

        <TextInput style={styles.inputBox}
         underlineColorAndroid='rgba(0,0,0,0)'
         placeholder='Password'
         secureTextEntry={true}
         ref={(input) => this.password = input}
         />

          <TouchableOpacity style={styles.button}
          onPress={()=> this.login()}>
             <Text style={styles.buttonText}>{this.props.type}</Text>
          </TouchableOpacity> 
      </View>
  )
 }
}
 const styles= StyleSheet.create({
  container :  {
   flexGrow: 1,
   alignItems:'center',
   justifyContent:'center',  
   },
  inputBox:{
    width:350,
    backgroundColor:'rgba(255,255,255,0.3)',
    borderRadius:25,
    paddingHorizontal:20,
    fontSize:16,
    color:'white',
    marginVertical:12,
  },
  button:{
    backgroundColor:'#008e76',
    width:150,
    borderRadius:25,
    paddingVertical:10,
    marginVertical:12,
  },
  buttonText:{
    fontSize:16,
    fontWeight:'500',
    textAlign:'center',
    color:'#ffff',
  }

});


