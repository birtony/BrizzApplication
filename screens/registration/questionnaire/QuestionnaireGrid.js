import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Grid, Col, Row } from 'react-native-easy-grid';
import QuestionnaireItem from './QuestionnaireItem';

export default function QuestionnaireGrid({
  questions,
  redCnt,
  greenCnt,
  onRedPress,
  onGreenPress,
}) {
  return (
    <View style={styles.root}>
      <Grid style={styles.grid}>
        <Col style={styles.col}>
          <Row style={styles.row}>
            <QuestionnaireItem
              style={styles.questionnaireItem}
              question={questions[0]}
              redCnt={redCnt}
              onRedPress={onRedPress}
              greenCnt={greenCnt}
              onGreenPress={onGreenPress}
            />
          </Row>
          <Row style={styles.row}>
            <QuestionnaireItem
              style={styles.questionnaireItem}
              question={questions[1]}
              redCnt={redCnt}
              onRedPress={onRedPress}
              greenCnt={greenCnt}
              onGreenPress={onGreenPress}
            />
          </Row>
        </Col>
        <Col style={styles.col}>
          <Row style={styles.row}>
            <QuestionnaireItem
              style={styles.questionnaireItem}
              question={questions[2]}
              redCnt={redCnt}
              onRedPress={onRedPress}
              greenCnt={greenCnt}
              onGreenPress={onGreenPress}
            />
          </Row>
          <Row style={styles.row}>
            <QuestionnaireItem
              style={styles.questionnaireItem}
              question={questions[3]}
              redCnt={redCnt}
              onRedPress={onRedPress}
              greenCnt={greenCnt}
              onGreenPress={onGreenPress}
            />
          </Row>
        </Col>
      </Grid>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  col: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
