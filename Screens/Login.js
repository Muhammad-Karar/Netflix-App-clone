import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking } from 'react-native';
import React, { useState } from 'react';
import { Entypo, AntDesign } from 'react-native-vector-icons';
import ViewMoreText from 'react-native-view-more-text';

export default function Login({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [Password, setPass] = React.useState('');


  const handleForgotPassword = () => {
    // Replace 'https://example.com/forgot-password' with your actual forgot password URL
    const forgotPasswordURL = 'https://www.netflix.com/pk/loginhelp?fromApp=true&netflixsource=android';

    // Open the URL in the device's default browser
    Linking.openURL(forgotPasswordURL).catch((err) =>
      console.error('Error opening URL: ', err)
    );
  };


  const renderMore = (onPress) => (
    <Text style={{fontSize: 18, color: '#808080',}} onPress={onPress}>Learn more</Text>
  );
  
  const renderLess = (onPress) => (
    <Text style={{fontSize: 18, color: '#808080',}} onPress={onPress}>View less</Text>
  );
  

  return (
    <View style={styles.container}>
      <Image source={require('../assets/namepic1.png')} style={styles.nameImg} />

      <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
        <AntDesign name='arrowleft' size={30} color='white' />
      </TouchableOpacity>

      <View style={styles.loginbox}>
        <TextInput style={styles.textField} placeholderTextColor='white' placeholder='Email or phone number' onChangeText={setEmail} value={email} />
        <TextInput style={styles.textField} placeholderTextColor='white' placeholder='Password' onChangeText={setPass} value={Password} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.text1}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.text1}>New to Netflix? Sign up now</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>Sign in is protected by Google reCAPTCHA to ensure you're not a bot</Text>

        <ViewMoreText numberOfLines={3} renderViewMore={renderMore} renderViewLess={renderLess}>
          <Text style={styles.text2}>
            The information collected by Google reCAPTCHA
            is subject to the Google Privacy Policy and Terms of Service, and 'is used for providing, maintaining,
            and improving the reCAPTCHA service and for general security purposes (it is not used for
            personalized advertising by Google).
          </Text>
        </ViewMoreText>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // alignItems: 'center', 
    // justifyContent: 'center',
  },
  loginbox: {
    // backgroundColor: 'blue',
    width: '95%',
    height: '85%',
    marginLeft: '2.5%',
    marginTop: '28%',
  },
  text1: {
    fontSize: 23,
    textAlign: 'center',
    marginTop: 20,
    color: '#a9a9a9',
    fontWeight: 'bold',
    marginTop: '10%',

  },
  text2: {
    fontSize: 17,
    textAlign: 'center',
    color: '#808080',
    marginTop: '5%',

  },
  textField: {
    backgroundColor: '#696969',
    color: 'white',
    borderRadius: 5,
    width: '95%',
    height: 80,
    marginTop: 30,
    marginLeft: 10,
    padding: 10,

  },
  button: {
    // backgroundColor: 'black',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 4,
    borderRadius: 6,
    width: '95%',
    height: '10%',
    marginTop: 20,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    // letterSpacing: 3,
  },
  icon: {
    position: 'absolute',
    left: '5%',
    top: '7%',
    // backgroundColor: 'red',
    width: 30,
    height: 30,

  },
  nameImg: {
    width: '40%',
    height: 35,
    position: 'absolute',
    left: '15%',
    top: '7%',
  },
});
