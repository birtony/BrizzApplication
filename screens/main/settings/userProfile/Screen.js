import React from 'react';
import { SafeAreaView, StyleSheet, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Grid, Col, Row } from 'react-native-easy-grid';
import ProfileText from '../../../../common/components/ProfileText';

export default function UserProfile({ navigation }) {
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <Grid style={styles.grid}>
        <Row size={1} style={styles.userNameRow}>
          <Col style={styles.userNameCol}>
            <ProfileText textToPut="User Name" style={styles.userName} />
          </Col>
        </Row>
        <Row size={6} style={styles.backdropRow}>
          <View style={styles.whiteCard}>
            <Grid style={styles.grid}>
              <Row style={styles.firstRow}>
                <Col style={styles.FirstRowCol} size={3}>
                  <Image
                    style={styles.profilePhoto}
                    source={require('../../../../assets/ProfilePhoto.png')} />
                </Col>
                <Col style={styles.FirstRowCol2} size={3}>
                  <Row style={styles.firstNameRow}>
                    <ProfileText textToPut="First Name" style={styles.firstNameStyle} />
                  </Row>
                  <Row style={styles.lastNameRow}>
                    <ProfileText textToPut="Last Name" style={styles.lastNameStyle} />
                  </Row>
                </Col>
              </Row>
              <Row style={styles.birthDateRow}>
                <Col>
                  <ProfileText textToPut={'Date of Birth: ' + '08-02-1997'} style={styles.dobStyle} />
                </Col>
              </Row>
              <Row style={styles.genderCityRow}>
                <Col>
                  <ProfileText textToPut={'Gender: ' + 'Male'} style={styles.genderStyle} />
                </Col>
                <Col>
                  <ProfileText textToPut={'City: ' + 'Toronto'} style={styles.cityStyle} />
                </Col>
              </Row>
              <Row style={styles.redoQuestionnaireRow}>
                <Button buttonStyle={styles.redoButtonStyle} title="Redo Questionnaire" onPress={() => navigation.navigate('AccountSetup3')}>Redo Questionnaire</Button>
              </Row>
            </Grid>
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
  userNameRow: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userNameCol: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    alignSelf: 'center',
    fontFamily: 'Optima-Bold',
    fontSize: 40,
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
  backdropRow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdropCol: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePhoto: {
    width: '80%',
    height: '80%',
    minWidth: '30%',
    minHeight: '30%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  firstNameStyle: {
    fontSize: 40,
    fontFamily: 'Optima-Bold',
    alignSelf: 'center',
  },
  lastNameStyle: {
    fontSize: 25,
    fontFamily: 'Optima-Bold',
    alignSelf: 'center',
    top: '-30%',
  },
  dobStyle: {
    fontSize: 25,
    alignSelf: 'center',
    fontFamily: 'Optima-Bold',
    textDecorationLine: 'underline',
  },
  firstRow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  FirstRowCol: {
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  FirstRowCol2: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstNameRow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  lastNameRow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  birthDateRow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  genderCityRow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  genderStyle: {
    fontSize: 25,
    alignSelf: 'center',
    fontFamily: 'Optima-Bold',
    textDecorationLine: 'underline',
  },
  cityStyle: {
    fontSize: 25,
    alignSelf: 'center',
    fontFamily: 'Optima-Bold',
    textDecorationLine: 'underline',
  },
  redoQuestionnaireRow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  redoButtonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F28E00',
    borderRadius: 50,
    borderColor: 'grey',
    borderWidth: 1,
  },
});
