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
} from 'react-native';
import FlashMessage from "react-native-flash-message";

import Routes from './src/Routes';


export default class App extends Component<{}>{
 render(){
  return(
  <View style={styles.container}>
    <Routes />
    <FlashMessage position="center" />
  </View>
  )
 }
}
 const styles= StyleSheet.create({
  container :  {
   backgroundColor:'black',
   flex: 1, 
   justifyContent:'center',
   },
});


