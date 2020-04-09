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
  constructor(props) {
    super(props);
    this.state = {
      redCnt: 0,
      greenCnt: 0,
    };
  }
  setRedCnt = (v) => {
    this.setState({ redCnt: v });
  };
  setGreenCnt = (v) => {
    this.setState({ greenCnt: v });
  };
  render() {
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
                  <QuestionnaireGrid
                    questions={item}
                    redCnt={this.state.redCnt}
                    greenCnt={this.state.greenCnt}
                    onRedPress={(v) => this.setRedCnt(v)}
                    onGreenPress={(v) => this.setGreenCnt(v)}
                  />
                )}
                infinite={false}
                verticalSwipe={false}
                disableRightSwipe
                backgroundColor={'#fff'}
                cardVerticalMargin={0}
                cardHorizontalMargin={0}
                animateOverlayLabelsOpacity
                animateCardOpacity
                childrenOnTop={true}
                stackSize={2}
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
                title="Next"
                onPress={() => {
                  if (this.state.redCnt === 1 && this.state.greenCnt === 1) {
                    this.setRedCnt(0);
                    this.setGreenCnt(0);
                    this.swiper.swipeLeft();
                    console.log('swiped');
                  } else if (this.state.redCnt === 0 && this.state.greenCnt !== 0) {
                    Alert.alert('You need to select position you do not prefer');
                    console.log('You need to select position you do not prefer');
                  } else if (this.state.redCnt !== 0 && this.state.greenCnt === 0) {
                    Alert.alert('You need to select position you prefer');
                    console.log('You need to select position you prefer');
                  } else {
                    Alert.alert('You need to select one position you prefer and one you do not');
                    console.log('redCnt =', this.state.redCnt);
                    console.log('greenCnt =', this.state.greenCnt);
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
