import { createStackNavigator } from 'react-navigation-stack';
import UserProfile from './userProfile/Screen';
import Settings from './Screen';

const navigator = createStackNavigator(
  {
    Settings: {
      screen: Settings,
      navigationOptions: {
        headerShown: false,
      },
    },
    UserProfile: {
      screen: UserProfile,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  { initialRouteName: 'Settings' },
);

export default navigator;
