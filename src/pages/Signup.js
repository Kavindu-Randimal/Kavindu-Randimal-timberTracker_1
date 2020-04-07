
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

export default class Signup extends Component<{}>{
 goBack(){
     Actions.pop();
 }
 render(){
  return(
   <View style={styles.container}>
   
      <Logo/>
      <Form type="Signup"/>
      <View style={styles.signupTextCont}>
        <Text style={{color:'#ffffff'}}> Allredy have an account. </Text>
        <TouchableOpacity onPress = {this.goBack}><Text style={styles.signupButton}>Sign in</Text></TouchableOpacity>
    </View>
   </View>
    )
  }
 }
 const styles= StyleSheet.create({
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


