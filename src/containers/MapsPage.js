import React, {Component} from 'react';
import MapView, {Marker} from 'react-native-maps';

import {View, StyleSheet, Button} from 'react-native';
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
            this.RBSheet = ref;
          }}
          height={300}
          duration={250}
          customStyles={{
            container: {
              justifyContent: "center",
              alignItems: "center"
            }
          }}
        >
          <View>
            <Text>Hello this is my first drawer bottom</Text>
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
});

export default MapsPage;
