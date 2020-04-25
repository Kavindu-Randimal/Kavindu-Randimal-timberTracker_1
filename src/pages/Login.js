
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class Login extends Component<{}>{
 signup(){
    Actions.signup()
  }
 render(){
  return(
   <View style={styles.container}>
   
      <Logo/>
      <Form type="Login"/>
      <View style={styles.signupTextCont}>
        <Text style={{color:'#ffff'}}> Don't have an account yet?  </Text>
        <TouchableOpacity onPress={this.Signup}><Text style={styles.signupButton}>Sign up</Text></TouchableOpacity>
      </View>
   </View>
  )
 }
}
 const styles= StyleSheet.create({
  container :  {
   backgroundColor:'black',
   flex: 1,  
   alignItems:'center',
   justifyContent:'center',
   },

   signupTextCont:{
     flexGrow:1,
     justifyContent:'flex-end',
     alignItems:'center',
     paddingVertical:16,
     flexDirection:'row'
   },

   signupButton:{
     color:'#ffffff',
     fontSize:16,
     fontWeight:'500',
   }

});


