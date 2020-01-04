/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MainPage from './src/containers/MainPage';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      splashScreen: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        splashScreen: false,
      });
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.splashScreen ? (
          <View>
            <Text style={styles.title}>React Native Playground</Text>
            <Text>Loading.....</Text>
          </View>
        ) : (
          <MainPage />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(127, 237, 245, 1)',
    height: 800,
  },
  title: {
    fontSize: 30,
  },
  loading: {
    textAlign: 'center',
  },
});
