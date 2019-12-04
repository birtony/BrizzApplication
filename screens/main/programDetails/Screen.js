import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { ScrollView } from 'react-native-gesture-handler';

export default function ProgramDetails({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Grid>
        <Row style={styles.programNameRow} size={1}>
          <Text h3 style={styles.programsNameTxt}>
            Software Development
          </Text>
        </Row>
        <Row size={4}>
          <Col style={styles.whiteRectangleCol}>
            <View style={styles.whiteRectangle}>
              <Row size={2}>
                <Col>
                  <Text style={styles.descriptionTxt}>Description</Text>
                  <ScrollView>
                    <Text style={styles.programDescriptionTxt}>
                      This four-year honours bachelor degree will provide you with extensive
                      knowledge and technical skills in software development languages. This program
                      also covers topics in operating systems, web applications, multimedia
                      interfaces, information security, databases, system analysis and design
                      principles. You will also develop communication
                    </Text>
                  </ScrollView>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Text style={styles.tuitionTxt}>Tuition</Text>
                  <Text style={styles.programTuitionTxt}>$8000.00 / year</Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Text style={styles.offeredTxt}>Offered at</Text>
                  <Text style={styles.programOfferedTxt}>Seneca College</Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Text style={styles.startDateTxt}>Start Date</Text>
                  <Text style={styles.programStartDateTxt}>September 2019</Text>
                </Col>
              </Row>
              <Row style={styles.goBackrow}>
                <Col style={styles.goBackCol}>
                  <Button
                    buttonStyle={styles.goBackButton}
                    titleStyle={styles.goBackButtonText}
                    title="Go Back"
                    onPress={() => navigation.navigate('ProgramsMatched')}
                  ></Button>
                </Col>
              </Row>
            </View>
          </Col>
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
  whiteRectangle: {
    flex: 1,
    maxWidth: '100%',
    maxHeight: '95%',
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    justifyContent: 'center',
  },
  whiteRectangleCol: {
    width: '96%',
    height: '115%',
    bottom: '20%',
    left: '1%',
  },
  programNameRow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  programsNameTxt: {
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Optima-Bold',
    top: '-10%',
  },
  descriptionRow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionTxt: {
    alignItems: 'center',
    justifyContent: 'center',
    textDecorationLine: 'underline',
    left: '2%',
    fontSize: 20,
    fontFamily: 'Optima-Bold',
  },
  programDescriptionTxt: {
    left: '2%',
    fontSize: 17,
  },
  tuitionTxt: {
    alignItems: 'center',
    justifyContent: 'center',
    textDecorationLine: 'underline',
    left: '2%',
    fontSize: 20,
    fontFamily: 'Optima-Bold',
  },
  programTuitionTxt: {
    left: '2%',
    fontSize: 17,
  },
  offeredTxt: {
    alignItems: 'center',
    justifyContent: 'center',
    textDecorationLine: 'underline',
    left: '2%',
    fontSize: 20,
    fontFamily: 'Optima-Bold',
  },
  programOfferedTxt: {
    left: '2%',
    fontSize: 17,
  },
  startDateTxt: {
    alignItems: 'center',
    justifyContent: 'center',
    textDecorationLine: 'underline',
    left: '2%',
    fontSize: 20,
    fontFamily: 'Optima-Bold',
  },
  programStartDateTxt: {
    left: '2%',
    fontSize: 17,
  },
  goBackrow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  goBackCol: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    right: '10%',
  },
  goBackButton: {
    backgroundColor: '#F28E00',
  },
  goBackButtonText: {
    color: 'black',
    fontFamily: 'Optima-Bold',
  },
});
