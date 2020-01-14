import React, { useEffect } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements';
import { Grid, Row } from 'react-native-easy-grid';
import { useStateValue } from '../../../utils/provider';
import { programs_received } from '../../../actions/programs';
import ProgramResults from '../../../common/components/ProgramResults';
import * as api from '../../../api';
import programsLocal from '../../../const/programs.json';
// Need to fetch all results into an array.
// And for loop Views to display individual results per result.

export default function ProgramsMatched({ navigation }) {
  const [{ token }, t_dispatch] = useStateValue();
  const [{ programs }, p_dispatch] = useStateValue();
  useEffect(() => {
    async () => p_dispatch(programs_received(await api.getAllPrograms(token)));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Grid style={styles.container}>
        <Row size={1} style={styles.programsMatchedTxtRow}>
          <Text h3 style={styles.programsMatchedTxt}>
            Programs Matched
          </Text>
        </Row>
        <Row size={5}>
          <View style={styles.whiteCard}>
            <ProgramResults
              matchedPrograms={programsLocal}
              navigation={navigation}
            ></ProgramResults>
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
  programName: {
    fontSize: 30,
    fontFamily: 'Optima-Bold',
    textAlign: 'center',
  },
});
