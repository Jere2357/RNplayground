import React, {Component} from 'react';
import {View, Button} from 'react-native';
import {NativeRouter, Switch, Route} from 'react-router-native';

import CurrencyPage from './CurrencyPage';
import JokesPage from './JokesPage';

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
              </View>
            )}
          />
          <Route exact path={'/currency'} component={CurrencyPage} />
          <Route exact path={'/jokes'} component={JokesPage} />
        </Switch>
      </NativeRouter>
    );
  }
}
