import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import LoginComponent from "./components/Login Components/LoginComponent";
import RegisterComponent from "./components/Register Components/RegisterComponent";
import RegisterTwo from "./components/Register Components/RegisterTwo";
import RegisterThree from "./components/Register Components/RegisterThree";
import FinalRegistration from "./components/Register Components/FinalRegistration";
import ProgramsMatched from "./components/Programs Matched/ProgramsMatched";
import UserProfile from "./components/User Profile Components/UserProfile";
import ProgramDetails from "./components/ProgramDetails";
import { initialState, reducer } from "./utils/globalState";
import { StateProvider } from "./utils/provider";

export default App = () => {
  return (
    <StateProvider reducer={reducer} initialState={initialState}>
      <AppContainer />
    </StateProvider>
  );
};

const AppSwitchNavigation = createSwitchNavigator({
  LoginComponent: {
    screen: LoginComponent
  },
  RegisterComponent: {
    screen: RegisterComponent
  },
  RegisterTwo: {
    screen: RegisterTwo
  },
  RegisterThree: {
    screen: RegisterThree
  },
  FinalRegistration: {
    screen: FinalRegistration
  },
  ProgramsMatched: {
    screen: ProgramsMatched
  },
  UserProfile: {
    screen: UserProfile
  },
  ProgramDetails: {
    screen: ProgramDetails
  }
});

const AppContainer = createAppContainer(AppSwitchNavigation);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F28E00"
  }
});
