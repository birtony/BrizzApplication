import { createSwitchNavigator } from 'react-navigation';
import Login from './screens/login/Screen';
import RegistrationStackNavigator from './screens/registration/';
import mainStackNavigator from './screens/main';

const navigator = createSwitchNavigator({
  Login,
  RegistrationStackNavigator,
  mainStackNavigator,
});

export default navigator;
