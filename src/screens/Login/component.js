/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
import React, {Component} from 'react';
import {Text, View, ToastAndroid, TextInput} from 'react-native';
import {Button} from 'native-base';
import Style from './styles';
import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends Component {
  static navigationOptions = {header: null};
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }
  _onPress = async () => {
    const {email} = this.state;
    const payload = {
      email: email,
    };
    if (email === '') {
      ToastAndroid.show('Masukan Email', ToastAndroid.SHORT);
    } else {
      try {
          await AsyncStorage.setItem('email', payload.email);
          this.props.navigation.navigate('App');
      } catch (error) {
        ToastAndroid.show('error.networkError', ToastAndroid.SHORT);
      }
    }
  };
  render() {
    const {email} = this.state;
    return (
      <View style={Style.mainScreen}>
        <View style={Style.container}>
          <View style={Style.form}>
            <View style={Style.titleWrapper}>
              <Text style={Style.title}>Masuk</Text>
            </View>
            <View style={Style.labelWrapper}>
              <Text style={Style.label}>Email</Text>
            </View>
            <View style={Style.inputWrapper}>
              <TextInput
                value={email}
                placeholderTextColor="#C4C4C4"
                placeholder="Email"
                underlineColorAndroid="transparent"
                style={Style.input}
                onChangeText={email => this.setState({email})}
              />
            </View>
          </View>
          <Button onPress={this._onPress} style={Style.btn}>
            <Text uppercase={false} style={Style.btnTeks}>
              Masuk
            </Text>
          </Button>
        </View>
      </View>
    );
  }
}
