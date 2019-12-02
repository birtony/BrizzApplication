import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, DatePickerIOS } from 'react-native';
import { Button, Text } from 'react-native-elements';
import * as Progress from 'react-native-progress';
import WhiteCard from '../../../common/components/WhiteCard';
import InputComponent from '../../../common/components/InputComponent';
import { useStateValue } from '../../../utils/provider';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AccountSetup1({ navigation }) {
  let chosenDate = new Date();
  let isModalVisible = false;

  function setDate(newDate) {
    // this.setState({ chosenDate: newDate });
    chosenDate = newDate;
  }
  function toggleModal() {
    isModalVisible = false;
    // this.setState({ isModalVisible: !isModalVisible });
  };
  const [{ user }, dispatch] = useStateValue();
  return (
    <WhiteCard>
      <Grid style={styles.grid}>
        <Row style={styles.QuestionnaireTextLabelRow}>
          <Col style={styles.QuestionnaireTextLabelCol}>
            <Text h3 style={styles.QuestionnaireTextLabel}>
              AccountSetup
            </Text>
          </Col>
        </Row>
        <Row size={2}>
          <Col>
            <InputComponent
              title={'First Name'}
              onChangeAction={() => dispatch(register_fname_changed())}
              property={user.fname}
              iconName={'at'}
            />
          </Col>
        </Row>
        <Row size={2}>
          <Col>
            <InputComponent
              title={'Last Name'}
              onChangeAction={() => dispatch(register_lname_changed())}
              property={user.lname}
              iconName={'at'}
            />
          </Col>
        </Row>
        <Row size={2} style={styles.dobTextRow}>
          <Col style={styles.dobTextCol}>
            <Text h3 style={styles.dobText}>
              Date of Birth
            </Text>
          </Col>
        </Row>
        <Row style={styles.dateofBirthInputRow} size={2}>
          <Col style={styles.dateofBirthInputCol}>
            <TouchableWithoutFeedback onPress={toggleModal()}>
              <View style={styles.orangeBorder}>
                <Text style={styles.dobModal}>
                  {chosenDate.toDateString()}
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <Modal
              isVisible={isModalVisible}
              onBackdropPress={() => isVisible = false}
              animationIn={'slideInRight'}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  backgroundColor: 'white',
                }}
              >
                <DatePickerIOS
                  mode={'date'}
                  date={chosenDate}
                  onDateChange={setDate}
                />
                <Button title="Done" onPress={toggleModal()} />
              </View>
            </Modal>
          </Col>
        </Row>
        <Row style={styles.buttonRow}>
          <Col style={styles.buttonCol}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('AccountSetup2')}>
              <Icon
                type="font-awesome"
                name="arrow-circle-right"
                size={50}
                style={styles.nextButton}
              />
            </TouchableWithoutFeedback>
          </Col>
        </Row>
        <Row style={styles.progressBarRow}>
          <Col style={styles.progressBarCol}>
            <Progress.Bar
              progress={0.5}
              width={200}
              color={'#F28E00'}
              style={styles.progressBar}
            />
          </Col>
        </Row>
      </Grid>
    </WhiteCard >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F28E00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  datePicker: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orangeBorder: {
    width: '70%',
    alignSelf: 'flex-start',
    position: 'absolute',
    left: '15%',
    borderWidth: 2,
    height: '90%',
    top: '70%',
    borderRadius: 100 / 2,
    borderColor: '#F28E00',
  },
  dobTextRow: {
    alignItems: 'center',
    justifyContent: 'center',
    top: '-3%',
  },
  dobTextCol: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  dobText: {
    left: '-11%',
    top: '-18%',
    alignSelf: 'center',
    fontFamily: 'Optima-Bold',
    color: '#F28E00',
  },
  dobModal: {
    position: 'absolute',
    color: '#B8B8B8',
    fontSize: 15,
    top: '25%',
    left: '10%',
  },
  dateofBirthInputRow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: '-30%',
  },
  dateofBirthInputCol: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  QuestionnaireTextLabelRow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  QuestionnaireTextLabelCol: {
    alignItems: 'center',
    alignContent: 'center',
  },
  QuestionnaireTextLabel: {
    fontFamily: 'Optima-Bold',
    textDecorationLine: 'underline',
  },
  progressBarRow: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  progressBarCol: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  progressBar: {
    alignSelf: 'center',
  },
  buttonRow: {
    flex: 1,
    alignItems: 'center',
    top: '2%',
    justifyContent: 'center',
  },
  buttonCol: {
    alignItems: 'flex-end',
    right: '30%',
    justifyContent: 'center',
  },
  nextScreenButton: {
  },
});
