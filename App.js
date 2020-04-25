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

// import Login from './src/pages/Login';
import Routes from './src/Routes';
import Login from './src/pages/Login';

export default class App extends Component<{}>{
 render(){
  return(
   <View style={styles.container}>
    
    <Login/>
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


