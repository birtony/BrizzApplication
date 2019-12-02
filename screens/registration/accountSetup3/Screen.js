import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import WhiteCard from '../../../common/components/WhiteCard';
import { Text } from 'react-native-elements';
import { Grid, Row, Col } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AccountSetup3({ navigation }) {
  const label = 'TO BETTER FIND WHAT PROGRAM YOU WANT, PLEASE ANSWER THE FOLLOWING QUESTIONS';
  return (
    <WhiteCard>
      <Grid style={styles.grid}>
        <Row style={styles.accountSetupTextRow}>
          <Col style={styles.accountSetupTextCol}>
            <Text h2 style={styles.accountSetupText}>Account Setup</Text>
          </Col>
        </Row>
        <Row style={styles.labelRow}>
          <Col style={styles.labelCol}>
            <Text h5 style={styles.labelText}>{label}</Text>
          </Col>
        </Row>
        <Row style={styles.NextButtonCol}>
          <Col style={styles.NextButtonRow}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Questionnaire')}>
              <Icon
                type="font-awesome"
                name="arrow-circle-right"
                size={50}
                style={styles.nextButton}
              />
            </TouchableWithoutFeedback>
          </Col>
        </Row>
      </Grid>
    </WhiteCard>
  );
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  accountSetupTextRow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  accountSetupTextCol: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  accountSetupText: {
    top: '-30%',
    alignSelf: 'center',
    textDecorationLine: 'underline',
    fontFamily: 'Optima-Bold',
  },
  labelRow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelCol: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText: {
    alignSelf: 'center',
    top: '-50%',
    fontFamily: 'Optima-Bold',
    fontSize: 20,
  },
  NextButtonRow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  NextButtonCol: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButton: {
    alignSelf: 'center',
    top: '-50%',
  },
});
