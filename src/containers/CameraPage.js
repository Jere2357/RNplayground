import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Button} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {Body, Header, Left, Title} from 'native-base';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>Waiting</Text>
  </View>
);

class CameraPage extends Component {
  constructor(props) {
    super(props);
  }

  async takePicture(camera) {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    console.log(data.uri);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header>
          <Left>
            <Button title={'<'} onPress={() => this.props.history.push('/')} />
          </Left>
          <Body>
            <Title>Camera</Title>
          </Body>
        </Header>
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOption={{
            title: 'Allow to use camera',
            message: 'Permission is needed to use the camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOption={{
            title: 'Allow to use recorder',
            message: 'Permission is needed to use the recorder',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}>
          {({camera, status, recordAudioPermissionStatus}) => {
            if (status !== 'READY') {
              return <PendingView />;
            }
            return (
              <View
                style={{
                  justifyContent: 'center',
                  height: 900,
                }}>
                <TouchableOpacity
                  onPress={() => this.takePicture(camera)}
                  style={styles.capture}>
                  <Text style={{fontSize: 14}}> SNAP </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
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
  capture: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default CameraPage;
