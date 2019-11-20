import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Text, Button} from 'react-native-elements';
import {withNavigation} from 'react-navigation';

// Need to fetch all results into an array.
// And for loop Views to display individual results per result.

class ResultsComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.background} />
        <ScrollView style={styles.ResultTile}>
          <View style={styles.resultBox}>
            <Text style={styles.programName}> Program Name </Text>
            <Text style={styles.description}> Lorem Ipsum </Text>
            <Button title='More Info' onPress={() => this.props.navigation.navigate('ProgramDetails')}></Button>
          </View>
          <View style={styles.resultBox}>
            <Text style={styles.programName}> Program Name </Text>
            <Text style={styles.description}> Lorem Ipsum</Text>
            <Button title='More Info' onPress={() => this.props.navigation.navigate('ProgramDetails')}></Button>
          </View>
          <View style={styles.resultBox}>
            <Text style={styles.programName}> Program Name </Text>
            <Text style={styles.description}> Lorem Ipsum</Text>
            <Button title='More Info' onPress={() => this.props.navigation.navigate('ProgramDetails')} />
          </View>
          <View style={styles.resultBox}>
            <Text style={styles.programName}> Program Name </Text>
            <Text style={styles.description}> Lorem Ipsum</Text>
            <Button title='More Info' onPress={() => this.props.navigation.navigate('ProgramDetails')} />
          </View>
          <View style={styles.resultBox}>
            <Text style={styles.programName}> Program Name </Text>
            <Text style={styles.description}> Lorem Ipsum</Text>
            <Button title='More Info' onPress={() => this.props.navigation.navigate('ProgramDetails')} />
          </View>
          <View style={styles.resultBox}>
            <Text style={styles.programName}> Program Name </Text>
            <Text style={styles.description}> Lorem Ipsum</Text>
            <Button title='More Info' onPress={() => this.props.navigation.navigate('ProgramDetails')} />
          </View>
          <View style={styles.resultBox}>
            <Text style={styles.programName}> Program Name </Text>
            <Text style={styles.description}> Lorem Ipsum</Text>
            <Button title='More Info' onPress={() => this.props.navigation.navigate('ProgramDetails')} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default withNavigation(ResultsComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'white',
    height: '180%',
    width: '92%',
    left: '4%',
    top: '-75%',
    borderRadius: 100 / 5,
  },
  ResultTile: {
    flex: 1,
    position: 'absolute',
    height: '170%',
    width: '80%',
    top: '-65%',
    left: '10%',
    alignSelf: 'center',
    borderRadius: 100 / 5,
  },
  resultBox: {
    flex: 4,
    height: '100%',
    marginBottom: '50%',
    backgroundColor: 'white',
    borderRadius: 100 / 5,
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
