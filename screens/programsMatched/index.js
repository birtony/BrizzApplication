import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';
import ProgramsMatched from './Screen';
import ProgramDetails from './programDetails/Screen';

const navigator = createStackNavigator(
  {
    ProgramsMatched: {
      screen: ProgramsMatched,
      navigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: 'white',
        },
        title: 'BRiZZ',
        headerTitleStyle: {
          fontSize: 30,
          fontFamily: 'Optima-Bold',
        },
        headerBackTitle: null,
        headerRight: (
          <Icon
            name="account-circle"
            size={40}
            onPress={() => navigation.navigate('UserProfile')}
          />
        ),
        headerRightContainerStyle: {
          marginRight: 10,
        },
      }),
    },
    ProgramDetails: {
      screen: ProgramDetails,
      navigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: 'white',
        },
        title: 'BRiZZ',
        headerTitleStyle: {
          fontSize: 30,
          fontFamily: 'Optima-Bold',
        },
        headerBackTitle: 'Programs Matched',
        headerRight: (
          <Icon
            name="account-circle"
            size={40}
            onPress={() => navigation.navigate('UserProfile')}
          />
        ),
        headerRightContainerStyle: {
          marginRight: 10,
        },
      }),
    },
  },
  { initialRouteName: 'ProgramsMatched' }
);

export default navigator;
