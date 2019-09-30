import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
class RegisterComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ width: 150, height: 150, position: 'absolute', top: 100 }}
                    source={require('../assets/logo.png')}>
                </Image>
                <View style={styles.backgroundCircle}></View>
                <View style={styles.roundedRectangle}></View>
                <View style={styles.LoginFlap}></View>
                <View style={styles.SignUpFlap}></View>
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('LoginComponent')}>
                    <View style={{ position: 'absolute', top: 0, left: 0 }}>
                        <Text style={{ top: 270, left: 40, position: 'absolute', fontFamily: 'Optima-Bold', fontSize: 25, color: '#00000050' }}>Log In</Text>
                    </View>
                </TouchableWithoutFeedback>
                <Text style={{ top: 270, right: 30, position: 'absolute', fontFamily: 'Optima-Bold', fontSize: 25 }}>Sign Up</Text>
                <Text h3 style={{ position: 'absolute', top: 340, left: 60, fontFamily: 'Optima-Bold', color: '#F28E00' }}>Email</Text>
                <Input
                    placeholder='Email'
                    leftIcon={{ type: 'font-awesome', name: 'at', left: -14, size: 35 }}
                    inputContainerStyle={{ borderBottomWidth: 0, top: 13 }}
                    containerStyle={{ borderWidth: 2, borderRadius: 50, borderColor: '#F28E00', height: 70, position: 'absolute', top: 375, width: 350 }}
                />
                <Text h3 style={{ position: 'absolute', top: 455, left: 60, fontFamily: 'Optima-Bold', color: '#F28E00' }}>Password</Text>
                <Input
                    placeholder='Password'
                    leftIcon={{ type: 'font-awesome', name: 'key', left: -14, size: 35 }}
                    inputContainerStyle={{ borderBottomWidth: 0, top: 13 }}
                    containerStyle={{ borderWidth: 2, borderRadius: 50, borderColor: '#F28E00', height: 70, position: 'absolute', top: 490, width: 350 }}
                />
                <Text h3 style={{ position: 'absolute', top: 565, left: 60, fontFamily: 'Optima-Bold', color: '#F28E00' }}>Confirm Password</Text>
                <Input
                    placeholder='Confirm Password'
                    leftIcon={{ type: 'font-awesome', name: 'key', left: -14, size: 35 }}
                    inputContainerStyle={{ borderBottomWidth: 0, top: 13 }}
                    containerStyle={{ borderWidth: 2, borderRadius: 50, borderColor: '#F28E00', height: 70, position: 'absolute', top: 600, width: 350 }}
                />
                <Button
                    title='Sign Up'
                    titleStyle={{ fontSize: 40, fontFamily: 'Optima-Bold' }}
                    onPress={() => this.handleRegister()}
                    buttonStyle={{ backgroundColor: '#F28E00', width: 250, borderRadius: 50, height: 75, position: 'absolute', left: -120, top: 280, borderColor: 'grey', borderWidth: 1 }}
                />
            </View>
        );
    }
    handleRegister = () => {
        this.props.navigation.navigate('RegisterTwo');
    }
}

export default RegisterComponent;
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
        backgroundColor: '#FFFFFF50',
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
        backgroundColor: 'white',
        opacity: 20,
        borderRadius: 100 / 5
    }
});
