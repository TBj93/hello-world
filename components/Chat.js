import React from 'react';
import { View, Text, Platform, KeyboardAvoidingView } from 'react-native';
import { GiftedChat, Bubble} from 'react-native-gifted-chat'

// Importing Firestore 
const firebase = require('firebase');
require('firebase/firestore');

export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      uid: 0,
      user: {
        _id: '',
        name: '',
      },
    };

    // initializing Firebase 
const firebaseConfig = {
  apiKey: "AIzaSyD8tMjFgpH3K0hEglIvz_V51iWXKnkVSt0",
  authDomain: "test-eb520.firebaseapp.com",
  projectId: "test-eb520",
  storageBucket: "test-eb520.appspot.com",
  messagingSenderId: "933257659465",
  appId: "1:933257659465:web:487344f74824234e2eab98",
  measurementId: "G-DQZKPQGD3E"
};

if (!firebase.apps.length) {
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
    messages,
  });
};


  componentDidMount() {

 
     let name = this.props.route.params.name; // OR ...
  //   let { name } = this.props.route.params;
     this.props.navigation.setOptions({ title: name });

     // Reference to load messages from Firebase
     this.referenceChatMessages = firebase.firestore().collection('messages');

     // Authenticate user anonymously
     this.authUnsubscribe = firebase.auth().onAuthStateChanged((user) => {
       if (!user) {
         firebase.auth().signInAnonymously();
       }
       this.setState({
        
         messages: [],
         user: {
           _id: user.uid,
           name: name,
         },
       
       });
       this.unsubscribe = this.referenceChatMessages
         .orderBy('createdAt', 'desc')
         .onSnapshot(this.onCollectionUpdate);
     });
   }
  componentWillUnmount() {
    this.unsubscribe();
 }

 
addMessages() { 

  this.referenceChatMessages.add({
    _id: message._id,
    text: message.text || null,
    createdAt: message.createdAt,
      user: message.user,
      uid: this.state.uid,
  });
}



  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages), }), () => { this.addMessages(this.state.messages[0]);
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

  render() {
   
     let  {bgColor} = this.props.route.params;
    return (
    
      <View style={{flex:1, justifyContent: 'center', backgroundColor: bgColor}}>
        <GiftedChat
         renderBubble={this.renderBubble.bind(this)}
  messages={this.state.messages}
  onSend={messages => this.onSend(messages)}
  user={{
    _id: this.state.user._id,
    name: this.state.name,

  }}
  
/>
{ Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null
 }
</View>
     
    )
  }
}