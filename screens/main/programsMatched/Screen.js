import React from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { Grid, Row } from 'react-native-easy-grid';

// Need to fetch all results into an array.
// And for loop Views to display individual results per result.

export default function ProgramsMatched({ navigation }) {
  const programs = [];
  for (let i = 0; i < 10; i++) {
    programs.push(
      <View style={styles.resultsContainer} key={i}>
        <View style={styles.resultBox}>
          <Grid style={styles.programsGrid}>
            <Row style={styles.programNameRow}>
              <Text h4 style={styles.programName}>Program Name: </Text>
            </Row>
            <Row style={styles.programDescRow}>
              <Text h5 style={styles.description}>Lorem Ipsum</Text>
            </Row>
            <Button style={styles.buttonStyle} title="More Information" onPress={() => navigation.navigate('ProgramDetails')}></Button>
          </Grid>
        </View>
        <View style={styles.emptySpace} />
      </View>,
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Grid style={styles.container}>
        <Row size={1} style={styles.programsMatchedTxtRow}>
          <Text h3 style={styles.programsMatchedTxt}>Programs Matched</Text>
        </Row>
        <Row size={5}>
          <View style={styles.whiteCard}>
            <ScrollView>
              {programs}
            </ScrollView>
          </View>
        </Row>
      </Grid>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F28E00',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  resultsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  whiteCard: {
    flex: 1,
    maxWidth: '94%',
    maxHeight: '95%',
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    justifyContent: 'center',
  },
  programsMatchedTxtRow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptySpace: {
    backgroundColor: 'white',
    height: 50,
  },
  programsMatchedTxt: {
    fontFamily: 'Optima-Bold',
  },
  resultBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 250,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  programName: {
    fontFamily: 'Optima-Bold',
    fontSize: 25,
    textAlign: 'center',
  },
  description: {
    alignSelf: 'center',
    fontFamily: 'Optima-Bold',
  },
  buttonStyle: {
    width: '100%',
    alignSelf: 'center',
  },
  programsGrid: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  programDescRow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  programNameRow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
