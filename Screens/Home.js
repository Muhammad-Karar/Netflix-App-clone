import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { firebase } from '../Firebase/Config';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>

        <Image source={require('../assets/logo.png')} style={styles.logo} />



        {/* <TouchableOpacity>
          <Entypo name='dots-three-vertical' size={24} color='#d3d3d3' />
        </TouchableOpacity> */}

      </View>
      <Text style={styles.text}>Welcome to Home Screen of Netflix</Text>
      {/* <TouchableOpacity style={styles.button} onPress={() => {firebase.auth().signOut()}}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `rgba(0, 0, 0, 0.9)`,
    alignItems: 'center',
    // justifyContent: 'center',
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
  text: {
    color: 'white',

  },
  topHeader: {
    position: 'relative',
    marginTop: '10%',
    marginLeft: 5,
    marginRight: 5,
    // backgroundColor: 'black',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 3,
    height: '10%'
  },
  logo: {
    width: 50,
    height: 50,
    marginLeft: 5,
  },
  headerText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  secondHeaderText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',

  },
  secondHeader: {
    // marginRight: 5,
    flex: 1,
    textAlign: 'right',
    marginLeft: 25,
  },
  firstHeader: {
    // marginRight: 5,
    marginLeft: 90,
    flex: 1,
    textAlign: 'right',
  }
});
