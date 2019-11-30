import { createSwitchNavigator } from 'react-navigation';
import Login from './screens/login/Screen';
import RegistrationNavigator from './screens/registration/';
import UserProfile from './screens/profile/Screen';
import ProgramsMatchedNavigator from './screens/programsMatched';

export default navigator = createSwitchNavigator({
  Login,
  RegistrationNavigator,
  ProgramsMatchedNavigator,
  UserProfile,
});
