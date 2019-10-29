import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import NavBarComponent from './NavBarComponent';
import MenuButton from './menuButton';

class ProgramsMatched extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1}} style={styles.container}>
                <View>
                    <NavBarComponent/>
                </View>
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