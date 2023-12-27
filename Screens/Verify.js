import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, } from 'react-native';
import React, { useState } from 'react';
import { Entypo, AntDesign } from 'react-native-vector-icons';
import { CheckBox } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';
import { firebase } from '../Firebase/Config';

export default function Verify({ navigation }) {

    return (
        <View style={styles.container}>

            <View style={styles.headerbox}>

                <Image style={styles.nameImg} source={require('../assets/namepic1.png')} />

                <TouchableOpacity style={styles.firstHeader} onPress={() => navigation.navigate('help')}>
                    <Text style={styles.headerText}>HELP</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.secondHeader} onPress={() => {firebase.auth().signOut()}}>
                    <Text style={styles.secondHeaderText}>SIGN OUT</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.verifyBox}>

                <Text style={styles.htext1}>Finish signing up to start watching</Text>

                <Text style={styles.text2}>Almost there! We just sent an email to</Text>
            <Text style={styles.htext1}></Text>

                <Text style={styles.text3}>You're only a few Steps away from watching your favorite TV shows and movies.</Text>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('bottomtab')}>
                    <Text style={styles.buttonText}>Go to Main Screen</Text>
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
    verifyBox: {
        // backgroundColor: 'blue',
        width: '85%',
        height: '60%',
        marginLeft: '8%',
        marginTop: 20,
    },
    htext1: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'left',

    },
    text2: {
        fontSize: 24,
        textAlign: 'left',
        marginTop: 20,
        color: 'black'
    },
    text3: {
        fontSize: 22,
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
        marginTop: '35%',
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
        fontSize: 19,
        fontWeight: 'bold',
        // letterSpacing: 1,
    },
    secondHeader: {
        // marginRight: 5,
        flex: 1,
        textAlign: 'right',
        // marginRight: '2%',
    },
    firstHeader: {
        // marginRight: 5,
        marginLeft: '55%',
        flex: 1,
        textAlign: 'right',
    }
});
