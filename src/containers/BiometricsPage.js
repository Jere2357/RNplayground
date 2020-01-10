import React, {Component} from 'react';
import ReactNativeBiometrics from 'react-native-biometrics';
import {View, Button, StyleSheet} from 'react-native';
import {Header, Left, Body, Title} from 'native-base';

class BiometricsPage extends Component {
  constructor(props) {
    super(props);
  }

  async isSensorAvailable() {
    //isSensorAvailable()

    ReactNativeBiometrics.isSensorAvailable().then(resultObject => {
      const {available, biometryType} = resultObject;

      if (available && biometryType === ReactNativeBiometrics.TouchID) {
        alert('TouchID is supported');
      } else if (available && biometryType === ReactNativeBiometrics.FaceID) {
        alert('FaceID is supported');
      } else if (
        available &&
        biometryType === ReactNativeBiometrics.Biometrics
      ) {
        alert('Biometrics is supported');
      } else {
        alert('Biometrics not supported');
      }
    });
  }

  async createKeys() {
    // createKeys()

    ReactNativeBiometrics.createKeys('Confirm fingerprint')
      .then(resultObject => {
        const {publicKey} = resultObject;
        alert(publicKey);
        // sendPublicKeyToServer(publicKey)
      })
      .catch(() => alert('biometrics not supported'));
  }

  async biometricKeysExists() {
    //biometricKeysExist()

    ReactNativeBiometrics.biometricKeysExist().then(resultObject => {
      const {keysExist} = resultObject;

      if (keysExist) {
        alert(keysExist + ' Keys exist');
      } else {
        alert(keysExist + ' Keys do not exist or were deleted');
      }
    });
  }

  async deleteKeys() {
    // //deleteKeys()

    ReactNativeBiometrics.deleteKeys().then(resultObject => {
      const {keysDeleted} = resultObject;

      if (keysDeleted) {
        alert(keysDeleted + ' Successful deletion');
      } else {
        alert(
          keysDeleted +
            ' Unsuccessful deletion because there were no keys to delete',
        );
      }
    });
  }

  async createSignature() {
    let epochTimeSeconds = Math.round(new Date().getTime() / 1000).toString();
    let payload = epochTimeSeconds + 'Current Date for Creating finger print';

    ReactNativeBiometrics.createSignature({
      promptMessage: 'Sign in',
      payload: payload,
    })
      .then(resultObject => {
        const {success, signature} = resultObject;

        if (success) {
          alert(signature);
          // verifySignatureWithServer(signature, payload)
        }
      })
      .catch(() => alert('Failed creating signature key'));
  }

  async simplePrompt() {
    //simplePrompt()

    ReactNativeBiometrics.simplePrompt({
      promptMessage: 'Checking if biometric is provided in this device',
    })
      .then(resultObject => {
        const {success} = resultObject;

        if (success) {
          alert('successful biometrics provided');
        } else {
          alert('user cancelled biometric prompt');
        }
      })
      .catch(() => {
        alert('biometrics prompt failed');
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header>
          <Left>
            <Button title={'<'} onPress={() => this.props.history.push('/')} />
          </Left>
          <Body>
            <Title>Biometrics</Title>
          </Body>
        </Header>
        <View style={styles.buttonContent}>
          <Button
            title={'What sensor is available'}
            onPress={() => this.isSensorAvailable()}
          />
        </View>
        <View style={styles.buttonContent}>
          <Button
            title={'create public key'}
            onPress={() => this.createKeys()}
          />
        </View>
        <View style={styles.buttonContent}>
          <Button
            title={'public key exist ?'}
            onPress={() => this.biometricKeysExists()}
          />
        </View>
        <View style={styles.buttonContent}>
          <Button
            title={'delete public key'}
            onPress={() => this.deleteKeys()}
          />
        </View>
        <View style={styles.buttonContent}>
          <Button
            title={'create signature key'}
            onPress={() => this.createSignature()}
          />
        </View>
        <View style={styles.buttonContent}>
          <Button
            title={'simple prompt of biometrics'}
            onPress={() => this.simplePrompt()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    display: 'flex',
    backgroundColor: 'rgba(127, 237, 245, 1)',
    height: 900,
  },
  buttonContent: {
    justifyContent: 'center',
    margin: 30,
  },
});

export default BiometricsPage;
