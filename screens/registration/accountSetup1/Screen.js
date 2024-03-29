import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, DatePickerIOS } from 'react-native';
import { Button, Text } from 'react-native-elements';
import ProgressBar from 'react-native-progress/Bar';
import WhiteCard from '../../../common/components/WhiteCard';
import InputComponent from '../../../common/components/InputComponent';
import { useStateValue } from '../../../utils/provider';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import { first_name_changed, last_name_changed, birth_date_changed } from '../../../actions/user';
import moment from 'moment';
import { RFPercentage } from 'react-native-responsive-fontsize';

// eslint-disable-next-line max-lines-per-function
export default function AccountSetup1({ navigation }) {
  const [{ user }, dispatch] = useStateValue();
  moment.locale('en');
  const [chosenDate, setChosenDate] = useState(new Date());
  const [isModalVisible, setIsModalVisible] = useState(false);
  function setDate(newDate) {
    setChosenDate({ chosenDate: newDate });
  }
  function toggleModal(value) {
    setIsModalVisible({ isModalVisible: value });
  }

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
        <Row size={3}>
          <Col>
            <InputComponent
              title={'First Name'}
              onChangeText={(value) => dispatch(first_name_changed(value))}
              property={user.firstName}
              isSecure={false}
            />
          </Col>
        </Row>
        <Row size={3}>
          <Col>
            <InputComponent
              title={'Last Name'}
              onChangeText={(value) => dispatch(last_name_changed(value))}
              property={user.lastName}
              isSecure={false}
            />
          </Col>
        </Row>
        <Row size={0}>
          <Col>
            <Text style={styles.dobText}>Date of Birth</Text>
            <TouchableWithoutFeedback onPress={() => toggleModal(true)}>
              <View style={styles.orangeBorder}>
                <Text style={styles.dobModal}>{moment(chosenDate).format('DD/MM/YYYY')}</Text>
                {/* Find a way to display chosenDate in a right format */}
                <Modal
                  isVisible={isModalVisible}
                  onBackdropPress={() => setIsModalVisible(false)}
                  animationIn={'slideInRight'}
                >
                  <View style={styles.datePickerView}>
                    <DatePickerIOS
                      mode={'date'}
                      date={chosenDate}
                      onDateChange={(value) => setChosenDate({ chosenDate: value })}
                    />
                    <Button
                      title="Done"
                      onPress={() => {
                        toggleModal(false);
                        dispatch(birth_date_changed(chosenDate));
                      }}
                    />
                  </View>
                </Modal>
              </View>
            </TouchableWithoutFeedback>
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
            <ProgressBar progress={0.5} width={200} color={'#F28E00'} style={styles.progressBar} />
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
  orangeBorder: {
    width: '70%',
    alignSelf: 'flex-start',
    position: 'absolute',
    left: '15%',
    borderWidth: 2,
    height: '90%',
    top: '70%',
    borderRadius: 50,
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
    top: '-14%',
    alignSelf: 'center',
    fontFamily: 'Optima-Bold',
    color: '#F28E00',
    fontSize: RFPercentage(4.5),
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
  datePickerView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
