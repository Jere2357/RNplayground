import React, {Component} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {NativeRouter, Switch, Route} from 'react-router-native';
import {Header, Left, Body, Title} from 'native-base';

import BiometricsPage from './BiometricsPage';
import MapsPage from './MapsPage';
import FileImageChooserPage from './FileImageChooserPage';
import CameraPage from './CameraPage';
import QRCodeScannerPage from './QRCodeScannerPage';
import DocumentPage from './DocumentPage';

class MainPage extends Component {
  render() {
    return (
      <NativeRouter>
        <Switch>
          <Route
            exact
            path={'/'}
            render={({history}) => (
              <View style={styles.container}>
                <Header>
                  <Body>
                    <Title>React Native Playground</Title>
                  </Body>
                </Header>
                <View style={styles.buttonContainer}>
                  <Button
                    title={'Biometrics'}
                    onPress={() => history.push('/biometrics')}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <Button
                    title={'Maps'}
                    onPress={() => history.push('/maps')}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <Button
                    title={'File Chooser'}
                    onPress={() => history.push('/fileChooser')}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <Button
                    title={'Camera'}
                    onPress={() => history.push('/camera')}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <Button
                    title={'QR / Bar Code'}
                    onPress={() => history.push('/QRCode')}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <Button
                    title={'PDF Document'}
                    onPress={() => history.push('/document')}
                  />
                </View>
              </View>
            )}
          />
          <Route exact path={'/biometrics'} component={BiometricsPage} />
          <Route exact path={'/maps'} component={MapsPage} />
          <Route exact path={'/fileChooser'} component={FileImageChooserPage} />
          <Route exact path={'/camera'} component={CameraPage} />
          <Route exact path={'/QRCode'} component={QRCodeScannerPage} />
          <Route exact path={'/document'} component={DocumentPage} />
        </Switch>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(127, 237, 245, 1)',
    height: 800,
  },
  buttonContainer: {
    margin: 30,
  },
});

export default MainPage;
