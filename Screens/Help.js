import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking } from 'react-native';
import React, { useState } from 'react';
import { Entypo, AntDesign, MaterialCommunityIcons, FontAwesome5, Ionicons } from 'react-native-vector-icons';
import { CheckBox } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';

export default function Help({ navigation }) {

    const handleHelpUrl = () => {
        const forgotPasswordURL = 'https://help.netflix.com/en?fromApp=true&netflixsource=android';

        Linking.openURL(forgotPasswordURL).catch((err) =>
            console.error('Error opening URL: ', err)
        );
    };

    const handleRequestTitleUrl = () => {
        const forgotPasswordURL = 'https://help.netflix.com/en/titlerequest?netflixsource=android&fromApp=true';

        Linking.openURL(forgotPasswordURL).catch((err) =>
            console.error('Error opening URL: ', err)
        );
    };

    const handleFixConUrl = () => {
        const forgotPasswordURL = 'https://help.netflix.com/en/troubleshooting?fromApp=true&netflixsource=android';

        Linking.openURL(forgotPasswordURL).catch((err) =>
            console.error('Error opening URL: ', err)
        );
    };

    const handlePrivacyUrl = () => {
        const forgotPasswordURL = 'https://help.netflix.com/legal/privacy?netflixsource=android&fromApp=true';

        Linking.openURL(forgotPasswordURL).catch((err) =>
            console.error('Error opening URL: ', err)
        );
    };

    const handleTermOfUseUrl = () => {
        const forgotPasswordURL = 'https://help.netflix.com/legal/termsofuse?netflixsource=android&fromApp=true';

        Linking.openURL(forgotPasswordURL).catch((err) =>
            console.error('Error opening URL: ', err)
        );
    };

    return (
        <View style={styles.container}>

            <View style={styles.headerbox}>
                <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
                    <AntDesign name='arrowleft' size={30} color='black' />
                </TouchableOpacity>
                <Image style={styles.nameImg} source={require('../assets/namepic1.png')} />
            </View>

            <Text style={styles.htext1}>Find Help Online</Text>

            <View style={styles.Tcontainer}>

                <View>
                    <TouchableOpacity style={styles.text1Container} onPress={handleHelpUrl}>
                        <MaterialCommunityIcons style={styles.icon2} name='login-variant' size={30} color='blue' />
                        <Text style={styles.text}>Help Center</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.text2Container} onPress={handleRequestTitleUrl}>
                        <MaterialCommunityIcons style={styles.icon2} name='subtitles-outline' size={30} color='blue' />
                        <Text style={styles.text}>Request a title</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.text3Container} onPress={handleFixConUrl}>
                        <FontAwesome5 style={styles.icon2} name='tools' size={30} color='blue' />
                        <Text style={styles.text}>Fix a connection issue</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.text4Container} onPress={handlePrivacyUrl}>
                        <MaterialCommunityIcons style={styles.icon2} name='shield-check' size={30} color='blue' />
                        <Text style={styles.text}>Privacy Statement</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.text4Container} onPress={handleTermOfUseUrl}>
                        <Entypo style={styles.icon2} name='text-document' size={30} color='blue' />
                        <Text style={styles.text}>Term of Use</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.servicebox}>

                <Text style={styles.text2}>Contact</Text>

                <Text style={styles.text2}>Netflix Customer Service</Text>

                <Text style={styles.text3}>We'll connect the call for free using your internet connection</Text>

                <TouchableOpacity style={styles.button} onPress={() => alert('Connect with a live support agent.')}>
                    <Ionicons style={styles.icon3} name='call' size={30} color='white' />
                    <Text style={styles.buttonText}>CALL</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => alert('Connect with a live support agent.')}>
                    <Ionicons style={styles.icon3} name='chatbox-ellipses-sharp' size={30} color='white' />
                    <Text style={styles.buttonText}>CHAT</Text>
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
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: 1,
    },
    text2: {
        fontSize: 26,
        color: 'black',
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    text3: {
        fontSize: 18,
        color: 'black',
        letterSpacing: 1,
        textAlign: 'center',
        marginTop: '4%'
    },
    button: {
        flexDirection: 'row',
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 3,
        width: '45%',
        height: '20%',
        marginTop: 12,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        // fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: '10%',
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
        left: '35%',
        top: '25%',
        alignItems: 'center',

    },
    Tcontainer: {
        marginTop: '5%',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    text1Container: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        borderTopColor: 'grey',
        padding: 10,

    },
    text2Container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        padding: 12,
    },
    text3Container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        padding: 12,
    },
    text4Container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        padding: 12,
    },
    text: {
        fontSize: 20,
        color: 'blue',
    },
    icon2: {
        marginRight: '5%',
    },
    icon3: {
        marginLeft: '8%',
    },
    servicebox: {
        width: '90%',
        height: '36%',
        // backgroundColor: 'blue',
        alignItems: 'center',
        marginLeft: '5%',
        marginTop: '18%',
    }
});
