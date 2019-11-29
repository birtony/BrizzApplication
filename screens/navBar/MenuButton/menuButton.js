import React from 'react';
import {StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {withNavigation} from 'react-navigation';

const MenuButton = ({navigation}) => {
  return (
    <Ionicons
      name="md-contact"
      color="#000000"
      size={50}
      style={styles.menuIcon}
      onPress={() => navigation.navigate('UserProfile')}
    />
  );
};

export default withNavigation(MenuButton);

const styles = StyleSheet.create({
  menuIcon: {
    zIndex: 9,
    position: 'absolute',
    top: '5%',
    right: 20,
  },
});
