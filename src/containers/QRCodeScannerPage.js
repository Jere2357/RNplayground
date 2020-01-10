import React, {Component} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {Header, Left, Body, Title} from 'native-base';

class QRCodeScannerPage extends Component {
  constructor(props) {
    super(props);
  }

  barcodeRead = e => {
    alert(e.data); //to display saved data in QR or bar code values in as warning
  };

  render() {
    let scanner = React.createRef();
    return (
      <View style={styles.container}>
        <Header>
          <Left>
            <Button title={'<'} onPress={() => this.props.history.push('/')} />
          </Left>
          <Body>
            <Title>QR / Bar Code</Title>
          </Body>
        </Header>
        <QRCodeScanner
          onRead={this.barcodeRead}
          ref={node => {
            scanner = node;
          }}
          topContent={
            <Text style={styles.centerText}>
              Go To{' '}
              <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
              your computer and scanner
            </Text>
          }
          bottomContent={
            //For reactivating the scanning ability
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text
                style={styles.buttonText}
                onPress={() => scanner.reactivate()}>
                Got it
              </Text>
            </TouchableOpacity>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'rgba(127, 237, 245, 1)',
    height: 900,
  },
  centerText: {
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
    justifyContent: 'center',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default QRCodeScannerPage;
