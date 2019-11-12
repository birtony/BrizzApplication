import React from 'react';
import {StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {withNavigation} from 'react-navigation';

class MenuButton extends React.Component {
  render() {
    return (
      <Ionicons
        name='md-contact'
        color='#000000'
        size={50}
        style={styles.menuIcon}
        onPress={() => this.props.navigation.navigate('UserProfile')}
      />
    );
  }
}
export default withNavigation(MenuButton);
const styles = StyleSheet.create({
  menuIcon: {
    zIndex: 9,
    position: 'absolute',
    top: '5%',
    right: 20,
  },
});
