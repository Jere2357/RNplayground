import React, {Component} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {NativeRouter, Switch, Route} from 'react-router-native';

import BiometricsPage from './BiometricsPage';

export default class MainPage extends Component {
  render() {
    return (
      <NativeRouter>
        <Switch>
          <Route
            exact path={'/'}
            render={({history}) => (
              <View style={styles.container}>
                <Button
                  title={'Biometrics'}
                  onPress={() => history.push('/biometrics')}
                />
              </View>
            )}
          />
          <Route exact path={'/biometrics'} component={BiometricsPage} />
        </Switch>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
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
