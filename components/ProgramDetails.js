import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableWithoutFeedback, SafeAreaView} from 'react-native';
import {Input, Button, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavBarComponent from './NavBarComponent';
import DetailsResults from './DetailsResults';

class ProgramDetails extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}} style={styles.container}>
        <NavBarComponent />
        <DetailsResults />
      </SafeAreaView>
    );
  }
}
export default ProgramDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F28E00',
  },
});
