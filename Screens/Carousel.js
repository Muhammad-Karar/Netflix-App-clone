import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking,} from 'react-native';
import Swiper from 'react-native-swiper';
import { Entypo } from 'react-native-vector-icons';
import React, { useState } from 'react';

const carouselData = [
  { image: require('../assets/sp1.jpg'), text: 'Unlimited movies, TV shows & more', text2: 'Watch anywhere. Cancel anytime.' },
  { image: require('../assets/sp2.jpg'), text: 'There s a plan for every fan', text2: 'Plan start at Rs 250' },
  { image: require('../assets/sp3.jpg'), text: 'Cancel online anytime', text2: 'Join today, no reason to wait' },
  { image: require('../assets/sp4.jpg'), text: 'Watch everywhere', text2: 'Stream on your phone, tablet, laptop and TV' },
];

const handlePrivacy = () => {
  // Replace 'https://example.com/forgot-password' with your actual forgot password URL
  const privacyURL = 'https://help.netflix.com/legal/privacy?netflixsource=android&fromApp=true';

  // Open the URL in the device's default browser
  Linking.openURL(privacyURL).catch((err) =>
    console.error('Error opening URL: ', err)
  );
};






export default function Carousel({ navigation }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const handleDropdownPress = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleOptionPress = (option) => {
    // Implement logic based on the selected option
    if (option === 'Privacy') {
      // Handle Privacy option
      console.log('Privacy option selected');
    } else if (option === 'FAQ') {
      // Handle FAQ option
      console.log('FAQ option selected');
    }

    // Close the dropdown
    setDropdownVisible(false);
  };

  return (
    <Swiper style={styles.wrapper} showsButtons={false} loop={false} horizontal={true}
      dotColor='#d3d3d3' activeDotColor='red' dotStyle={{ marginBottom: 70, width: 12, height: 12, borderRadius: 50, marginHorizontal: 5 }}
      activeDotStyle={{ marginBottom: 70, width: 12, height: 12, borderRadius: 50, marginHorizontal: 5 }}>

      {carouselData.map((item, index) => (
        <View key={index} style={styles.slide}>

          <Image source={item.image} style={styles.backgroundImage} resizeMode="cover" />

          <View style={styles.topHeader}>

            <Image source={require('../assets/logo.png')} style={styles.logo} />

            <TouchableOpacity style={styles.firstHeader} onPress={handlePrivacy}>
              <Text style={styles.headerText}>PRIVACY</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.secondHeader} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.secondHeaderText}>LOG IN</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleDropdownPress}>
        <Entypo name='dots-three-vertical' size={24} color='#d3d3d3' />
      </TouchableOpacity>

      {isDropdownVisible && (
        <View style={styles.dropdownContainer}>
          <TouchableOpacity onPress={() => handleOptionPress('Privacy')}>
            <Text style={styles.optionText}>Privacy</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOptionPress('FAQ')}>
            <Text style={styles.optionText}>FAQ</Text>
          </TouchableOpacity>
        </View>
      )}

          </View>
          <View style={styles.overlay}>

            <Text style={styles.text}>{item.text}</Text>

            <Text style={styles.text2}>{item.text2}</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>

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
  dropdownContainer: {
    position: 'absolute',
    top: 40, // Adjust the top position based on your layout
    right: 10, // Adjust the right position based on your layout
    backgroundColor: 'white',
    elevation: 5,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d3d3d3',
  },
  optionText: {
    fontSize: 16,
    padding: 10,
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
    fontSize: 50,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text2: {
    color: '#fff',
    fontSize: 25,
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
    position: 'relative',
    marginTop: '12%',
    marginLeft: 5,
    marginRight: 5,
    // backgroundColor: 'blue',
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
    marginLeft: 110,
    flex: 1,
    textAlign: 'right',
  }
});
