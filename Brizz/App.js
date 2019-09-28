import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';

export default class App extends Component {
  render() {
    return <AppContainer/>;
  }
}
const AppSwitchNavigation = createSwitchNavigator(
  {
  LoginComponent: {
    screen: LoginComponent 
  },
  RegisterComponent: {
    screen: RegisterComponent
  }
  });
const AppContainer = createAppContainer(AppSwitchNavigation);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F28E00'
  }
});