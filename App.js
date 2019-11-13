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
import QuestionnaireOne from "./components/Questionnaire Components/Q1";
import QuestionnaireTwo from "./components/Questionnaire Components/Q2";
import QuestionnaireThree from "./components/Questionnaire Components/Q3";
import QuestionnaireFour from "./components/Questionnaire Components/Q4";
import QuestionnaireFive from "./components/Questionnaire Components/Q5";
import QuestionnaireSix from "./components/Questionnaire Components/Q6";
import QuestionnaireSeven from "./components/Questionnaire Components/Q7";
import QuestionnaireEight from "./components/Questionnaire Components/Q8";
import QuestionnaireNine from "./components/Questionnaire Components/Q9";
import QuestionnaireTen from "./components/Questionnaire Components/Q10";
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

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
  QuestionnaireOne: {
    screen: QuestionnaireOne
  },
  QuestionnaireTwo: {
    screen: QuestionnaireTwo
  },
  QuestionnaireThree: {
    screen: QuestionnaireThree
  },
  QuestionnaireFour: {
    screen: QuestionnaireFour
  },
  QuestionnaireFive: {
    screen: QuestionnaireFive
  },
  QuestionnaireSix: {
    screen: QuestionnaireSix
  },
  QuestionnaireSeven: {
    screen: QuestionnaireSeven
  },
  QuestionnaireEight: {
    screen: QuestionnaireEight
  },
  QuestionnaireNine: {
    screen: QuestionnaireNine
  },
  QuestionnaireTen: {
    screen: QuestionnaireTen
  }
});

const AppContainer = createAppContainer(AppSwitchNavigation);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F28E00"
  }
});
