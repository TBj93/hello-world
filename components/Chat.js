import React from 'react';
import { View, Text, Platform, KeyboardAvoidingView } from 'react-native';
import { GiftedChat, Bubble} from 'react-native-gifted-chat'



// import firestore

const firebase = require('firebase');
require('firebase/firestore');





  
export default class Chat extends React.Component {

  constructor() {
    super();
    this.state = {
      messages: [],
      
    }

    if (!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
     
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8tMjFgpH3K0hEglIvz_V51iWXKnkVSt0",
  authDomain: "test-eb520.firebaseapp.com",
  projectId: "test-eb520",
  storageBucket: "test-eb520.appspot.com",
  messagingSenderId: "933257659465",
  appId: "1:933257659465:web:487344f74824234e2eab98",
  measurementId: "G-DQZKPQGD3E"
};
}

this.referenceChatMessages = firebase.firestore().collection("messages");






  }


  componentDidMount() {
  
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })

    this.referenceChatMessages = firebase.firestore().collection('messages');
    this.unsubscribe = this.referenceChatMessages.onSnapshot(this.onCollectionUpdate)

  }


  componentWillUnmount() {
    this.unsubscribe();
 }




  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
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
    //let name = this.props.route.params.name; // OR ...
    let { name } = this.props.route.params;
    this.props.navigation.setOptions({ title: name });
     let  {bgColor} = this.props.route.params;
    return (
    
      <View style={{flex:1, justifyContent: 'center', backgroundColor: bgColor}}>
        <GiftedChat
         renderBubble={this.renderBubble.bind(this)}
  messages={this.state.messages}
  onSend={messages => this.onSend(messages)}
  user={{
    _id: 1,
  }}
  
/>
{ Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null
 }
</View>
     
    )
  }
}