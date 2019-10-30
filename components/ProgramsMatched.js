import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import NavBarComponent from './NavBarComponent';
import ResultsComponent from './ResultsComponent';

class ProgramsMatched extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1}} style={styles.container}>
                <NavBarComponent/>
                <ResultsComponent/>
            </SafeAreaView>
        )
    }
}
export default ProgramsMatched;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F28E00'
    }
});