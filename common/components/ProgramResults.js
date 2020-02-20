import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { Grid, Row } from 'react-native-easy-grid';
import { curr_prog_id_changed } from '../../actions/programs';
import { useStateValue } from '../../utils/provider';

export default function ProgramResults({ matchedPrograms = [], navigation }) {
  const [{ currProgId }, dispatch] = useStateValue();
  const results = matchedPrograms.map((program, _id) => (
    <View style={styles.resultsContainer} key={_id}>
      <View style={styles.resultBox}>
        <Grid style={styles.programsGrid}>
          <Row size={1} style={styles.programNameRow}>
            <Text h4 style={styles.programName}>
              {program.name}
            </Text>
          </Row>
          <Row size={3} style={styles.programDescRow}>
            <Text h5 style={styles.desciption}>
              {program.description}
            </Text>
          </Row>
          <Row size={1} style={styles.btnRow}>
            <Button
              buttonStyle={styles.buttonStyle}
              buttonTitle={styles.buttonTitle}
              title="Details"
              onPress={() => {
                dispatch(curr_prog_id_changed(program._id));
                navigation.navigate('ProgramDetails');
              }}
            ></Button>
          </Row>
        </Grid>
      </View>
    </View>
  ));
  return <ScrollView>{results}</ScrollView>;
}

const styles = StyleSheet.create({
  resultsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  resultBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    height: 250,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    marginBottom: 25,
    marginTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
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
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#F28E00',
  },
  buttonTitle: {
    color: 'black',
    fontFamily: 'Optima-Bold',
  },
  programsGrid: {
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '100%',
    maxHeight: '100%',
    marginTop: 20,
    marginBottom: 10,
  },
  programDescRow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  programNameRow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  programName: {
    fontSize: 30,
    fontFamily: 'Optima-Bold',
    textAlign: 'center',
  },
  btnRow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
