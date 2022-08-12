



// import react native gesture handler
import 'react-native-gesture-handler';



import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, TouchableOpacity, ImageBackground,
 } from 'react-native';

import BackgroundImage from "../assets/BackgroundImage.png";
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
        <ImageBackground source={BackgroundImage} resizeMode="cover" style={styles.image}>
        <View style={styles.titleFrame}>
          <Text style={styles.title}>ChatPro</Text>
              </View>

              <View style={styles.box}>
       
       <TextInput
         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
         onChangeText={(name) => this.setState({name})}
         value={this.state.name}
         placeholder='Your name'
       />
       <Text>Your name: {this.state.name}</Text>


               <View style={styles.chooseBox}>
       <Text style={styles.chooseTtitle}>Choose Background Color</Text>
       </View>
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

<Pressable style={styles.button}
        
          onPress={() => this.props.navigation.navigate('Chat', { 
            name: this.state.name,
            bgColor: this.state.bgColor
           })}
        >
  <Text style={styles.pressText}>Start Chatting</Text>
</Pressable>
</View>


</ImageBackground>
      </View>
    )
  }
  
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

 chooseBox: {
    marginRight: "auto",
    paddingLeft: 15,
    width: "80%",
  },

  chooseTtitle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    opacity: 1,
    marginBottom: 10,
  },

  box: {
    backgroundColor: "#FFFFFF",
    height: "44%",
    width: "88%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    width: "80%",
    height: 70,
    borderRadius: 6,
    backgroundColor: "#757083",
    alignItems: "center",
    justifyContent: "center",
  },
  pressText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  title : {
    fontSize: 45,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  inputBox: {
    borderWidth: 2,
    borderRadius: 1,
    borderColor: "grey",
    width: "88%",
    height: 60,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  colorFrame: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%"
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


 
});
