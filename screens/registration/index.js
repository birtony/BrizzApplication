import {createStackNavigator} from 'react-navigation-stack';
import Signup from './signup/Screen';
import AccountSetup1 from './accountSetup1/Screen';
import AccountSetup2 from './accountSetup2/Screen';
import AccountSetup3 from './accountSetup3/Screen';

const navigator = createStackNavigator(
  {
    Signup,
    AccountSetup1,
    AccountSetup2,
    AccountSetup3,
  },
  {initialRouteName: 'Signup'},
);

export default navigator;
