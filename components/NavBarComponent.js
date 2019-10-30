import React, {Component} from 'react';
import {StyleSheet,View, Text, SafeAreaView, Image} from 'react-native';
import MenuButton from './menuButton';

class NavBarComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navbarRectangle} />
                    <Text style={styles.brizzName}>BRIZZ</Text>
                <Image 
                    style={styles.imageStyle}
                        source={require('../assets/logo.png')}
                />
                <MenuButton/>
            </View>
        )
    }
}

export default NavBarComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    navbarRectangle: {
        width: 4000,
        flex: 1,
        height: '20%',
        position: 'absolute',
        backgroundColor: 'white',
    },
    imageStyle: {
        position: 'absolute',
        flex: 1,
        alignItems: 'center',
        top: '5%',
        left: "3%",
        width: 50,
        height: 50,
    },
    brizzName: {
        position: 'absolute',
        alignItems: 'center',
        flex: 1,
        fontFamily: 'Optima-Bold',
        top: '5%',
        fontSize: 40,
        left: '42%'
    }
});