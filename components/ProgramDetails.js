import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableWithoutFeedback} from 'react-native';
import {Input, Button, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class ProgramDetails extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundCircle} />
        <View style={styles.roundedRectangle} />
        <View style={styles.navBar} />
        <View style={styles.GoBackRectangle} />
        <Image
          style={{
            width: 60,
            height: 60,
            position: 'absolute',
            top: 20,
            left: 8,
          }}
          source={require('../assets/logo.png')}
        ></Image>

        <Text style={{top: 20, position: 'absolute', fontSize: 60}}>BrIZZ</Text>
        <Text
          style={{
            position: 'absolute',
            top: 130,
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          SOFTWARE DEVELOPMENT
        </Text>
        <Text
          style={{
            position: 'absolute',
            top: 190,
            left: 20,
            fontSize: 18,
            fontWeight: 'bold',
            textDecorationLine: 'underline',
          }}
        >
          DESCRIPTION
        </Text>
        <Text
          style={{
            position: 'absolute',
            top: 220,
            fontSize: 15,
            left: 20,
            right: 20,
          }}
        >
          This four-year honours bachelor degree will provide you with extensive knowledge and technical skills in
          software development languages. This program also covers topics in operating systems, web applications,
          multimedia interfaces, information security, databases, system analysis and design principles. You will also
          develop communication skills to effectively present technical ideas.
        </Text>
        <Text
          style={{
            position: 'absolute',
            top: 400,
            left: 20,
            fontSize: 18,
            fontWeight: 'bold',
            textDecorationLine: 'underline',
          }}
        >
          OFFERED AT
        </Text>
        <Text style={{position: 'absolute', top: 430, left: 20, fontSize: 15}}>Seneca College</Text>
        <Text
          style={{
            position: 'absolute',
            top: 460,
            left: 20,
            fontSize: 18,
            fontWeight: 'bold',
            textDecorationLine: 'underline',
          }}
        >
          TUITION COST
        </Text>
        <Text style={{position: 'absolute', top: 490, left: 20, fontSize: 15}}>$8000.00 - year</Text>
        <Text
          style={{
            position: 'absolute',
            top: 520,
            left: 20,
            fontSize: 18,
            fontWeight: 'bold',
            textDecorationLine: 'underline',
          }}
        >
          Start Date
        </Text>
        <Text style={{position: 'absolute', top: 550, left: 20, fontSize: 15}}>Fall 2020</Text>

        <Button
          title='Go Back'
          titleStyle={{fontSize: 40, fontFamily: 'Optima-Bold'}}
          buttonStyle={{
            backgroundColor: '#F28E00',
            width: 250,
            borderRadius: 50,
            height: 75,
            position: 'absolute',
            right: 60,
            top: 680,
            borderColor: 'grey',
            borderWidth: 1,
          }}
        />

        <Text
          style={{
            position: 'absolute',
            top: 595,
            right: 63,
            fontSize: 18,
            fontWeight: 'bold',
          }}
          onPress={() => this.props.navigation.navigate('ProgramsMatched')}
        >
          Go Back
        </Text>
      </View>
    );
  }
}
export default ProgramDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F28E00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundedRectangle: {
    width: 340,
    height: 530,
    borderRadius: 100 / 5,
    backgroundColor: 'white',
    position: 'absolute',
    top: 113,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  GoBackRectangle: {
    width: 100,
    height: 60,
    borderRadius: 100 / 5,
    backgroundColor: 'orange',
    position: 'absolute',
    top: 575,
    right: 50,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  navBar: {
    width: 390,
    height: 90,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  materialIconTextbox2: {
    top: 10.29,
    left: 0.1,
    width: 287,
    height: 8,
    position: 'absolute',
    borderRadius: 43,
    borderColor: '#ee8f00',
    borderWidth: 4,
  },
});
