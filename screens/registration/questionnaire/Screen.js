import React, { Component } from 'react';
import { DeckSwiper, Container } from 'native-base';
import { StyleSheet, View } from 'react-native';
import { Text } from 'native-base';
import { Button } from 'react-native-elements';
import QuestionnaireGrid from './QuestionnaireGrid';
import WhiteCard from '../../../common/components/WhiteCard';
import { WORK_ACTIVITIES } from '../../../const/USER';

export default class Questionnaire extends Component {
  render() {
    return (
      <Container>
        <WhiteCard>
          <View style={styles.root}>
            <View style={styles.deckerContainer}>
              <DeckSwiper
                style={styles.deckSwiper}
                ref={(c) => (this._deckSwiper = c)}
                dataSource={WORK_ACTIVITIES}
                renderEmpty={() => (
                  <View style={{ alignSelf: 'center' }}>
                    <Text>Over</Text>
                  </View>
                )}
                renderItem={(item) => <QuestionnaireGrid questions={item} />}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <Button
                buttonStyle={styles.buttonStyle}
                buttonTitle={styles.buttonTitle}
                title="Previous"
                onPress={() => {
                  this._deckSwiper._root.swipeLeft();
                }}
              />
              <Button
                buttonStyle={styles.buttonStyle}
                buttonTitle={styles.buttonTitle}
                title="Next"
                onPress={() => {
                  this._deckSwiper._root.swipeRight();
                }}
              />
            </View>
          </View>
        </WhiteCard>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  deckerContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 1,
  },
  deckSwiper: {
    height: '100%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '10%',
  },
  buttonStyle: {
    width: '70%',
    alignSelf: 'center',
    backgroundColor: '#F28E00',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  buttonTitle: {
    color: 'black',
    fontFamily: 'Optima-Bold',
  },
});
