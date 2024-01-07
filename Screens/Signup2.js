import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, } from 'react-native';
import React, { useState } from 'react';
import { Entypo, AntDesign } from 'react-native-vector-icons';
import { CheckBox } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';
import { firebase } from '../Firebase/Config';
import Verify from './Verify';


export default function Signup2({navigation}) {
    const route = useRoute();
    const { Email } = route.params;
    const [Password, setPass] = React.useState('');
    const [isChecked, setChecked] = useState(false);

    registerUser = async (Email, Password) =>{
        await firebase.auth().createUserWithEmailAndPassword(Email, Password)
        .then(() => {
            firebase.auth().currentUser.sendEmailVerification({
                handleCodeInApp: true,
                url:'https://netflix-app-clone-e5665.firebaseapp.com',
            })
            .then(() =>{
                alert('Verification email send successfully')
            }).catch((error) =>{
                alert(error.message)
            })
            .then(() =>{
               firebase.firestore().collection('UsersData')
               .doc(firebase.auth().currentUser.uid)
               .set({
                Email, Password
               }) 
            })
            .catch((error) => {
                alert(error.message)
            })
        })
        .catch((error) => {
            alert(error.message)
        })
        
    }


    const handleCheckboxToggle = () => {
        setChecked(!isChecked);
    };


    return (
        <View style={styles.container}>

            <View style={styles.headerbox}>

                <Image style={styles.nameImg} source={require('../assets/namepic1.png')} />

                <TouchableOpacity style={styles.firstHeader} onPress={() => navigation.navigate('help')}>
                    <Text style={styles.headerText}>HELP</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.secondHeader} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.secondHeaderText}>LOG IN</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.signinBox}>

                <Text style={styles.htext1}>Unlimited movies, TV shows & more</Text>

                <Text style={styles.text2}>Create an account and we'll send you an email with everything you need to know about Netflix.</Text>

                <TextInput style={styles.textField} placeholderTextColor='black'  value={Email} placeholder='Email' editable={false} />

                <TextInput style={styles.textField} placeholderTextColor='black' 
                placeholder='Password' onChangeText={(Password) => setPass(Password)} value={Password} 
                secureTextEntry={true}/>

                <CheckBox
                    title='Please do not email me Netflix special offers.' checked={isChecked} onPress={handleCheckboxToggle} checkedColor='blue'
                    uncheckedColor='black' textStyle={{ fontSize: 18, color: 'black', }}
                    containerStyle={{ backgroundColor: 'white', marginLeft: -2 }} />

                <TouchableOpacity style={styles.button} onPress={() => {
                    registerUser(Email, Password);
                    }}>
                    <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
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
        paddingTop: '10%',
    },
    signinBox: {
        // backgroundColor: 'blue',
        width: '90%',
        height: '90%',
        marginLeft: 20,
        marginTop: 20,
    },
    htext1: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'left',

    },
    text2: {
        fontSize: 27,
        textAlign: 'left',
        marginTop: 20,
        color: 'black'
    },
    textField: {
        borderColor: '#008000',
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
        left: '0%',
        top: '25%',
        // backgroundColor: 'red',
        width: 30,
        height: 30,

    },
    headerbox: {
        position: 'relative',
        width: '95%',
        height: '10%',
        // backgroundColor: 'blue',
        marginLeft: '2.5%',
        marginRight: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    nameImg: {
        width: '30%',
        height: 35,
        position: 'absolute',
        left: '0%',
        top: '25%',
    },
    headerText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    secondHeaderText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    secondHeader: {
        // marginRight: 5,
        flex: 1,
        textAlign: 'right',
        marginRight: '2%',
    },
    firstHeader: {
        // marginRight: 5,
        marginLeft: '57%',
        flex: 1,
        textAlign: 'right',
    }
});
