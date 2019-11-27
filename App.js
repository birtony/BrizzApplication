import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import LoginComponent from "./components/login/Login";
import RegisterComponent from "./components/register/RegisterComponent";
import RegisterTwo from "./components/register/RegisterTwo";
import RegisterThree from "./components/register/RegisterThree";
import FinalRegistration from "./components/register/FinalRegistration";
import ProgramsMatched from "./components/programsMatched/ProgramsMatched";
import UserProfile from "./components/userProfile/UserProfile";
import ProgramDetails from "./components/programDetails/ProgramDetails";
import DetailsResults from "./components/programDetails/DetailsResults";
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
  },
  DetailsResults: {
    screen: DetailsResults
  }
});

const AppContainer = createAppContainer(AppSwitchNavigation);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F28E00"
  }
});
