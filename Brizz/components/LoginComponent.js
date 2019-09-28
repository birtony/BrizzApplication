import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableWithoutFeedback } from 'react-native';


import RegisterComponent from '../components/RegisterComponent';
class LoginPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style= {{ width: 150, height: 150, position: 'absolute', top: 100}}
                    source={require('../assets/logo.png')}>
                </Image>
                <View style={styles.backgroundCircle}></View>
                <View style={styles.roundedRectangle}></View>
                <View style={styles.LoginFlap}></View>
                <View style={styles.SignUpFlap}></View>
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('RegisterComponent')}>
                    <View style= {{position: 'absolute', top: 0, right: 0}}>
                        <Text style= {{top: 270, right: 30, position: 'absolute', fontFamily: 'Optima-Bold', fontSize: 25, color: '#00000050'}}>Sign Up</Text>
                    </View>
                </TouchableWithoutFeedback>
                <Text style= {{top: 270, left: 40, position: 'absolute', fontFamily: 'Optima-Bold', fontSize: 25}}>Log In</Text>
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
      borderRadius: 100/5,
      backgroundColor: 'white',
      position: 'absolute',
      top: 300,
      shadowColor: 'grey',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 5
    },
    backgroundCircle: {
      width: 425,
      height: 600,
      borderRadius: 100/2,
      backgroundColor: 'white',
      position: 'absolute',
      top: 350
    },
    LoginFlap: {
      width: 125,
      height: 65,
      borderRadius: 100/5,
      backgroundColor: 'white',
      top:270,
      position:"absolute",
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
      borderRadius: 100/5
    }
  });
  