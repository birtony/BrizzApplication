import React from 'react';
import { useStateValue } from '../../../utils/provider';
import {
  qs_artistic_changed,
  qs_conventional_changed,
  qs_enterprising_changed,
  qs_investigative_changed,
  qs_realistic_changed,
  qs_social_changed,
} from '../../../actions/user';
import { StyleSheet, View, Alert } from 'react-native';
import { Button, Icon, Text } from 'native-base';

export default function QuestionnaireItem({ question, redCnt, greenCnt }) {
  const [{ qs }, dispatch] = useStateValue();
  let answered = 0;
  return (
    <View style={answered === 0 ? styles.root : answered === 1 ? styles.rootGreen : styles.rootRed}>
      <View style={styles.questionContainer}>
        <View style={styles.buttonsContainer}>
          <Button
            style={styles.buttonRed}
            icon
            bordered
            dark
            onPress={() => {
              if (redCnt === 0) {
                answered = -1;
                redCnt++;
                switch (question.category) {
                  case 'a':
                    dispatch(qs_artistic_changed(qs.a - 1));
                    break;
                  case 'c':
                    dispatch(qs_conventional_changed(qs.c - 1));
                    break;
                  case 'e':
                    dispatch(qs_enterprising_changed(qs.e - 1));
                    break;
                  case 'i':
                    dispatch(qs_investigative_changed(qs.i - 1));
                    break;
                  case 'r':
                    dispatch(qs_realistic_changed(qs.r - 1));
                    break;
                  case 's':
                    dispatch(qs_social_changed(qs.s - 1));
                    break;
                  default:
                    break;
                }
              } else {
                Alert.alert('You have already selected the position you do not prefer');
              }
              console.log(qs);
            }}
          >
            <Icon style={styles.icon} name="close-circle-outline" />
          </Button>
          <Button
            style={styles.buttonGreen}
            icon
            bordered
            dark
            onPress={() => {
              if (greenCnt === 0) {
                answered = 1;
                greenCnt++;
                switch (question.category) {
                  case 'a':
                    dispatch(qs_artistic_changed(qs.a + 1));
                    break;
                  case 'c':
                    dispatch(qs_conventional_changed(qs.c + 1));
                    break;
                  case 'e':
                    dispatch(qs_enterprising_changed(qs.e + 1));
                    break;
                  case 'i':
                    dispatch(qs_investigative_changed(qs.i + 1));
                    break;
                  case 'r':
                    dispatch(qs_realistic_changed(qs.r + 1));
                    break;
                  case 's':
                    dispatch(qs_social_changed(qs.s + 1));
                    break;
                  default:
                    break;
                }
              } else {
                Alert.alert('You have already selected the position you prefer');
              }
              console.log(qs);
            }}
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
  rootGreen: {
    height: '92%',
    width: '95%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    backgroundColor: 'rgba(144, 238, 144, 0.5)',
  },
  rootRed: {
    height: '92%',
    width: '95%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    backgroundColor: 'rgba(227, 89, 89, 0.5)',
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
