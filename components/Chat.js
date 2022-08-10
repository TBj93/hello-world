import React from 'react';
import { View, Text} from 'react-native';


export default class Screen2 extends React.Component {


    componentDidMount(){
        let name = this.props.route.params.name; // OR ...
        // let { name } = this.props.route.params;
        this.props.navigation.setOptions({ title: name });
    }


  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello Screen2!</Text>
      </View>
    )
  }
}