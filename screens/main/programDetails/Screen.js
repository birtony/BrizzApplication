import React from 'react';
import { SafeAreaView, StyleSheet, View, Linking } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { ScrollView } from 'react-native-gesture-handler';
import { useStateValue } from '../../../utils/provider';
import * as WebBrowser from 'expo-web-browser';

export default function ProgramDetails({ navigation }) {
  const [{ programs }, p_dispatch] = useStateValue();
  const [{ currProgId }, c_dispatch] = useStateValue();
  const program = programs.find((x) => x._id === currProgId);

  return (
    <SafeAreaView style={styles.container}>
      <Grid>
        <Row style={styles.programNameRow} size={2}>
          <Text h3 style={styles.programsNameTxt}>
            {program.name}
          </Text>
        </Row>
        <Row size={4}>
          <Col style={styles.whiteRectangleCol}>
            <View style={styles.whiteRectangle}>
              <Row size={3}>
                <Col>
                  <Text style={styles.caption}>Description</Text>
                  <ScrollView style={styles.scrollView}>
                    <Text style={styles.value}>{program.description}</Text>
                  </ScrollView>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Text style={styles.caption}>Tuition</Text>
                  <Text style={styles.value}>{program.tuition}</Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Text style={styles.caption}>Offered at</Text>
                  <Text style={styles.value}>Seneca College {program.campus} Campus</Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Text style={styles.caption}>Duration</Text>
                  <Text style={styles.value}>{program.duration}</Text>
                </Col>
              </Row>
              <Row>
                <Col />
                <Col size={2}>
                  <Button
                    title="More Information"
                    onPress={() => WebBrowser.openBrowserAsync(program.url)}
                    buttonStyle={styles.moreInfoButton}
                    titleStyle={styles.buttonTitle}
                  />
                </Col>
                <Col />
              </Row>
              <Row style={styles.goBackrow}>
                <Col style={styles.goBackCol}>
                  <Button
                    buttonStyle={styles.goBackButton}
                    titleStyle={styles.buttonTitle}
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
    paddingTop: 15,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  whiteRectangleCol: {
    width: '96%',
    height: '115%',
    bottom: '20%',
    left: '1%',
  },
  scrollView: {
    marginTop: 5,
    marginBottom: 10,
  },
  programNameRow: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  programsNameTxt: {
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Optima-Bold',
    top: '-10%',
  },
  caption: {
    alignItems: 'center',
    justifyContent: 'center',
    textDecorationLine: 'underline',
    left: '2%',
    fontSize: 20,
    fontFamily: 'Optima-Bold',
  },
  value: {
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
  moreInfoButton: {
    backgroundColor: '#F28E00',
  },
  goBackButton: {
    backgroundColor: '#F28E00',
  },
  buttonTitle: {
    color: 'black',
    fontFamily: 'Optima-Bold',
  },
});
