import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import NavBar from '../navBar/Screen';

// Need to fetch all results into an array.
// And for loop Views to display individual results per result.

export default ProgramDetails = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <NavBar />
      <View style={styles.container}>
        <View style={styles.background}>
          <Text style={styles.programName}> SOFTWARE DEVELOPMENT </Text>
          <Text style={styles.descriptionHeading}>DESCRIPTION</Text>
          <Text style={styles.description}>
            This four-year honours bachelor degree will provide you with
            extensive knowledge and technical skills in software development
            languages. This program also covers topics in operating systems, web
            applications, multimedia interfaces, information security,
            databases, system analysis and design principles. You will also
            develop communication skills to effectively present technical ideas.
          </Text>
          <Text style={styles.offeredAtHeading}>OFFERED AT</Text>
          <Text style={styles.offeredAt}>Seneca College</Text>
          <Text style={styles.tuitionCostHeading}>TUITION COST</Text>
          <Text style={styles.tuitionCost}>$8000.00 / year</Text>
          <Text style={styles.startDateHeading}>START DATE</Text>
          <Text style={styles.startDate}>September 2019</Text>
          <Text
            style={styles.backButton}
            onPress={() => navigation.navigate('ProgramsMatched')}
          >
            Go Back
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

ProgramDetails.navigationOptions = () => {
  ('ProgramDetails');
};

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: 'orange',
  },
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'orange',
    height: '100%',
    width: '92%',
    borderRadius: 20,
  },
  goBackButton: {
    flex: 1,
    position: 'absolute',
    bottom: '12%',
    right: '7%',
    fontWeight: 'bold',
  },
  programName: {
    flex: 1,
    position: 'absolute',
    bottom: '160%',
    left: '14%',
    fontSize: 20,
    fontWeight: 'bold',
  },
  descriptionHeading: {
    flex: 1,
    position: 'relative',
    position: 'absolute',
    bottom: '150%',
    left: '5%',
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  description: {
    flex: 1,
    position: 'relative',
    position: 'absolute',
    bottom: '90%',
    left: '5%',
    right: '5%',
    fontSize: 16,
  },
  offeredAtHeading: {
    flex: 1,
    position: 'relative',
    position: 'absolute',
    bottom: '80%',
    left: '5%',
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  offeredAt: {
    flex: 1,
    position: 'relative',
    position: 'absolute',
    bottom: '73%',
    left: '5%',
    right: '5%',
    fontSize: 16,
  },
  tuitionCostHeading: {
    position: 'absolute',
    bottom: '63%',
    left: '5%',
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  tuitionCost: {
    flex: 1,
    position: 'relative',
    position: 'absolute',
    bottom: '56%',
    left: '5%',
    right: '5%',
    fontSize: 16,
  },
  startDateHeading: {
    position: 'absolute',
    bottom: '46%',
    left: '5%',
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  startDate: {
    flex: 1,
    position: 'relative',
    position: 'absolute',
    bottom: '39%',
    left: '5%',
    right: '5%',
    fontSize: 16,
  },
  backButton: {
    position: 'absolute',
    top: 100,
    right: 63,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
