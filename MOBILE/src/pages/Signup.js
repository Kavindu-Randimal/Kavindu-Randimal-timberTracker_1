
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';


import Logo from '../components/Logo';
import { showMessage, hideMessage } from "react-native-flash-message";
// import Form from '../components/RegistrationDetails';

import {Actions} from 'react-native-router-flux';

export default class Signup extends Component<{}>{
  isEmailValid=true;

  constructor(props){
    super(props);
    this.state = {
      firstName:'',
      lastName:'',
      email:'',
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

  // email validation

  validate = (text)=> {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      console.log("Email is Not Correct");
      this.setState({ email: text })
      this.isEmailValid = false;
      return false;
    }
    else {
      this.setState({ email: text })
      console.log("Email is Correct");
      this.isEmailValid = true;
      return true;
    }
  }

 goBack(){
     Actions.pop();
 }

 async SignUp(){
  if(this.isEmailValid){
    console.log(this.state);
    let response = await fetch(`http://192.168.1.5:8080/users/signup`,{
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
      Actions.login();
    }else{
      showMessage({
        message: "Singup Fails",
        description: response.message,
        type:  "danger",
      });
    }
  }else{
    showMessage({
      message: "Singup Fails",
      description: "Email is not correct",
      type:  "danger",
    });
  }
}

rewuestHandle() {
  this.props.type === 'SignUp',
    this.SignUp();
  }

 render(){
  return(
   <View style={styles.container}>
   <Logo/>
      <TextInput style={styles.inputBox}
        name = "firstname"
        type = "text"
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder='First Name'
        value={this.state.name}
        onChange={value => this.handleInputChange('firstName', value)}
        onSubmitEditing={()=> this.password.focus()}
    />

    <TextInput style={styles.inputBox}
        name = "lastname"
        type = "text"
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder='Last Name'
        value={this.state.name}
        onChange={value => this.handleInputChange('lastName', value)}
        onSubmitEditing={()=> this.password.focus()}
    />
    <TextInput style={  this.isEmailValid ? styles.inputBox : styles.inputBoxError}
        name = "email"
        type = "text"
        onChangeText={(text) => this.validate(text)}
        value={this.state.email}
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder='Email'
        value={this.state.name}
        onChange={value => this.handleInputChange('email', value)}
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
      <Text style={styles.buttonText}>Sign up</Text>
    </TouchableOpacity> 
  

    <View style={styles.signupTextCont}>
      <Text style={{color:'#ffff'}}> Allredy have an account. </Text>
      <TouchableOpacity onPress = {this.goBack}><Text style={styles.signupButton}>Sign in</Text></TouchableOpacity>
    </View>
  </View>
  )
  }
}
 const styles= StyleSheet.create({

container :  {
  backgroundColor:'black',
  flexGrow: 1,  
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
},

inputBox:{
    width:300,
    backgroundColor:'rgba(255,255,255,0.3)',
    borderRadius:25,
    paddingHorizontal:20,
    fontSize:16,
    color:'white',
    marginVertical:12,
    // borderColor:"red",
    // borderWidth:1
  },
  inputBoxError:{
    width:300,
    backgroundColor:'rgba(255,255,255,0.3)',
    borderRadius:25,
    paddingHorizontal:20,
    fontSize:16,
    color:'white',
    marginVertical:12,
    borderColor:"red",
    borderWidth:1
  },

button:{
  backgroundColor:'#008e76',
  width:120,
  borderRadius:25,
  paddingVertical:10,
  marginVertical:12,
},
buttonText:{
  fontSize:16,
  fontWeight:'500',
  textAlign:'center',
  color:'#ffff',
},

});
