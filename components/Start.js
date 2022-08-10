



// import react native gesture handler
import 'react-native-gesture-handler';



import React, { Component } from 'react';
import {  View, Text,  Button,  } from 'react-native';




export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
 
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello Start</Text>
        <Button
          title="Go to Chat"
          onPress={() => this.props.navigation.navigate('Chat')}
        />
      </View>
    )
  }
}