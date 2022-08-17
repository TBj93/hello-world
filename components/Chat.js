import React from 'react';
import { View, Text, Platform, KeyboardAvoidingView } from 'react-native';
import { GiftedChat, Bubble} from 'react-native-gifted-chat'



import firebase from "firebase";
import "firebase/firestore";


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
        uid: user.uid,
        messages: [],
      });
      this.unsubscribe = this.referenceChatMessages
        .orderBy("createdAt", "desc")
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