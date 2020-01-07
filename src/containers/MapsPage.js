import React, {Component} from 'react';
import MapView, {Marker} from 'react-native-maps';

import {View, StyleSheet} from 'react-native';

class MapsPage extends Component {
  render() {
    return (
      <View style={styles.container}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 800,
  },
  map: {
    height: '100%',
    width: '100%',
  },
});

export default MapsPage;
