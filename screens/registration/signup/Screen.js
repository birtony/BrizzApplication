import React from 'react';
import {StyleSheet, View, Image, TouchableWithoutFeedback, SafeAreaView} from 'react-native';
import {Input, Button, Text} from 'react-native-elements';
import logo from '../../../assets/logo.png';

export default Signup = ({navigation}) => {
  const handleRegister = () => {
    navigation.navigate('AccountSetup1');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logoImage} source={logo}></Image>
      <View style={styles.backgroundCircle}></View>
      <View style={styles.roundedRectangle}></View>
      <View style={styles.LoginFlap}></View>
      <View style={styles.SignUpFlap}></View>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
        <View style={styles.logInFlapView}>
          <Text style={styles.logInFlapViewText}>Log In</Text>
        </View>
      </TouchableWithoutFeedback>
      <Text style={styles.signupText}>Sign Up</Text>
      <Text h3 style={styles.EmailText}>
        Email
      </Text>
      <Input
        placeholder="Email"
        leftIcon={{type: 'font-awesome', name: 'at', left: -14, size: 35}}
        inputContainerStyle={{borderBottomWidth: 0, top: 13}}
        containerStyle={styles.EmailInput}
      />
      <Text h3 style={styles.PasswordText}>
        Password
      </Text>
      <Input
        placeholder="Password"
        leftIcon={{type: 'font-awesome', name: 'key', left: -14, size: 35}}
        inputContainerStyle={{borderBottomWidth: 0, top: 13}}
        containerStyle={styles.passwordInput}
      />
      <Text h3 style={styles.ConfirmPasswordText}>
        Confirm Password
      </Text>
      <Input
        placeholder="Confirm Password"
        leftIcon={{type: 'font-awesome', name: 'key', left: -14, size: 35}}
        inputContainerStyle={{borderBottomWidth: 0, top: 13}}
        containerStyle={styles.ConfirmPasswordInput}
      />
      <View style={styles.buttonSignUp}>
        <Button
          title="Sign Up"
          titleStyle={{fontSize: 40, fontFamily: 'Optima-Bold'}}
          onPress={() => handleRegister()}
          buttonStyle={styles.signUpButtonStyle}
        />
      </View>
    </SafeAreaView>
  );
};

Signup.navigationOptions = () => {
  ('Signup');
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F28E00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundedRectangle: {
    width: '94%',
    height: '60%',
    borderRadius: 100 / 5,
    backgroundColor: 'white',
    position: 'absolute',
    top: '37%',
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  backgroundCircle: {
    width: '105%',
    height: '90%',
    borderRadius: 100 / 2,
    backgroundColor: 'white',
    position: 'absolute',
    top: '43%',
  },
  LoginFlap: {
    width: '28%',
    height: '10%',
    borderRadius: 100 / 5,
    backgroundColor: '#FFFFFF50',
    top: '33%',
    position: 'absolute',
    left: '3%',
  },
  SignUpFlap: {
    width: '28%',
    height: '10%',
    position: 'absolute',
    top: '33%',
    right: '3%',
    backgroundColor: 'white',
    opacity: 20,
    borderRadius: 100 / 5,
  },
  logoImage: {
    width: '40%',
    height: '20%',
    position: 'absolute',
    top: '10%',
  },
  logInFlapView: {
    position: 'absolute',
    top: '33%',
    left: '10%',
  },
  logInFlapViewText: {
    // top: 270,
    // left: 40,
    position: 'absolute',
    fontFamily: 'Optima-Bold',
    fontSize: 25,
    color: '#00000050',
  },
  signupText: {
    top: '33%',
    right: '6%',
    position: 'absolute',
    fontFamily: 'Optima-Bold',
    fontSize: 25,
  },
  EmailText: {
    position: 'absolute',
    top: '38%',
    left: '15%',
    fontFamily: 'Optima-Bold',
    color: '#F28E00',
  },
  EmailInput: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#F28E00',
    height: '8%',
    position: 'absolute',
    top: '43%',
    width: '85%',
  },
  PasswordText: {
    position: 'absolute',
    top: '52%',
    left: '15%',
    fontFamily: 'Optima-Bold',
    color: '#F28E00',
  },
  passwordInput: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#F28E00',
    height: '8%',
    position: 'absolute',
    top: '57%',
    width: '85%',
  },
  ConfirmPasswordText: {
    position: 'absolute',
    top: '66%',
    left: '15%',
    fontFamily: 'Optima-Bold',
    color: '#F28E00',
  },
  ConfirmPasswordInput: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#F28E00',
    height: '8%',
    position: 'absolute',
    top: '71%',
    width: '85%',
  },
  signUpButtonStyle: {
    backgroundColor: '#F28E00',
    width: 250,
    borderRadius: 50,
    height: 75,
    position: 'absolute',
    left: -120,
    top: '5%',
    borderColor: 'grey',
    borderWidth: 1,
  },
  buttonSignUp: {
    top: '30%',
  },
});
