import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import NavBarComponent from '../NavBar/NavBarComponent';
import ResultsComponent from './ResultsComponent';

class ProgramsMatched extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
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
