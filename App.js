import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, TurboModuleRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Carousel from './Screens/Carousel';
import Signup from './Screens/Signup';
import Login from './Screens/Login';
import Signup2 from './Screens/Signup2';
import { firebase } from './Firebase/Config';
import { useEffect, useState } from 'react';
import Main from './Screens/Main';
import Help from './Screens/Help';
import Verify from './Screens/Verify';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons, Feather, AntDesign, Entypo, FontAwesome, MaterialIcons, Ionicons} from 'react-native-vector-icons';
import Home from './Screens/Home';
import Games from './Screens/Games';
import NewHot from './Screens/NewHot';
import MyNetflix from './Screens/MyNetflix';
import MovieScreen from './Screens/MovieScreen';
import { Provider } from 'react-redux';
import store from './src/Store';


const stack = createNativeStackNavigator();
const bottomTab = createBottomTabNavigator();


function BottomTab() {
  return (
    <bottomTab.Navigator screenOptions={{
      headerShown: false, headerStyle: { backgroundColor: 'red' },
      tabBarStyle: {
        position: 'fixed', bottom: 0, left: 0, right: 0, elevation: 0, backgroundColor: 'black', borderColor: 'black',
        height: '10%',
      },
      tabBarLabelStyle: { fontSize: 15, color: '#ffffff', marginBottom: 10, }
    }}>
      <bottomTab.Screen name='Home' component={Home} options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={26} color="white"/>
          ),
        }}/>
      <bottomTab.Screen name='Games' component={Games} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="game-controller" size={26} color="white" />
          ),
        }}/>

      <bottomTab.Screen name='NewHot' component={NewHot} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="movie-play" size={26} color="white" />
          ),
        }}/>
        <bottomTab.Screen name='MyNetflix' component={MyNetflix} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={26} color="white" />
          ),
        }}/>
    </bottomTab.Navigator>
  )
}

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();


  //handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const person = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return person;
  }, []);

  // if (initializing) return null;

  // if (!user) {
  //   return (
  //     <stack.Navigator>
  //       <stack.Screen name='Carousel' component={Carousel} options={{ headerShown: false }} />
  //       <stack.Screen name='Signup' component={Signup} options={{ headerShown: false }} />
  //       <stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
  //       <stack.Screen name='signup2' component={Signup2} options={{ headerShown: false }} />
  //       <stack.Screen name='help' component={Help} options={{ headerShown: false }} />

  //     </stack.Navigator>
  //   );
  // }

  return(
    <stack.Navigator>
    {/* <stack.Screen name='verify' component={Verify} options={{ headerShown: false }} />
    <stack.Screen name='help' component={Help} options={{ headerShown: false }} /> */}
    <stack.Screen name='bottomtab' component={BottomTab}  options={{ headerShown: false }}/>
    <stack.Screen name='Movie' component={MovieScreen} options={{ headerShown: false }}/>
    </stack.Navigator>
  )

  

}

export default () =>{
  return(
    <Provider store={store}>
      <NavigationContainer>
      <App/>
    </NavigationContainer>
    </Provider>
    
  )
}



// export default function App() {
//   return (
//     <NavigationContainer>
//       <stack.Navigator initialRouteName='Carousel'>
//         <stack.Screen name='Carousel' component={Carousel} options={{ headerShown: false }}/>
//         <stack.Screen name='Signup' component={Signup} options={{ headerShown: false }}/>
//         <stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
//         <stack.Screen name='signup2' component={Signup2} options={{ headerShown: false }}/>
//       </stack.Navigator>
//     </NavigationContainer>
//   );

// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
//   },
// });
