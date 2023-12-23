import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
import React, { useState, props } from 'react';
import { Entypo } from 'react-native-vector-icons';

export default function Signup({navigation}) {
  const [Email, setEmail] = React.useState('');

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
      <Entypo name='cross' size={30} color='black' />
      </TouchableOpacity>

      <View style={styles.signinBox}>

      <Text style={styles.htext1}>Ready to watch?</Text>

      <Text style={styles.text2}>Enter your email to create or sign in to your account.</Text>

      <TextInput style={styles.textField} placeholder='Email' onChangeText={(input) => setEmail(input)} value={Email} />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('signup2', {Email})}>
        <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff', 
    // alignItems: 'center', 
    // justifyContent: 'center',
    height: 500,
    paddingTop: 160,
  },
  signinBox: {
    // backgroundColor: 'blue',
    width: '85%',
    height: '70%',
    marginLeft: 20,
  },
  htext1: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'left',
    
  },
  text2: {
    fontSize: 23,
    textAlign: 'left',
    marginTop: 20,
    color: 'gray'
  },
  textField: {
    borderColor: 'blue',
    color: 'black',
    borderRadius: 3,
    width: '100%',
    height: 70,
    marginTop: 30,
    borderWidth: 1.5,
    padding: 10,
},
button: {
  backgroundColor: 'red',
  padding: 10,
  borderRadius: 3,
  width: '100%',
  height: 55,
  marginTop: 20,
},
buttonText: {
  color: '#fff',
  fontSize: 20,
  // fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 3,
  letterSpacing: 3,
},
icon: {
  position: 'absolute',
  right: 50, 
  top: 80, 
  // backgroundColor: 'red',
  width: 30,
  height: 30,
  
}
});
