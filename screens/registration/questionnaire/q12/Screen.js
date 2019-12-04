import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { Col, Row } from 'react-native-easy-grid';
import WhiteCard from '../../../../common/components/WhiteCard';
import * as questions from '../../../../const/questions/questions.json';
import RadioForm from 'react-native-simple-radio-button';
import { Button } from 'react-native-paper';

const q12 = questions.Q12;
const radio_props = [
  { label: 'Yes', value: 0 },
  { label: 'No', value: 1 },
];
export default function Question12({ navigation }) {
  state = { value: null };
  console.log(state);
  return (
    <WhiteCard>
      <View style={styles.grid}>
        <Row style={styles.questionnaireRow}>
          <Col style={styles.questionnaireCol}>
            <View style={styles.questionLabelView}>
              <Text h3 style={styles.questionnaireLabel}>
                Questionnaire
              </Text>
            </View>
          </Col>
        </Row>
        <Row style={styles.questionCardsRow}>
          <Col style={styles.questionCardsCol}>
            <Text style={styles.question}>{q12}</Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <View>
              <RadioForm
                style={styles.RadioForm}
                radio_props={radio_props}
                isSelected="false"
                initial={0}
                buttonColor={'#F28E00'}
                selectedButtonColor={'#F28E00'}
                buttonInnerColor={'#F28E00'}
                onPress={(value) => {
                  this.setState({ value: this.value });
                }}
              />
            </View>
          </Col>
        </Row>
        <Row>
          <Col>
            <View>
              <Button
                style={styles.nextButton}
                onPress={() => navigation.navigate('ProgramsMatched')}
              >
                Next Question
              </Button>
            </View>
          </Col>
        </Row>
      </View>
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
  questionnaireRow: {
    flex: 1,
  },
  questionnaireCol: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  questionLabelView: {
    display: 'flex',
  },
  questionnaireLabel: {
    fontFamily: 'Optima-Bold',
  },
  questionCardsRow: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  questionCardsCol: {
    flex: 1,
  },
  question: {
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Optima-Bold',
  },
  answer1: {
    flex: 1,
    justifyContent: 'center',
  },
  answer2: {
    flex: 1,
    justifyContent: 'center',
  },
  nextButton: {
    alignSelf: 'center',
    backgroundColor: '#F28E00',
    width: '50%',
  },
  RadioForm: {
    alignSelf: 'center',
    fontSize: 20,
  },
});
