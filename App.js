import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import the screens
import Start from './components/Start';
import Chat from './components/Chat';

// import react native gesture handler
import 'react-native-gesture-handler';

// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// create navigator
const Stack = createStackNavigator();

// import firestore

const firebase = require('firebase');
require('firebase/firestore');


export default function App() {


    
    const firebaseConfig = {
      apiKey: "AIzaSyD8tMjFgpH3K0hEglIvz_V51iWXKnkVSt0",
      authDomain: "test-eb520.firebaseapp.com",
      projectId: "test-eb520",
      storageBucket: "test-eb520.appspot.com",
      messagingSenderId: "933257659465",
      appId: "1:933257659465:web:487344f74824234e2eab98",
      measurementId: "G-DQZKPQGD3E"
    }   

    if (!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
      }
 


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
      >
        <Stack.Screen
          name="Start"
          component={Start}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

