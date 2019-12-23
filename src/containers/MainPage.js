import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';

// import CurrencyPage from '../containers/CurrencyPage';

export default class MainPage extends Component {
  render() {
    return (
      <View>
        <Button title={'Currency'} onPress={() => alert('Sir sir sir')} />
        <Button title={'Jokes'} />
      </View>
    );
  }
}
