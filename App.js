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

const stack = createNativeStackNavigator();


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

  if (initializing) return null;

  if (!user) {
    return (
      <stack.Navigator>
        <stack.Screen name='Carousel' component={Carousel} options={{ headerShown: false }} />
        <stack.Screen name='Signup' component={Signup} options={{ headerShown: false }} />
        <stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <stack.Screen name='signup2' component={Signup2} options={{ headerShown: false }} />
      </stack.Navigator>
    );
  }

  return(
    <stack.Navigator>
    <stack.Screen name='main' component={Main}  options={{ headerShown: false }}/>
    </stack.Navigator>
  )

  

}

export default () =>{
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}