import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, TurboModuleRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Carousel from './Screens/Carousel';
import Signup from './Screens/Signup';
import Login from './Screens/Login';
import Signup2 from './Screens/Signup2';

const stack = createNativeStackNavigator();

const LogoTitle = () => (
  <Image
    style={{ width: 180, height: 50, marginLeft: -40 }}
    source={require('./assets/namepic1.png')}
  />
);

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Carousel'>
        <stack.Screen name='Carousel' component={Carousel} options={{ headerShown: false }}/>
        <stack.Screen name='Signup' component={Signup} options={{ headerShown: false }}/>
        <stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
        <stack.Screen name='signup2' component={Signup2} options={{ headerShown: false }}/>
      </stack.Navigator>
    </NavigationContainer>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
  },
});
