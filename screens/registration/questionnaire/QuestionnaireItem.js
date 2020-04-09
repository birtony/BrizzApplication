import React, { useState } from 'react';
import { useStateValue } from '../../../utils/provider';
import {
  qs_artistic_changed,
  qs_conventional_changed,
  qs_enterprising_changed,
  qs_investigative_changed,
  qs_realistic_changed,
  qs_social_changed,
} from '../../../actions/user';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, Text } from 'native-base';

export default function QuestionnaireItem({
  question,
  redCnt,
  greenCnt,
  onRedPress,
  onGreenPress,
}) {
  const [{ qs }, dispatch] = useStateValue();
  const [backgroundColor, setBackgroundColor] = useState('#fff');
  return (
    <View style={[styles.root, { backgroundColor: backgroundColor }]}>
      <View style={styles.questionContainer}>
        <View style={styles.buttonsContainer}>
          <Button
            style={styles.buttonRed}
            icon
            bordered
            dark
            onPress={() => {
              console.log('item redCnt = ', redCnt);
              if (redCnt === 0) {
                setBackgroundColor('rgba(227, 89, 89, 0.5)');
                onRedPress(1);
                if (greenCnt !== 0) {
                  onGreenPress(0);
                  console.log('decreased greenCnt:', greenCnt);
                }
                console.log('increased redCnt:', redCnt);
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
                setBackgroundColor('#fff');
                onRedPress(0);
                console.log('decreased redCnt:', redCnt);
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
              }
            }}
          >
            <Icon style={styles.icon} name="close-circle-outline" />
          </Button>
          <Button
            style={styles.buttonGreen}
            iconå
            bordered
            dark
            onPress={() => {
              if (greenCnt === 0) {
                setBackgroundColor('rgba(144, 238, 144, 0.5)');
                onGreenPress(1);
                if (redCnt !== 0) {
                  onRedPress(0);
                  console.log('decreased redCnt:', redCnt);
                }
                console.log('increased greenCnt:', greenCnt);
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
                setBackgroundColor('#fff');
                onGreenPress(0);
                console.log('decreased greenCnt:', greenCnt);
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
              }
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
