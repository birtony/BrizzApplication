import React, {Component} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import NavBarComponent from '../NavBar/NavBarComponent';
import ResultsComponent from './ResultsComponent';
import {Button} from 'react-native-elements';

class ProgramsMatched extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}} style={styles.container}>
        <NavBarComponent />
        <ResultsComponent />
      </SafeAreaView>
    );
  }
}
export default ProgramsMatched;
// Adding a button up there works, but adding button in resultscomponent fails.
// Figure that out.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F28E00',
  },
});
