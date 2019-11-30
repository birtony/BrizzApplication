import { createSwitchNavigator } from 'react-navigation';
import Login from './screens/login/Screen';
import RegistrationStackNavigator from './screens/registration/';
import mainStackNavigator from './screens/main';

export default navigator = createSwitchNavigator({
  Login,
  RegistrationStackNavigator,
  mainStackNavigator,
});
