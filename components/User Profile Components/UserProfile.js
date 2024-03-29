import React, { Component } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import NavBarComponent from '../NavBar/NavBarComponent';
import UserInformation from '../User Profile Components/UserInformation';

export default class UserProfile extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <NavBarComponent />
        <UserInformation />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F28E00',
  },
  profileBackground: {
    flex: 1,
    backgroundColor: 'white',
    top: '25%',
    position: 'absolute',
    height: '75%',
    width: '94%',
    left: '3%',
    borderRadius: 100 / 5,
  },
});
