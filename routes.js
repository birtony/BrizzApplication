import { createSwitchNavigator } from 'react-navigation';
import Login from './screens/login/Screen';
import RegistrationStackNavigator from './screens/registration/';
import mainStackNavigator from './screens/main';
<<<<<<< HEAD
// import QuestionnaireStackNavigator from './screens/registration/questionnaire';
=======
>>>>>>> 58412411cdbcb53f06174dc482140e906d182441

const navigator = createSwitchNavigator({
  Login,
  RegistrationStackNavigator,
  mainStackNavigator,
<<<<<<< HEAD
  // QuestionnaireStackNavigator,
=======
>>>>>>> 58412411cdbcb53f06174dc482140e906d182441
});

export default navigator;
