import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class LoginPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ width: 150, height: 150, position: 'absolute', top: 100 }}
                    source={require('../assets/logo.png')}>
                </Image>
                <View style={styles.backgroundCircle} />
                <View style={styles.roundedRectangle} />
                <View style={styles.LoginFlap} />
                <View style={styles.SignUpFlap} />
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('RegisterComponent')}>
                    <View style={{ position: 'absolute', top: 0, right: 0 }}>
                        <Text style={{ top: 270, right: 30, position: 'absolute', fontFamily: 'Optima-Bold', fontSize: 25, color: '#00000050' }}>Sign Up</Text>
                    </View>
                </TouchableWithoutFeedback>

                <Text h3 style={{ position: 'absolute', top: 365, left: 60, color: '#F28E00', fontFamily: 'Optima-Bold' }}>Email</Text>
                <Input
                    placeholder='Email'
                    leftIcon={{ type: 'font-awesome', name: 'at', left: -14, size: 35 }}
                    inputContainerStyle={{ borderBottomWidth: 0, top: 13 }}
                    containerStyle={{ borderWidth: 2, borderRadius: 50, borderColor: '#F28E00', height: 70, position: 'absolute', top: 400, width: 350 }}
                />
                <Text h3 style={{ position: 'absolute', top: 490, left: 60, color: '#F28E00', fontFamily: 'Optima-Bold' }}>Password</Text>
                <Input
                    placeholder='Password'
                    inputContainerStyle={{ borderBottomWidth: 0, top: 13 }}
                    leftIcon={{ type: 'font-awesome', name: 'key', left: -14, size: 35 }}
                    containerStyle={{ borderWidth: 2, borderRadius: 50, borderColor: '#F28E00', height: 70, position: 'absolute', top: 525, width: 350 }}
                />
                <Button
                    title='Log In'
                    titleStyle={{ fontSize: 40, fontFamily: 'Optima-Bold' }}
                    buttonStyle={{ backgroundColor: '#F28E00', width: 250, borderRadius: 50, height: 75, position: 'absolute', left: -120, top: 280, borderColor: 'grey', borderWidth: 1 }}
                />
                <Text style={{ top: 270, left: 40, position: 'absolute', fontFamily: 'Optima-Bold', fontSize: 25 }}>Log In</Text>
                <Text h5 style={{ position: 'absolute', top: 650, fontFamily: 'Optima-Bold', color: '#009EF2' }} onPress={() => this.props.navigation.navigate('RegisterComponent')}>Tap Me to Sign Up</Text>
            </View>
        )
    }
}
export default LoginPage;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F28E00',
        alignItems: 'center',
        justifyContent: 'center',
    },
    roundedRectangle: {
        width: 390,
        height: 525,
        borderRadius: 100 / 5,
        backgroundColor: 'white',
        position: 'absolute',
        top: 300,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5
    },
    backgroundCircle: {
        width: 425,
        height: 600,
        borderRadius: 100 / 2,
        backgroundColor: 'white',
        position: 'absolute',
        top: 350
    },
    LoginFlap: {
        width: 125,
        height: 65,
        borderRadius: 100 / 5,
        backgroundColor: 'white',
        top: 270,
        position: "absolute",
        left: 12
    },
    SignUpFlap: {
        width: 125,
        height: 65,
        position: "absolute",
        top: 270,
        right: 12,
        backgroundColor: '#FFFFFF50',
        opacity: 20,
        borderRadius: 100 / 5
    },
    materialIconTextbox2: {
        top: 25.29,
        left: 0.1,
        width: 287,
        height: 58,
        position: "absolute",
        borderRadius: 43,
        borderColor: "#ee8f00",
        borderWidth: 4
    },
});
