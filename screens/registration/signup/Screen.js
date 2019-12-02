import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { useStateValue } from '../../../utils/provider';
import { login_username_changed, login_password_changed, logged_in } from '../../../actions/auth';
import { Col, Row, Grid } from 'react-native-easy-grid';
import WhiteCard from '../../../common/components/WhiteCard';
import InputComponent from '../../../common/components/InputComponent';

export default function Signup({ navigation }) {
  const [{ user }, dispatch] = useStateValue();
  return (
    <WhiteCard style={styles.container}>
      <View style={styles.back}>
        <Grid style={styles.grid}>
          <Row style={styles.flapsRow}>
            <Col>
              <View style={styles.LoginFlap}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.loginFlapText}>Log In</Text>
                </TouchableWithoutFeedback>
              </View>
            </Col>
            <Col></Col>
            <Col>
              <View style={styles.SignUpFlap}>
                <Text style={styles.signUpFlapText}>Sign Up</Text>
              </View>
            </Col>
          </Row>
          <Row size={2}>
            <InputComponent
              title={'Email'}
              onChangeAction={() => dispatch(login_username_changed())}
              property={user.email}
              iconName={'at'}
            />
          </Row>
          <Row size={2}>
            <InputComponent
              title={'Password'}
              onChangeAction={() => dispatch(login_password_changed())}
              property={user.password}
              iconName={'key'}
            />
          </Row>
          <Row size={2}>
            <InputComponent
              title={'Confirm Password'}
              onChangeAction={() => dispatch(login_password_changed())}
              property={user.confirmPass}
              iconName={'key'}
            />
          </Row>
          <Row>
            <Col size={1} />
            <Col size={2}>
              <Button
                title="Sign Up"
                titleStyle={styles.SignUpButtonTitle}
                buttonStyle={styles.SignUpButtonStyle}
                onPress={() => navigation.navigate('AccountSetup1')}
              />
            </Col>
            <Col size={1}></Col>
          </Row>
          <Row size={0.5}></Row>
        </Grid>
      </View>
    </WhiteCard>
    /* <Image style={styles.logoImage} source={logo}></Image>
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
      leftIcon={{ type: 'font-awesome', name: 'at', left: -14, size: 35 }}
      inputContainerStyle={{ borderBottomWidth: 0, top: 13 }}
      containerStyle={styles.EmailInput}
    />
    <Text h3 style={styles.PasswordText}>
      Password
    </Text>
    <Input
      placeholder="Password"
      leftIcon={{ type: 'font-awesome', name: 'key', left: -14, size: 35 }}
      inputContainerStyle={{ borderBottomWidth: 0, top: 13 }}
      containerStyle={styles.passwordInput}
    />
    <Text h3 style={styles.ConfirmPasswordText}>
      Confirm Password
    </Text>
    <Input
      placeholder="Confirm Password"
      leftIcon={{ type: 'font-awesome', name: 'key', left: -14, size: 35 }}
      inputContainerStyle={{ borderBottomWidth: 0, top: 13 }}
      containerStyle={styles.ConfirmPasswordInput}
    />
    <View style={styles.buttonSignUp}>
      <Button
        title="Sign Up"
        titleStyle={{ fontSize: 40, fontFamily: 'Optima-Bold' }}
        onPress={() => handleRegister()}
        buttonStyle={styles.signUpButtonStyle}
      />
    </View>
  </SafeAreaView> */
  );
}

const styles = StyleSheet.create({
  back: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: 'white',
  },
  grid: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  flapsRow: {
    top: '-8%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 20,
  },
  LoginFlap: {
    top: '2%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.5)',
    height: '100%',
    opacity: 20,
  },
  loginFlapText: {
    fontFamily: 'Optima-Bold',
    fontSize: 20,
    color: '#00000050',
  },
  SignUpFlap: {
    top: '2%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: '100%',
  },
  signUpFlapText: {
    fontFamily: 'Optima-Bold',
    fontSize: 20,
  },
  emailEnterTextH3: {
    alignContent: 'flex-start',
    justifyContent: 'center',
    color: '#F28E00',
    fontFamily: 'Optima-Bold',
  },
  EmailInput: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#F28E00',
    height: '50%',
    width: '100%',
  },
  passwordEnterTextH3: {
    alignContent: 'flex-start',
    justifyContent: 'center',
    color: '#F28E00',
    fontFamily: 'Optima-Bold',
  },
  passwordInput: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#F28E00',
    height: '50%',
    width: '100%',
  },
  SignUpButtonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F28E00',
    borderRadius: 50,
    borderColor: 'grey',
    borderWidth: 1,
  },
  SignUpButtonTitle: {
    fontSize: 25,
    fontFamily: 'Optima-Bold',
    alignContent: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});

