import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';



const carouselData = [
  { id: '1', image: require('./assets/sp1.jpg'), text: 'Text for Screen 1' },
  { id: '2', image: require('./assets/sp1.jpg'), text: 'Text for Screen 2' },
  { id: '3', image: require('./assets/sp1.jpg'), text: 'Text for Screen 3' },
  { id: '4', image: require('./assets/sp1.jpg'), text: 'Text for Screen 4' },
];
export default function App() {

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.backgroundImage} resizeMode="cover" />
      <View style={styles.overlay}>
        <Text style={styles.text}>{item.text}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Click me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
  
      <FlatList
      data={carouselData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    />
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
  },
  slide: {
    flex: 1,
    width: '100%',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
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
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
