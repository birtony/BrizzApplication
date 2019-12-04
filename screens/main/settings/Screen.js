import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Row, Grid, Col } from 'react-native-easy-grid';
import ProfileText from '../../../common/components/ProfileText';
import { logged_out } from '../../../actions/auth';
export default function Settings({ navigation }) {
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <Grid style={styles.grid}>
        <Row style={styles.settingsRow} size={1}>
          <Col style={styles.settingsCol}>
            <ProfileText textToPut={'Settings'} style={styles.settingsTopText} />
          </Col>
        </Row>
        <Row size={5}>
          <View style={styles.whiteCard}>
            <Row style={styles.userProfileRow}>
              <Col style={styles.profileButtonCol}>
                <Button
                  title="User Profile"
                  onPress={() => navigation.navigate('UserProfile')}
                  buttonStyle={styles.userProfileButtonStyle}
                />
              </Col>
            </Row>
            <Row style={styles.logoutRow}>
              <Col style={styles.logoutButtonCol}>
                <Button
                  title="Log Out"
                  buttonStyle={styles.logoutButtonStyle}
                  onPress={async () => {
                    dispatch(logged_out(...result));
                    navigation.navigate('Login');
                  }}
                />
              </Col>
            </Row>
            <Row size={3}></Row>
          </View>
        </Row>
      </Grid>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: '#F28E00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  whiteCard: {
    flex: 1,
    maxWidth: '94%',
    maxHeight: '95%',
    width: '94%',
    height: '95%',
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    justifyContent: 'center',
  },
  settingsRow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsCol: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsTopText: {
    fontFamily: 'Optima-Bold',
    alignSelf: 'center',
    fontSize: 60,
  },
  userProfileRow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  userProfileButtonStyle: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#F28E00',
    borderRadius: 50,
    borderColor: 'grey',
    borderWidth: 1,
    width: '100%',
  },
  logoutRow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButtonCol: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    top: '50%',
  },
  logoutButtonStyle: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 50,
    width: '100%',
    borderColor: 'grey',
    borderWidth: 1,
  },
  profileButtonCol: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
