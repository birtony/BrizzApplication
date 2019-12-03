import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Input, Text } from 'react-native-elements';
import * as Progress from 'react-native-progress';
import RNPickerSelect from 'react-native-picker-select';
import WhiteCard from '../../../common/components/WhiteCard';
import InputComponent from '../../../common/components/InputComponent';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { useStateValue } from '../../../utils/provider';
import Icon from 'react-native-vector-icons/FontAwesome';
import { city_changed, gpa_changed, gender_changed } from '../../../actions/user';

// eslint-disable-next-line max-lines-per-function
export default function AccountSetup2({ navigation }) {
  const [{ user }, dispatch] = useStateValue();

  const initialState = {
    isModalVisible: false,
  };

  const { isModalVisible } = state;

  const toggleModal = () => {
    setState({ isModalVisible: !isModalVisible });
  };

  return (
    <WhiteCard>
      <Grid style={styles.grid}>
        <Row style={styles.accountSetupRow}>
          <Col style={styles.accountSetupCol}>
            <Text h2 style={styles.accountSetupText}>
              Account Setup
            </Text>
          </Col>
        </Row>
        <Row size={2}>
          <Col>
            <InputComponent
              title={'City'}
              onChangeText={(value) => dispatch(city_changed(value))}
              property={user.city}
              iconName={'home'}
            />
          </Col>
        </Row>
        <Row size={2}>
          <Col>
            <InputComponent
              title={'GPA'}
              onChangeText={(value) => dispatch(gpa_changed(value))}
              property={user.gpa}
              iconName={'calculator'}
            />
          </Col>
        </Row>
        <Row size={2} style={styles.genderRow}>
          <Col style={styles.genderCol}>
            <Text h3 style={styles.genderText}>
              Gender
            </Text>
          </Col>
        </Row>
        <Row style={styles.genderRow2}>
          <Col style={styles.genderCol2}>
            <View style={styles.orangeBorder} />
            <Input
              inputContainerStyle={{ borderBottomWidth: 0, top: 13 }}
              containerStyle={styles.genderInput}
              disabled
            />
            <TouchableWithoutFeedback onPress={toggleModal}>
              <View style={styles.picker}>
                <RNPickerSelect
                  style={styles.pickerStyle}
                  onValueChange={(value) => dispatch(gender_changed(value))}
                  items={[
                    { label: 'Male', value: 'male' },
                    { label: 'Female', value: 'female' },
                    { label: 'Other', value: 'other' },
                  ]}
                />
              </View>
            </TouchableWithoutFeedback>
          </Col>
        </Row>
        <Row style={styles.buttonRow}>
          <Col style={styles.buttonCol}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('AccountSetup3')}>
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
            <Progress.Bar progress={1} width={200} color={'#F28E00'} style={styles.progressBar} />
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
  accountSetupRow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  accountSetupCol: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  accountSetupText: {
    textDecorationLine: 'underline',
    fontFamily: 'Optima-Bold',
  },
  genderRow: {
    alignItems: 'flex-start',
  },
  genderCol: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  genderText: {
    alignSelf: 'flex-start',
    left: '15%',
    color: '#F28E00',
    fontFamily: 'Optima-Bold',
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
    alignSelf: 'center',
  },
  genderRow2: {
    alignItems: 'center',
    top: '-15%',
    justifyContent: 'center',
  },
  genderCol2: {
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
    borderRadius: 100 / 2,
    borderColor: '#F28E00',
  },
  picker: {
    top: '-40%',
    left: '-15%',
  },
  pickerStyle: {
    fontFamily: 'Optima-Bold',
  },
});
