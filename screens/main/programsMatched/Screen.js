import React, { useEffect } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements';
import { Grid, Row } from 'react-native-easy-grid';
import { useStateValue } from '../../../utils/provider';
import { programs_received } from '../../../actions/programs';
import ProgramResults from '../../../common/components/ProgramResults';
import * as api from '../../../api';

export default function ProgramsMatched({ navigation }) {
  const [{ user }, u_dispatch] = useStateValue();
  const [{ programs }, p_dispatch] = useStateValue();

  useEffect(() => {
    async function fetchData() {
      const result = await api.getAllPrograms(user.token);
      if (result) {
        p_dispatch(programs_received(result));
      }
    }
    fetchData();
  }, [p_dispatch, user.token]);

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
              style={styles.programResultsContainer}
              matchedPrograms={programs}
              navigation={navigation}
            />
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
  programsMatchedTxt: {
    fontFamily: 'Optima-Bold',
  },
  programName: {
    fontFamily: 'Optima-Bold',
    fontSize: 25,
    textAlign: 'center',
  },
  programResultsContainer: {},
});
