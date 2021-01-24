import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Style from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import QRCode from 'react-native-qrcode-svg';

export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    let data = await AsyncStorage.getItem('email');
    let username = data.split('@');
    console.log(username);
    this.setState({username: username[0], data});
  }
  render() {
    let value = JSON.stringify(this.state.username);
    console.log(value);
    return (
      <View style={Style.container}>
        <QRCode
          value={`${value}`}
          logo={{
            uri:
              'https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/4c/cf/72/4ccf72f6-b2fa-036f-b81f-ec2574e6b30a/source/512x512bb.jpg',
          }}
          logoSize={100}
          logoBackgroundColor="transparent"
          size={300}
        />
        <View style={Style.nameWrapper}>
          <Text style={Style.text}>{this.state.username}</Text>
        </View>
      </View>
    );
  }
}
