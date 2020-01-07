import React, {Component} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {NativeRouter, Switch, Route} from 'react-router-native';
import BiometricsPage from './BiometricsPage';
import MapsPage from './MapsPage';
import FileImageChooserPage from './FileImageChooserPage';

export default class MainPage extends Component {
  render() {
    return (
      <NativeRouter>
        <Switch>
          <Route
            exact
            path={'/'}
            render={({history}) => (
              <View style={styles.container}>
                <Button
                  title={'Biometrics'}
                  onPress={() => history.push('/biometrics')}
                />
                <Button title={'Maps'} onPress={() => history.push('/maps')} />
                <Button
                  title={'File Chooser'}
                  onPress={() => history.push('/fileChooser')}
                />
              </View>
            )}
          />
          <Route exact path={'/biometrics'} component={BiometricsPage} />
          <Route exact path={'/maps'} component={MapsPage} />
          <Route exact path={'/fileChooser'} component={FileImageChooserPage} />
        </Switch>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'rgba(127, 237, 245, 1)',
    height: 800,
  },
});
