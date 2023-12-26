import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { firebase } from '../Firebase/Config';

export default function MyNetflix(){
    return(
        <View style={styles.container}>
            <Text>Welcome to MyNetflix Screen of Netflix</Text>
            {/* <TouchableOpacity style={styles.button} onPress={() => {firebase.auth().signOut()}}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity> */}
        </View>
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
});
