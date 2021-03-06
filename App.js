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
import BiometricsPage from './src/containers/BiometricsPage';
import MapsPage from './src/containers/MapsPage';
import FileImageChooserPage from './src/containers/FileImageChooserPage';
import CameraPage from './src/containers/CameraPage';
import QRCodeScannerPage from './src/containers/QRCodeScannerPage';
import DocumentPage from './src/containers/DocumentPage';

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
      <View>
        {this.state.splashScreen ? (
          <View style={styles.container}>
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
