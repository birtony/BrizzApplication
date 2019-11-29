import React from 'react';
import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import {Text, Button} from 'react-native-elements';
import NavBar from '../navBar/Screen';

// Need to fetch all results into an array.
// And for loop Views to display individual results per result.

export default ProgramsMatched = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArevViewContainer}>
      <NavBar />
      <View style={styles.container}>
        <View style={styles.background}>
          <ScrollView style={styles.ResultTile}>
            <View style={styles.resultBox}>
              <Text style={styles.programName}> Program Name </Text>
              <Text style={styles.description}> Lorem Ipsum </Text>
              <Button
                title="More Info"
                onPress={() => navigation.navigate('ProgramDetails')}
              ></Button>
            </View>
            <View style={styles.resultBox}>
              <Text style={styles.programName}> Program Name </Text>
              <Text style={styles.description}> Lorem Ipsum</Text>
              <Button
                title="More Info"
                onPress={() => navigation.navigate('ProgramDetails')}
              ></Button>
            </View>
            <View style={styles.resultBox}>
              <Text style={styles.programName}> Program Name </Text>
              <Text style={styles.description}> Lorem Ipsum</Text>
              <Button
                title="More Info"
                onPress={() => navigation.navigate('ProgramDetails')}
              />
            </View>
            <View style={styles.resultBox}>
              <Text style={styles.programName}> Program Name </Text>
              <Text style={styles.description}> Lorem Ipsum</Text>
              <Button
                title="More Info"
                onPress={() => navigation.navigate('ProgramDetails')}
              />
            </View>
            <View style={styles.resultBox}>
              <Text style={styles.programName}> Program Name </Text>
              <Text style={styles.description}> Lorem Ipsum</Text>
              <Button
                title="More Info"
                onPress={() => navigation.navigate('ProgramDetails')}
              />
            </View>
            <View style={styles.resultBox}>
              <Text style={styles.programName}> Program Name </Text>
              <Text style={styles.description}> Lorem Ipsum</Text>
              <Button
                title="More Info"
                onPress={() => navigation.navigate('ProgramDetails')}
              />
            </View>
            <View style={styles.resultBox}>
              <Text style={styles.programName}> Program Name </Text>
              <Text style={styles.description}> Lorem Ipsum</Text>
              <Button
                title="More Info"
                onPress={() => navigation.navigate('ProgramDetails')}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

ProgramsMatched.navigationOptions = () => {
  ('ProgramsMatched');
};

const styles = StyleSheet.create({
  safeArevViewContainer: {
    flex: 1,
    backgroundColor: '#F28E00',
  },
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    backgroundColor: 'white',
    height: '180%',
    width: '92%',
    left: '4%',
    top: '-75%',
    borderRadius: 20,
  },
  ResultTile: {
    flex: 1,
    position: 'absolute',
    height: '170%',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 20,
  },
  resultBox: {
    flex: 4,
    height: '100%',
    marginBottom: '50%',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  programName: {
    flex: 1,
    fontFamily: 'Optima-Bold',
    fontSize: 25,
    textAlign: 'center',
  },
  description: {
    flex: 1,
    position: 'relative',
    height: '50%',
  },
});
