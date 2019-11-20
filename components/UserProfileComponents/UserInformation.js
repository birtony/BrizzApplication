import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, Image, Text} from 'react-native';

export default class UserInformation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.background} />
        <Image
          style={styles.profilePhoto}
          source={require('../../assets/ProfilePhoto.png')}
        />
        <Text style={styles.FName}>First Name</Text>
        <Text style={styles.LName}>Last Name</Text>
        <Text style={styles.BDay}>Date of Birth: 00/00/0000</Text>
        <Text style={styles.gender}>Gender: M</Text>
        <Text style={styles.city}>City: Aurora</Text>
        <Text style={styles.qAnswerLbl}>Questionnaire Answers</Text>
        <Text style={styles.a1}>Answer 1: Blah</Text>
        <Text style={styles.a2}>Answer 2: Blah</Text>
        <Text style={styles.a3}>Answer 3: Blah</Text>
        <Text style={styles.a4}>Answer 4: Blah</Text>
        <Text style={styles.a5}>Answer 5: Blah</Text>
        <Text style={styles.a6}>Answer 6: Blah</Text>
        <Text style={styles.a7}>Answer 7: Blah</Text>
        <Text style={styles.a8}>Answer 8: Blah</Text>
        <Text style={styles.a9}>Answer 9: Blah</Text>
        <Text style={styles.a10}>Answer 10: Blah</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'white',
    height: '180%',
    width: '92%',
    left: '4%',
    top: '-75%',
    borderRadius: 100 / 5,
  },
  profilePhoto: {
    flex: 1,
    position: 'absolute',
    top: '-70%',
    left: '8%',
    width: '30%',
    height: '30%',
  },
  FName: {
    flex: 1,
    position: 'absolute',
    left: '45%',
    top: '-65%',
    fontSize: 40,
    fontFamily: 'Optima-Bold',
  },
  LName: {
    flex: 1,
    position: 'absolute',
    left: '52%',
    top: '-50%',
    fontSize: 30,
    fontFamily: 'Optima-Bold',
  },
  BDay: {
    flex: 1,
    position: 'absolute',
    left: '12%',
    top: '-25%',
    fontFamily: 'Optima-Bold',
    fontSize: 30,
    textDecorationLine: 'underline',
  },
  gender: {
    flex: 1,
    position: 'absolute',
    left: '16%',
    top: '-12%',
    fontFamily: 'Optima-Bold',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  city: {
    flex: 1,
    position: 'absolute',
    left: '60%',
    top: '-12%',
    fontFamily: 'Optima-Bold',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  qAnswerLbl: {
    flex: 1,
    position: 'absolute',
    left: '28%',
    top: '-5%',
    fontFamily: 'Optima-Bold',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  a1: {
    flex: 1,
    position: 'absolute',
    left: '16%',
    top: '3%',
    fontFamily: 'Optima-Bold',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  a2: {
    flex: 1,
    position: 'absolute',
    left: '16%',
    top: '11%',
    fontFamily: 'Optima-Bold',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  a3: {
    flex: 1,
    position: 'absolute',
    left: '16%',
    top: '19%',
    fontFamily: 'Optima-Bold',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  a4: {
    flex: 1,
    position: 'absolute',
    left: '16%',
    top: '27%',
    fontFamily: 'Optima-Bold',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  a5: {
    flex: 1,
    position: 'absolute',
    left: '16%',
    top: '35%',
    fontFamily: 'Optima-Bold',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  a6: {
    flex: 1,
    position: 'absolute',
    left: '16%',
    top: '43%',
    fontFamily: 'Optima-Bold',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  a7: {
    flex: 1,
    position: 'absolute',
    left: '16%',
    top: '51%',
    fontFamily: 'Optima-Bold',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  a8: {
    flex: 1,
    position: 'absolute',
    left: '16%',
    top: '59%',
    fontFamily: 'Optima-Bold',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  a9: {
    flex: 1,
    position: 'absolute',
    left: '16%',
    top: '67%',
    fontFamily: 'Optima-Bold',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  a10: {
    flex: 1,
    position: 'absolute',
    left: '16%',
    top: '75%',
    fontFamily: 'Optima-Bold',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
});
