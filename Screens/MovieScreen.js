import { Text, StyleSheet, View, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { firebase } from '../Firebase/Config';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons, AntDesign, FontAwesome } from 'react-native-vector-icons';
import { ThemeConsumer } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';


var { width, height } = Dimensions.get('window');

export default function MovieScreen(){

    let movieName = 'Ant-Man and the Wasp: Quantumania';
    const navigation = useNavigation();
    const [isFavorite, toggleFavorite] = useState(false);
    const {params: item} = useRoute();
    useEffect(() =>{
        //call Movie detail api
    },[item]);


    return(
        <ScrollView contentContainerStyle={{paddingBottom: 20}} style={{flex: 1, backgroundColor: `rgba(0, 0, 0, 0.9)`}}>
            <View style={{width: '100%'}}>
                <SafeAreaView style={styles.sarea}>

                    <TouchableOpacity onPress={() => navigation.goBack()} style={{padding: 1}}>
                    <Ionicons name='chevron-back' size={30} color='white' />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => toggleFavorite(!isFavorite)} style={{padding: 1}}>
                    <AntDesign name='heart' size={30} color={isFavorite? 'red' :  'white'} />
                    </TouchableOpacity>
                    
                </SafeAreaView>

                <View>
                    <Image source={require('../assets/m2.jpg')} 
                    style={{width, height: height*0.55}}/>

                    <LinearGradient colors={['transparent', 'rgba(23,23,23,0.9)', 'rgba(23,23,23,1)']}
                    style={{width, height: height*0.4, position: 'absolute', bottom: 0}} 
                    start={{x: 0.5, y: 0}}
                    end={{x: 0.5, y: 1}}/>
                </View>

            </View>

            <View style={{marginTop: -(height*0.09), marginBottom: 3}}>
                <Text style={styles.text1}>
                    {movieName}
                </Text>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center',
  },
  button: {
    backgroundColor: 'black',
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
  sarea:{
    position: 'absolute',
    zIndex: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    // backgroundColor: 'red'
  },
  icon: {
    position: 'absolute',
    left: '0%',
    top: '25%',
    // backgroundColor: 'red',
    width: 30,
    height: 30,

    },
    text1:{
        color: 'white',
        textAlign :'center',
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 3,
    }
});
