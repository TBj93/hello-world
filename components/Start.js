



// import react native gesture handler
import 'react-native-gesture-handler';



import React, { Component } from 'react';
import {  View, Text, TextInput, Button,  
 } from 'react-native';

import BackgroundImage from "../assets/Background Image.png";


export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: '' 
      
    
    };
  }
 
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        
        
       <TextInput
         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
         placeholder='Type here ...'
       />
       <Text>Your name: {this.state.text}</Text>
       <Button
  onPress={() => {
    this.alertMyText({text: this.state.text});
  }}
  title="Press Me"
/>

        
        <Text>Hello Start</Text>
        <Button
          title="Go to Chat"
          onPress={() => this.props.navigation.navigate('Chat')}
        />
      </View>
    )
  }
}