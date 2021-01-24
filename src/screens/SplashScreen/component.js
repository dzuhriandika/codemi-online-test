import React, {Component} from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

export default class Login extends Component {
  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('Auth');
    }
  }

  performTimeConsumingTask = async () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve('result');
      }, 2000),
    );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={{
              uri:
                'https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/4c/cf/72/4ccf72f6-b2fa-036f-b81f-ec2574e6b30a/source/512x512bb.jpg',
            }}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
      </View>
    );
  }
}
