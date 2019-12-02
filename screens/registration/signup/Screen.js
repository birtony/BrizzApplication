import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { useStateValue } from '../../../utils/provider';
import {
  login_username_changed,
  signup_password_changed,
  signup_passwordConf_changed,
  signed_up,
} from '../../../actions/auth';
import { Col, Row, Grid } from 'react-native-easy-grid';
import WhiteCard from '../../../common/components/WhiteCard';
import InputComponent from '../../../common/components/InputComponent';
import * as api from '../../../api';

// eslint-disable-next-line max-lines-per-function
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
          <Row size={3}>
            <InputComponent
              title={'Email'}
              onChangeText={(text) => dispatch(login_username_changed(text))}
              property={user.email}
              iconName={'at'}
              isSecure={false}
            />
          </Row>
          <Row size={3}>
            <InputComponent
              title={'Password'}
              onChangeText={(text) => dispatch(signup_password_changed(text))}
              property={user.signup_password}
              iconName={'key'}
              isSecure={true}
            />
          </Row>
          <Row size={3}>
            <InputComponent
              title={'Confirm Password'}
              onChangeText={(text) => dispatch(signup_passwordConf_changed(text))}
              property={user.signup_passwordConf}
              iconName={'key'}
              isSecure={true}
            />
          </Row>
          <Row size={0.5} />
          <Row>
            <Col size={1} />
            <Col size={2}>
              <Button
                title="Sign Up"
                titleStyle={styles.SignUpButtonTitle}
                buttonStyle={styles.SignUpButtonStyle}
                onPress={async () => {
                  const result = await api.signup(user);
                  if (result) {
                    dispatch(signed_up(...result));
                    navigation.navigate('AccountSetup1');
                  }
                }}
              />
              <Button
                title="Go Further"
                onPress={() => navigation.navigate('AccountSetup1')}
              ></Button>
            </Col>
            <Col size={1}></Col>
          </Row>
          <Row size={0.5} />
        </Grid>
      </View>
    </WhiteCard>
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

