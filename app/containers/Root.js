// @flow
import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import Routes from '../routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

type RootType = {
  store: {},
  history: {}
};

export default function Root({store, history}: RootType) {
  return (
  <MuiThemeProvider>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>
  );
}
