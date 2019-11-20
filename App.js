import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import LoginComponent from './components/LoginComponents/LoginComponent';
import RegisterComponent from './components/RegisterComponents/RegisterComponent';
import RegisterTwo from './components/RegisterComponents/RegisterTwo';
import RegisterThree from './components/RegisterComponents/RegisterThree';
import FinalRegistration from './components/RegisterComponents/FinalRegistration';
import ProgramsMatched from './components/ProgramsMatched/ProgramsMatched';
import UserProfile from './components/UserProfileComponents/UserProfile';
import ProgramDetails from './components/ProgramDetails';
import {initialState, reducer} from './utils/globalState';
import {StateProvider} from './utils/provider';

export default class App extends Component {
  render() {
    return (
      <StateProvider reducer={reducer} initialState={initialState}>
        <AppContainer />
      </StateProvider>
    );
  }
}

const AppSwitchNavigation = createSwitchNavigator({
  LoginComponent: {
    screen: LoginComponent,
  },
  RegisterComponent: {
    screen: RegisterComponent,
  },
  RegisterTwo: {
    screen: RegisterTwo,
  },
  RegisterThree: {
    screen: RegisterThree,
  },
  FinalRegistration: {
    screen: FinalRegistration,
  },
  ProgramsMatched: {
    screen: ProgramsMatched,
  },
  UserProfile: {
    screen: UserProfile,
  },
  ProgramDetails: {
    screen: ProgramDetails,
  },
});

const AppContainer = createAppContainer(AppSwitchNavigation);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F28E00',
  },
});
