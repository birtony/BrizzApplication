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
          <Row style={styles.programNameRow}>
            <Text h4 style={styles.programName}>
              {program.name}
            </Text>
          </Row>
          <Row style={styles.programDescRow}>
            <Text h5 style={styles.desciption}>
              {program.description}
            </Text>
          </Row>
          <Button
            style={styles.buttonStyle}
            title="More Information"
            onPress={() => {
              dispatch(curr_prog_id_changed(_id));
              navigation.navigate('ProgramDetails');
            }}
          ></Button>
        </Grid>
      </View>
      <View style={styles.emptySpace} />
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
  emptySpace: {
    backgroundColor: 'white',
    height: 50,
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
  programName: {
    fontSize: 30,
    fontFamily: 'Optima-Bold',
    textAlign: 'center',
  },
});
