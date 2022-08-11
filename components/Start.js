



// import react native gesture handler
import 'react-native-gesture-handler';



import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity 
 } from 'react-native';

import BackgroundImage from "../assets/Background Image.png";
import { Directions } from 'react-native-gesture-handler';


export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '', 
      bgColor: this.colors.blue,
    
    };
  }

 

  colors = {
    red: "#890000",
    yellow: "#FFFF00",
    blue: "#1B70A0",
    green: "#1DA01B",
  };

  setBgColor = (color) =>    this.setState({ bgColor: color });

 
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'  }}>
        
        
       <TextInput
         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
         onChangeText={(name) => this.setState({name})}
         value={this.state.name}
         placeholder='Your name'
       />
       <Text>Your name: {this.state.name}</Text>
       <View style={styles.colorFrame}>

       <TouchableOpacity style={styles.color1}
  onPress={() => 
    this.setBgColor(this.colors.green)
  }
>
</TouchableOpacity>

<TouchableOpacity style={styles.color2}
  onPress={() => 
    this.setBgColor(this.colors.red)
  }
>
</TouchableOpacity>

<TouchableOpacity style={styles.color3}
  onPress={() => 
    this.setBgColor(this.colors.yellow)
  }
>
</TouchableOpacity>

<TouchableOpacity style={styles.color4}
  onPress={() => 
    this.setBgColor(this.colors.blue)
  }
>
</TouchableOpacity>
</View>

        <Button
          title="Go to Chat"
          onPress={() => this.props.navigation.navigate('Chat', { 
            name: this.state.name,
            bgColor: this.state.bgColor

           })}
        />
      </View>
    )
  }
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faebd7",
    alignItems: 'center',
    justifyContent: 'center',
  },
color1: {
  backgroundColor: "green",
  padding: 10,
  width: 50,
  height: 50,
  borderRadius:25
},
color2: {
  backgroundColor: "red",
  padding: 10,
  width: 50,
  height: 50,
  borderRadius:25
},
color3: {
  backgroundColor: "yellow",
  padding: 10,
  width: 50,
  height: 50,
  borderRadius:25
},
color4: {
  backgroundColor: "blue",
  padding: 10,
  width: 50,
  height: 50,
  borderRadius:25
},
colorFrame: {
  flexDirection: "row",
  justifyContent: "space-between",
  width: "80%"
}

 
});
