import React from 'react';
import { View, Text, Platform, KeyboardAvoidingView } from 'react-native';
import { GiftedChat, Bubble, InputToolbar} from 'react-native-gifted-chat'

import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import CustomActions from './CustomActions';

import * as Location from 'expo-location';
import MapView from 'react-native-maps';

import firebase from "firebase";
import "firebase/firestore";

import NetInfo from '@react-native-community/netinfo';

import AsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyCKHPR_S_ltwETGbh8YkQwcTKB6JAMq1GE",
  authDomain: "chatpro-b4381.firebaseapp.com",
  projectId: "chatpro-b4381",
  storageBucket: "chatpro-b4381.appspot.com",
  messagingSenderId: "23525274170",
  appId: "1:23525274170:web:6904773c060d7247117b03"
};


export default class Chat extends React.Component {
  constructor(props) {
    super();
    this.state = {
      messages: [],
      uid: 0,
   
      user: {
        _id: '',
        name: '',
      },
isConnected: null,
image: null,
location: null

    };





if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
// Reference to the Firestore collection "messages"
this.referenceChatMessages = firebase.firestore().collection("messages");
}

onCollectionUpdate = (querySnapshot) => {
  const messages = [];
  // go through each document
  querySnapshot.forEach((doc) => {
    // get the QueryDocumentSnapshot's data
    let data = doc.data();
    messages.push({
      _id: data._id,
      text: data.text,
      createdAt: data.createdAt.toDate(),
      user: {
        _id: data.user._id,
        name: data.user.name,
      },
   
    });
  });
  this.setState({
    messages: messages
  });
};

async getMessages() {
  let messages = '';
  try {
    messages = await AsyncStorage.getItem('messages') || [];
    this.setState({
      messages: JSON.parse(messages)
    });
  } catch (error) {
    console.log(error.message);
  }
};


  componentDidMount() {

 
   //  let name = this.props.route.params.name; // OR ...
  let { name } = this.props.route.params;
     this.props.navigation.setOptions({ title: name });

// check for user online and decide to get data from async storage or firebase
     NetInfo.fetch().then(connection => {
      if (connection.isConnected) {
        console.log('online');
        this.setState({
      isConnected: true
      })



      } else {
    
        console.log('offline');
        this.setState({
          isConnected: false
        })


        this.getMessages()
      }
  
     // Reference to load messages from Firebase
     this.referenceChatMessages = firebase.firestore().collection('messages');

     // Authenticate user anonymously
     this.authUnsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
      this.setState({
        uid: user.uid,
        messages: [],
        user: {
          _id: user.uid,
          name: name,
        } 
      });
      this.unsubscribe = this.referenceChatMessages
        .orderBy("createdAt", "desc")
        .onSnapshot(this.onCollectionUpdate);
    });

  });
   }
  componentWillUnmount() {
    if (this.state.isConnected == true) {

    this.unsubscribe();
    this.authUnsubscribe();
    }
 }


 async saveMessages() {
  try {
    await AsyncStorage.setItem('messages', JSON.stringify(this.state.messages));
  } catch (error) {
    console.log(error.message);
  }
}

 
addMessages(message) { 

  this.referenceChatMessages.add({
     uid: this.state.uid,
    _id: message._id,
    text: message.text || "",
    createdAt: message.createdAt,
    user: message.user,
  });
}


// delete function for testing
async deleteMessages() {
  try {
    await AsyncStorage.removeItem('messages');
    this.setState({
      messages: []
    })
  } catch (error) {
    console.log(error.message);
  }
}


  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages), }), () => { 
        this.addMessages(this.state.messages[0]);
        this.saveMessages()
      //  this.deleteMessages()
    })
 
  }
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#000'
          }
        }}
      />
    )
  }


  renderInputToolbar(props) {
    if (this.state.isConnected == false) {
    } else {
      return(
        <InputToolbar
        {...props}
        />
      );
    }
  }

  renderCustomActions = (props) => {
    return <CustomActions {...props} />;
  };

  render() {

     let  {bgColor} = this.props.route.params;
    return (
    
      <View style={{flex:1, justifyContent: 'center', backgroundColor: bgColor}}>
        <GiftedChat
            renderInputToolbar={this.renderInputToolbar.bind(this)}
            renderActions={this.renderCustomActions}
         renderBubble={this.renderBubble.bind(this)}
  messages={this.state.messages}
  onSend={messages => this.onSend(messages)}
  user={this.state.user}
  
/>
{ Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null
 }
</View>
     
    )
  }
}