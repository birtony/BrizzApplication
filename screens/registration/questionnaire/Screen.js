import React, { Component } from 'react';
import { Container } from 'native-base';
import { Alert, StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Swiper from 'react-native-deck-swiper';
import QuestionnaireGrid from './QuestionnaireGrid';
import WhiteCard from '../../../common/components/WhiteCard';
import ViewOverflow from 'react-native-view-overflow';
import { WORK_ACTIVITIES } from '../../../const/USER';

export default class Questionnaire extends Component {
  render(navigation) {
    let redCnt = 0;
    let greenCnt = 0;
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
                renderCard={(item) => (
                  <QuestionnaireGrid questions={item} redCnt={redCnt} greenCnt={greenCnt} />
                )}
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
                useViewOverflow={false}
                onSwipedAll={() => {
                  console.log('Final screen');
                  return (
                    <ViewOverflow style={styles.completeScreen}>
                      <Text>Congratulation! You have completed questionnaire</Text>
                      <Button
                        buttonStyle={styles.buttonStyle}
                        buttonTitle={styles.buttonTitle}
                        title="See Matched Programs"
                        onPress={() => navigation.navigate('ProgramsMatched')}
                      />
                    </ViewOverflow>
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
                  if (redCnt === 1 && greenCnt === 1) {
                    this.swiper.swipeLeft();
                    redCnt = 0;
                    greenCnt = 0;
                  } else if (redCnt === 0 && greenCnt === 1) {
                    Alert.alert('You need to select position you do not prefer');
                  } else if (redCnt === 1 && greenCnt === 0) {
                    Alert.alert('You need to select position you prefer');
                  } else {
                    Alert.alert('You need to select one position you prefer and one you do not');
                  }
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
    width: '95%',
    height: '85%',
    top: 5,
    borderRadius: 20,
    backgroundColor: 'white',
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
    marginTop: 10,
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
