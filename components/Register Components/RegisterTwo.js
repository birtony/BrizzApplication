import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
  DatePickerIOS,
  SafeAreaView,
} from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProgressBar from 'react-native-progress/Bar';
import Modal from 'react-native-modal';

class RegisterTwo extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }

  state = {
    isModalVisible: false,
  };

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  NextScreen = () => {
    this.props.navigation.navigate('RegisterThree');
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.backgroundCircle} />
        <View style={styles.roundedRectangle} />
        <Image style={styles.logoImage} source={require('../../assets/logo.png')}></Image>
        <Text style={styles.accountSetupText}>Account Setup</Text>
        <Text h3 style={styles.FNameText}>
          First Name
        </Text>
        <Input
          inputContainerStyle={{ borderBottomWidth: 0, top: 13 }}
          containerStyle={styles.firstNameInput}
        />
        <Text h3 style={styles.LNameText}>
          Last Name
        </Text>
        <Input
          inputContainerStyle={{ borderBottomWidth: 0, top: 13 }}
          containerStyle={styles.LNameInput}
        />
        <Text h3 style={styles.dobText}>
          Date of Birth
        </Text>
        <TouchableWithoutFeedback onPress={this.toggleModal}>
          <View style={styles.orangeBorder}>
            <Text style={styles.dobModal}>{this.state.chosenDate.toDateString()}</Text>
          </View>
        </TouchableWithoutFeedback>
        <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}
          animationIn={'slideInRight'}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: 'white',
            }}
          >
            <DatePickerIOS mode={'date'} date={this.state.chosenDate} onDateChange={this.setDate} />
            <Button title="Done" onPress={this.toggleModal} />
          </View>
        </Modal>
        <TouchableWithoutFeedback onPress={this.NextScreen}>
          <Icon type="font-awesome" name="arrow-right" size={35} style={styles.nextScreenButton} />
        </TouchableWithoutFeedback>
        <ProgressBar
          progress={0.5}
          width={200}
          color={'#F28E00'}
          position={'absolute'}
          top={'95%'}
        />
      </SafeAreaView>
    );
  }
}
export default RegisterTwo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F28E00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  datePicker: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Setup: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundedRectangle: {
    width: '94%',
    height: '60%',
    borderRadius: 100 / 5,
    backgroundColor: 'white',
    position: 'absolute',
    top: '37%',
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  backgroundCircle: {
    width: '105%',
    height: '90%',
    borderRadius: 100 / 2,
    backgroundColor: 'white',
    position: 'absolute',
    top: '43%',
  },
  orangeBorder: {
    width: '85%',
    position: 'absolute',
    borderWidth: 2,
    height: '8%',
    borderRadius: 100 / 2,
    top: '80%',
    borderColor: '#F28E00',
  },
  logoImage: {
    width: '40%',
    height: '20%',
    position: 'absolute',
    top: '10%',
  },
  accountSetupText: {
    color: 'black',
    fontFamily: 'Optima-Bold',
    fontSize: 30,
    position: 'absolute',
    top: '38%',
  },
  FNameText: {
    position: 'absolute',
    top: '45%',
    left: '15%',
    //fontSize: 100,
    fontFamily: 'Optima-Bold',
    color: '#F28E00',
  },
  firstNameInput: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#F28E00',
    height: '8%',
    position: 'absolute',
    top: '50%',
    width: '85%',
  },
  LNameText: {
    position: 'absolute',
    top: '60%',
    left: '15%',
    fontFamily: 'Optima-Bold',
    color: '#F28E00',
  },
  LNameInput: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#F28E00',
    height: '8%',
    position: 'absolute',
    top: '65%',
    width: '85%',
  },
  dobText: {
    position: 'absolute',
    top: '75%',
    left: '15%',
    fontFamily: 'Optima-Bold',
    color: '#F28E00',
  },
  dobModal: {
    position: 'absolute',
    fontFamily: 'Optima-Bold',
    fontSize: 20,
    top: '25%',
    left: '10%',
  },
  nextScreenButton: {
    position: 'absolute',
    top: '90%',
    right: '8%',
  },
});
