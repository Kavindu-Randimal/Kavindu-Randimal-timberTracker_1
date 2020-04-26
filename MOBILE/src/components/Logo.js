
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

export default class Logo extends Component<{}>{
 render(){
  return(
      <View style={styles.container}>
        <Image style = {{width:200, height:100,}}
            source={require('../images/Logo.png')}/>
        <Text style={styles.logoText}>Timber Tracker</Text>
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
logoText  : {
       marginVertical:15,
       fontSize:18,
       color:'rgba(255,255,255,0.7)'
   }
});


