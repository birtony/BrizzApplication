import { createSwitchNavigator } from 'react-navigation';
import Login from './screens/login/Screen';
import RegistrationStackNavigator from './screens/registration/';
import mainStackNavigator from './screens/main';
// import QuestionnaireStackNavigator from './screens/registration/questionnaire';

const navigator = createSwitchNavigator({
  Login,
  RegistrationStackNavigator,
  mainStackNavigator,
  // QuestionnaireStackNavigator,
});

export default navigator;
