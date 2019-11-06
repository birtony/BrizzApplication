import React, {Component} from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import NavBarComponent from './NavBarComponent';

export default class UserProfile extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <NavBarComponent/>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F28E00'
    }
})