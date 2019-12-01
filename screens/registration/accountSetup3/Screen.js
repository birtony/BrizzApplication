import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import logo from '../../../assets/logo.png';

export default function AccountSetup3({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundCircle}></View>
      <View style={styles.roundedRectangle}></View>
      <Image style={styles.logoImage} source={logo}></Image>
      <Text style={styles.accountSetupText}>Account Setup</Text>
      <Text style={styles.line1Text}>TO BETTER FIND WHAT</Text>
      <Text style={styles.line2Text}>PROGRAM YOU WANT, PLEASE</Text>
      <Text style={styles.line3Text}>ANSWER THE FOLLOWING</Text>
      <Text style={styles.line4Text}>QUESTIONS</Text>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('ProgramsMatched')}>
        <Icon
          type="font-awesome"
          name="arrow-circle-right"
          size={50}
          style={{ position: 'absolute', top: '70%' }}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F28E00',
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
  line1Text: {
    position: 'absolute',
    top: '50%',
    color: '#F28E00',
    fontFamily: 'Optima-Bold',
    fontSize: 22,
    textAlign: 'justify',
  },
  line2Text: {
    position: 'absolute',
    top: '54%',
    color: '#F28E00',
    fontFamily: 'Optima-Bold',
    fontSize: 22,
    textAlign: 'justify',
  },
  line3Text: {
    position: 'absolute',
    top: '58%',
    color: '#F28E00',
    fontFamily: 'Optima-Bold',
    fontSize: 22,
    textAlign: 'justify',
  },
  line4Text: {
    position: 'absolute',
    top: '62%',
    color: '#F28E00',
    fontFamily: 'Optima-Bold',
    fontSize: 22,
    textAlign: 'justify',
  },
});
