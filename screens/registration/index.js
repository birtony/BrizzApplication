import { createStackNavigator } from 'react-navigation-stack';
import Signup from './signup/Screen';
import AccountSetup1 from './accountSetup1/Screen';
import AccountSetup2 from './accountSetup2/Screen';
import AccountSetup3 from './accountSetup3/Screen';
import Question1 from './questionnaire/q1/Screen';
import Question2 from './questionnaire/q2/Screen';
import Question3 from './questionnaire/q3/Screen';
import Question4 from './questionnaire/q4/Screen';
import Question5 from './questionnaire/q5/Screen';
import Question6 from './questionnaire/q6/Screen';
import Question7 from './questionnaire/q7/Screen';
import Question8 from './questionnaire/q8/Screen';
import Question9 from './questionnaire/q9/Screen';
import Question10 from './questionnaire/q10/Screen';
import Question11 from './questionnaire/q11/Screen';
import Question12 from './questionnaire/q12/Screen';

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
  },
  { initialRouteName: 'Signup' },
);

export default navigator;
