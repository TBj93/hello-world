

// import the screens

// import react native gesture handler
import 'react-native-gesture-handler';

// import react Navigation
// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput,Button,  Text,
    TextInput,

    ImageBackground, } from 'react-native';

import BackgroundImage from "../assets/Background Image.png";


export default class Start extends React.Component()   {
 constructor(props) {
   super(props);
   this.state = { text: '' };
 }

 render() {
   return (
    

     <View style={{flex:1, justifyContent:'center'}}>
           <ImageBackground source={BackgroundImage}
          resizeMode="cover"
          style={styles.backgroundImage}
        >
       <TextInput
         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
         placeholder='Type here ...'
       />
       <Text>You wrote: {this.state.text}</Text>
       <Button
  onPress={() => {
    this.alertMyText({text: this.state.text});
  }}
  title="Press Me"
/>
</ImageBackground>
     </View>

   );
 }
}