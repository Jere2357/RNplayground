import React, {Component} from 'react';
import MapView, {Marker} from 'react-native-maps';

import {View, StyleSheet, Button, Text} from 'react-native';
import {Header, Left, Body, Title} from 'native-base';
import RNDrawer from 'react-native-raw-bottom-sheet';

class MapsPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header>
          <Left>
            <Button title={'<'} onPress={() => this.props.history.push('/')} />
          </Left>
          <Body>
            <Title>Maps</Title>
          </Body>
        </Header>
        <Button title={'Open Bottom Drawer'} onPress={() => this.RNDrawer.open()} />
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 14.5582,
            longitude: 121.0335,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: 14.5582,
              longitude: 121.0335,
            }}
            title="Demo"
            description="A location to test"
          />
        </MapView>
        <RNDrawer
          ref={ref => {
            this.RNDrawer = ref;
          }}
          height={250}
          duration={250}
          customStyles={{
            container: {
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              justifyContent: "center",
              alignItems: "center"
            }
          }}
        >
          <View style={styles.bottomDrawerContainer}>
            <Text>This is a hard coded location. Locating pearlpay inc. at makati city</Text>
            <View style={styles.gotItButton}>
              <Button title={'Got it'} onPress={() => this.RNDrawer.close()} />
            </View>
          </View>
        </RNDrawer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    display: 'flex',
    height: 800,
  },
  map: {
    height: '95%',
    width: '100%',
  },
  bottomDrawerContainer: {
    width: '70%',
  },
  gotItButton: {
    margin: 30,
  },
});

export default MapsPage;
