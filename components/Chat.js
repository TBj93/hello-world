import React from 'react';
import { View, Text} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'



export default class Chat extends React.Component {

  constructor() {
    super();
    this.state = {
      messages: [],
    }
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
  }



  render() {

     let  {bgColor} = this.props.route.params;
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: bgColor}}>
        <Text>Hello Screen2!</Text>

        <GiftedChat
  messages={this.state.messages}
  onSend={messages => this.onSend(messages)}
  user={{
    _id: 1,
  }}
/>
      </View>
    )
  }
}