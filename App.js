/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

// import Login from './src/pages/Login';
import Routes from './src/Routes';

export default class App extends Component<{}>{
 render(){
  return(
   <View style={styles.container}>
    
    <Routes/>
   </View>
  );
 }
}
 const styles= StyleSheet.create({
  container :  {
   backgroundColor:'black',
   flex: 1,  
   alignItems:'center',
   justifyContent:'center',
   },
});


