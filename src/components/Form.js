
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,  
} from 'react-native';

import NetworkService from '../network/NetworkService';
import { Value } from 'react-native-reanimated';
import { Actions } from 'react-native-router-flux';
import { showMessage, hideMessage } from "react-native-flash-message";

export default class Logo extends Component<{}>{

  constructor(props){
    super(props);
    this.state = {
      name:'',
      password:'',
    }
   this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(field, inputValue){
    console.log(field, inputValue.nativeEvent.text);
    this.setState({
      [field]: inputValue.nativeEvent.text
    })
  }
  async login() {
        console.log(this.state);
        let response = await fetch(`http://192.168.1.2:8080/users/login`,{
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body:JSON.stringify(this.state),
        }).then(res=>{
          console.log(res);
          return res.json()
      }).catch(err =>{
          console.log('Error', err)
      });;  
      console.log(response);
      if( response.loggin ) {
        // TODO Navigate to Menu;
        showMessage({
          message: "Login Success",
          description: response.message,
          type:  "success",
        });
      } else {
        showMessage({
          message: "Login Fails",
          description: response.message,
          type:  "danger",
        });
      }
  }

  async SignUp(){
    console.log(this.state);
    let response = await fetch(`http://192.168.1.2:8080/users/signup`,{
      method: 'POST',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(this.state),
    }).then(res=>{
      console.log(res)
      return res.json()
    }).catch(err =>{
      console.log('Error',err)
    });
    console.log(response);
    if(response.loggin){
      showMessage({
        message: "Signup Success",
        description: response.message,
        type:  "success",
      });
      Actions.loggin();
    }else{
      showMessage({
        message: "Singup Fails",
        description: response.message,
        type:  "danger",
      });
    }
  }
  
  rewuestHandle() {
    if(this.props.type === 'Login') {
      this.login();
    } else if ( this.props.type === 'SignUp') {
      this.SignUp();
    }
  }

 render(){
  return(
    <View style={styles.container}>
        <TextInput style={styles.inputBox}
         name = "name"
         type = "text"
         underlineColorAndroid='rgba(0,0,0,0)'
         placeholder='Name'
         value={this.state.name}
         onChange={value => this.handleInputChange('name', value)}
         onSubmitEditing={()=> this.password.focus()}
         />

        <TextInput style={styles.inputBox}
         name = 'password'
         type = "text"
         underlineColorAndroid='rgba(0,0,0,0)'
         placeholder='Password'
         value={this.state.password}
         onChange={value => this.handleInputChange('password', value)}
         secureTextEntry={true}
         ref={(input) => this.password = input}
         />
          <TouchableOpacity style={styles.button}
          onPress={()=> this.rewuestHandle()}>
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


