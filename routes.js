import {createSwitchNavigator} from 'react-navigation';
import Login from './screens/login/Screen';
import Registration from './screens/registration/';
import ProgramsMatched from './screens/programsMatched/Screen';
import UserProfile from './screens/profile/Screen';
import ProgramDetails from './screens/programDetails/Screen';

export default navigator = createSwitchNavigator({
  Login,
  Registration,
  ProgramsMatched,
  UserProfile,
  ProgramDetails,
});
