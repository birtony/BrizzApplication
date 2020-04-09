import React, { Component } from 'react';
import { Container } from 'native-base';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Swiper from 'react-native-deck-swiper';
import QuestionnaireGrid from './QuestionnaireGrid';
import WhiteCard from '../../../common/components/WhiteCard';
import { WORK_ACTIVITIES } from '../../../const/USER';

export default class Questionnaire extends Component {
  render(navigation) {
    return (
      <Container>
        <WhiteCard>
          <View style={styles.root}>
            <View style={styles.deckerContainer}>
              <Swiper
                cardStyle={styles.swiper}
                ref={(swiper) => {
                  this.swiper = swiper;
                }}
                cards={WORK_ACTIVITIES}
                renderCard={(item) => <QuestionnaireGrid questions={item} />}
                infinite={false}
                showSecondCard={false}
                verticalSwipe={false}
                backgroundColor={'#fff'}
                cardVerticalMargin={0}
                cardHorizontalMargin={0}
                goBackToPreviousCardOnSwipeRight={true}
                animateOverlayLabelsOpacity
                animateCardOpacity
                childrenOnTop={true}
                useViewOverflow={true}
                onSwipedAll={() => {
                  console.log('Final screen');
                  return (
                    <View style={styles.completeScreen}>
                      <Text>Congratulation! You have completed questionnaire</Text>
                      <Button
                        buttonStyle={styles.buttonStyle}
                        buttonTitle={styles.buttonTitle}
                        title="See Matched Programs"
                        onPress={() => navigation.navigate('ProgramsMatched')}
                      />
                    </View>
                  );
                }}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <Button
                buttonStyle={styles.buttonStyle}
                buttonTitle={styles.buttonTitle}
                title="Previous"
                onPress={() => {
                  this.swiper.swipeRight();
                }}
              />
              <Button
                buttonStyle={styles.buttonStyle}
                buttonTitle={styles.buttonTitle}
                title="Next"
                onPress={() => {
                  this.swiper.swipeLeft();
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
    width: '100%',
    height: '90%',
  },
  swiper: {
    height: '100%',
    width: '100%',
    flex: 1,
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
  completeScreen: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
