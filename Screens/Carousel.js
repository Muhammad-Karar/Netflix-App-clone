import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { Entypo } from 'react-native-vector-icons'


const carouselData = [
  { image: require('../assets/sp1.jpg'), text: 'Unlimited movies, TV shows & more', text2: 'Watch anywhere. Cancel anytime.' },
  { image: require('../assets/sp2.jpg'), text: 'There s a plan for every fan', text2: 'Plan start at Rs 250'},
  { image: require('../assets/sp3.jpg'), text: 'Cancel online anytime', text2: 'Join today, no reason to wait' },
  { image: require('../assets/sp4.jpg'), text: 'Watch everywhere', text2: 'Stream on your phone, tablet, laptop and TV' },
];


export default function Carousel() {

  return (
    <Swiper style={styles.wrapper} showsButtons={false} loop={false} horizontal={true}
      dotColor='#d3d3d3' activeDotColor='red' dotStyle={{ marginBottom: 70, width: 12, height: 12, borderRadius: 50, marginHorizontal: 5 }}
      activeDotStyle={{ marginBottom: 70, width: 12, height: 12, borderRadius: 50, marginHorizontal: 5 }}>
      {carouselData.map((item, index) => (
        <View key={index} style={styles.slide}>
          <Image source={item.image} style={styles.backgroundImage} resizeMode="cover" />
          <View style={styles.topHeader}>
            <Image source={require('../assets/logo.png')} style={styles.logo}/>
            <Text style={styles.headerText}>LOG IN</Text>
            <Text style={styles.secondHeaderText}>PRIVACY</Text>
            <Entypo name='dots-three-vertical' size={24} color='black'/>
          </View>
          <View style={styles.overlay}>
            <Text style={styles.text}>{item.text}</Text>
            <Text style={styles.text2}>{item.text2}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>

        </View>

      ))}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
  },
  wrapper: {},
  slide: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    // shadowColor: '#800080',
    // shadowOffset: {
    //   width: 6,
    //   height: 6
    // },
    // shadowOpacity: 0.6,
    // shadowRadius: 4,
    // elevation: 10,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    
  },
  text: {
    color: '#fff',
    fontSize: 40,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text2: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 80,
    textAlign: 'center'
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 3,
    width: '105%',
    height: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    // fontWeight: 'bold',
    textAlign: 'center',

  },
  topHeader: {
    position: 'absolute',
    marginTop: 45,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: 'blue',
    width: 400,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 50,
    height: 50,
  },
  headerText: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 100,
    flex: 1,
  textAlign: 'right',
  },
  secondHeaderText: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 20, 
    flex: 1,
    textAlign: 'right',
  }
});