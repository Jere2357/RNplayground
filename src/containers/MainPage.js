import React, {Component} from 'react';
import {View, Button} from 'react-native';
import {NativeRouter, Switch, Route} from 'react-router-native';

import CurrencyPage from './CurrencyPage';
import JokesPage from './JokesPage';
import BiometricsPage from './BiometricsPage';

export default class MainPage extends Component {
  render() {
    return (
      <NativeRouter>
        <Switch>
          <Route
            exact path={'/'}
            render={({history}) => (
              <View>
                <Button
                  title={'Currency'}
                  onPress={() => history.push('/currency')}
                />
                <Button
                  title={'Jokes'}
                  onPress={() => history.push('/jokes')}
                />
                <Button
                  title={'Biometrics'}
                  onPress={() => history.push('/biometrics')}
                />
              </View>
            )}
          />
          <Route exact path={'/currency'} component={CurrencyPage} />
          <Route exact path={'/jokes'} component={JokesPage} />
          <Route exact path={'/biometrics'} component={BiometricsPage} />
        </Switch>
      </NativeRouter>
    );
  }
}
