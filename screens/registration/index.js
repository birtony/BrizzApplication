import { createStackNavigator } from 'react-navigation-stack';
import Signup from './signup/Screen';
import AccountSetup1 from './accountSetup1/Screen';
import AccountSetup2 from './accountSetup2/Screen';
import AccountSetup3 from './accountSetup3/Screen';
import QuestionnaireNavigator from './questionnaire';

const navigator = createStackNavigator(
  {
    Signup: {
      screen: Signup,
      navigationOptions: {
        headerShown: false,
      },
    },
    AccountSetup1: {
      screen: AccountSetup1,
      navigationOptions: {
        headerShown: false,
      },
    },
    AccountSetup2: {
      screen: AccountSetup2,
      navigationOptions: {
        headerShown: false,
      },
    },
    AccountSetup3: {
      screen: AccountSetup3,
      navigationOptions: {
        headerShown: false,
      },
    },
    QuestionnaireNavigator: {
      screen: QuestionnaireNavigator,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  { initialRouteName: 'Signup' },
);

export default navigator;
