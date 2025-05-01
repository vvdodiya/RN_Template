/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {LogBox, Text, TextInput} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

import Router from '@navigation/router';
import store from '@redux/store';

function App() {
  console.disableYellowBox = true;
  LogBox.ignoreLogs([
    'Warning: ...',
    '(ADVICE) "px" is not a valid dimension. Dimensions must be a number, "auto", or a string suffixed with "%".',
  ]); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  console.warn = () => {};
  if (!__DEV__) {
    console.log = () => {};
  }
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;

  TextInput.defaultProps = TextInput.defaultProps || {};
  TextInput.defaultProps.allowFontScaling = false;

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Router />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
