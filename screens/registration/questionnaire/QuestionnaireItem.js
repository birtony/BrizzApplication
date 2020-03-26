import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, Text } from 'native-base';

export default function QuestionnaireItem({ question }) {
  return (
    <View style={styles.root}>
      <View style={styles.questionContainer}>
        <View style={styles.buttonsContainer}>
          <Button
            style={styles.buttonRed}
            icon
            bordered
            dark
            onPress={console.log('Saving answer')}
          >
            <Icon style={styles.icon} name="close-circle-outline" />
          </Button>
          <Button
            style={styles.buttonGreen}
            icon
            bordered
            dark
            onPress={console.log('Saving answer')}
          >
            <Icon style={styles.icon} name="checkmark-circle-outline" />
          </Button>
        </View>
        <Text>{question.label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: '92%',
    width: '95%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
  },
  buttonsContainer: {
    width: '100%',
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 15,
    position: 'absolute',
    top: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  questionContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRed: {
    backgroundColor: '#e35959',
  },
  buttonGreen: {
    backgroundColor: '#90ee90',
  },
  icon: {
    color: 'black',
  },
});
