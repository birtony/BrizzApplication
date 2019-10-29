import React, {Component} from 'react';
import {StyleSheet,View, Text, SafeAreaView, Image} from 'react-native';
import MenuButton from './menuButton';

class NavBarComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navbarRectangle}>
                    <Image 
                        style={styles.imageStyle}
                        source={require('../assets/logo.png')}
                    />
                    <Text style={styles.brizzName}>BRIZZ</Text>
                    <MenuButton/>
                </View>
            </View>
        )
    }
}

export default NavBarComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    navbarRectangle: {
        width: 4000,
        height: 75,
        backgroundColor: 'white',
        top: '10%'
    },
    imageStyle: {
        top: '20%',
        marginLeft: 5,
        width: 50,
        height: 50,
    },
    brizzName: {
        fontFamily: 'Optima-Bold',
        color: '#000050',
        fontSize: 40,
        marginTop: -35,
        marginLeft: 150
    }
});