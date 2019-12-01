import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { useStateValue } from '../../utils/provider';
import { login_username_changed, login_password_changed, logged_in } from '../../actions/auth';
import { Col, Row, Grid } from 'react-native-easy-grid';
import WhiteCard from '../../common/components/WhiteCard';
import InputComponent from '../../common/components/InputComponent';

import * as api from '../../api';

export default function Login({ navigation }) {
  const [{ user }, dispatch] = useStateValue();

  return (
    <WhiteCard style={styles.container}>
      <View style={styles.back}>
        <Grid style={styles.grid}>
          <Row style={styles.flapsRow}>
            <Col>
              <View style={styles.LoginFlap}>
                <Text style={styles.loginFlapText}>Log In</Text>
              </View>
            </Col>
            <Col></Col>
            <Col>
              <View style={styles.SignUpFlap}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Signup')}>
                  <Text style={styles.signUpFlapText}>Sign Up</Text>
                </TouchableWithoutFeedback>
              </View>
            </Col>
          </Row>
          <Row size={2}>
            <InputComponent
              title={'Email'}
              onChangeAction={() => dispatch(login_username_changed())}
              property={user.email}
              iconName={'at'}
            ></InputComponent>
          </Row>
          <Row size={2}>
            <InputComponent
              title={'Password'}
              onChangeAction={() => dispatch(login_password_changed())}
              property={user.password}
              iconName={'key'}
            ></InputComponent>
          </Row>
          <Row size={0.5}></Row>
          <Row>
            <Col size={1}></Col>
            <Col size={2}>
              <Button
                title="Log In"
                titleStyle={styles.LoginButtonTitle}
                buttonStyle={styles.LoginButtonStyle}
                onPress={async () => {
                  const result = await api.login(user);
                  if (result) {
                    dispatch(logged_in(...result));
                  }
                }}
              />
            </Col>
            <Col size={1}></Col>
          </Row>
          <Row size={0.5}></Row>
        </Grid>
      </View>
    </WhiteCard>
  );
}

const styles = StyleSheet.create({
  back: {
    height: '100%',
    width: '100%',
    borderTopRightRadius: 20,
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
    backgroundColor: 'white',
    height: '100%',
  },
  loginFlapText: {
    fontFamily: 'Optima-Bold',
    fontSize: 20,
  },
  SignUpFlap: {
    top: '2%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: '100%',
    opacity: 20,
  },
  signUpFlapText: {
    fontFamily: 'Optima-Bold',
    fontSize: 20,
    color: '#00000050',
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
  LoginButtonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F28E00',
    borderRadius: 50,
    borderColor: 'grey',
    borderWidth: 1,
  },
  LoginButtonTitle: {
    fontSize: 25,
    fontFamily: 'Optima-Bold',
    alignContent: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});
