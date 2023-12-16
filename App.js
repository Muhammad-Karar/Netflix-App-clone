import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Carousel from './Screens/Carousel';


const stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/logo.png')}
    />
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Carousel' screenOptions={{headerShown: false, headerStyle: {backgroundColor: 'black'}}}>
        <stack.Screen name='Carousel' component={Carousel}/>
      </stack.Navigator>
    </NavigationContainer>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
  },
});
