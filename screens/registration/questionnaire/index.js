import { createStackNavigator } from 'react-navigation-stack';
import Question1 from './q1/Screen';
import Question2 from './q2/Screen';
import Question3 from './q3/Screen';
import Question4 from './q4/Screen';
import Question5 from './q5/Screen';
import Question6 from './q6/Screen';
import Question7 from './q7/Screen';
import Question8 from './q8/Screen';
import Question9 from './q9/Screen';
import Question10 from './q10/Screen';
import Question11 from './q11/Screen';
import Question12 from './q12/Screen';

const navigator = createStackNavigator(
  {
    Question1: {
      screen: Question1,
      navigationOptions: {
        headerShown: false,
      },
    },
    Question2: {
      screen: Question2,
      navigationOptions: {
        headerShown: false,
      },
    },
    Question3: {
      screen: Question3,
      navigationOptions: {
        headerShown: false,
      },
    },
    Question4: {
      screen: Question4,
      navigationOptions: {
        headerShown: false,
      },
    },
    Question5: {
      screen: Question5,
      navigationOptions: {
        headerShown: false,
      },
    },
    Question6: {
      screen: Question6,
      navigationOptions: {
        headerShown: false,
      },
    },
    Question7: {
      screen: Question7,
      navigationOptions: {
        headerShown: false,
      },
    },
    Question8: {
      screen: Question8,
      navigationOptions: {
        headerShown: false,
      },
    },
    Question9: {
      screen: Question9,
      navigationOptions: {
        headerShown: false,
      },
    },
    Question10: {
      screen: Question10,
      navigationOptions: {
        headerShown: false,
      },
    },
    Question11: {
      screen: Question11,
      navigationOptions: {
        headerShown: false,
      },
    },
    Question12: {
      screen: Question12,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  { initialRouteName: 'Question1' },
);
export default navigator;
