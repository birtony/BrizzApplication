import React, { Component } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  Button
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { withNavigation } from "react-navigation";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";

var radio_props = [
  { label: "Play Video Games", value: 0 },
  { label: "Travel", value: 1 },
  { label: "Code Programs", value: 2 },
  { label: "Explore Business Ventures", value: 3 }
];
class QuestionnaireOne extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.backgroundCircle} />
        <View style={styles.roundedRectangle} />
        <Text style={styles.questionnaireText}>Questionnaire</Text>
        <Text style={styles.questionOneText}>Question One</Text>
        <Text style={styles.q1Text}>
          In your spare time,{"\n"} what do you spend most of your time doing?
        </Text>
        <RadioForm
          style={styles.q1RadioForm}
          radio_props={radio_props}
          isSelected="false"
          initial={0}
          buttonColor={"#F28E00"}
          selectedButtonColor={"#F28E00"}
          buttonInnerColor={"#F28E00"}
          onPress={value => {
            this.setState({ value: value });
          }}
        />
        <TouchableWithoutFeedback
          onPress={() => this.props.navigation.navigate("QuestionnaireTwo")}
        >
          <Icon
            type="font-awesome"
            name="arrow-circle-right"
            size={50}
            style={{ position: "absolute", top: "90%", right: "5%" }}
          />
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  }
}
export default withNavigation(QuestionnaireOne);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F28E00",
    alignItems: "center",
    justifyContent: "center"
  },
  backgroundCircle: {
    width: "105%",
    height: "90%",
    borderRadius: 100 / 2,
    backgroundColor: "white",
    position: "absolute",
    top: "43%"
  },
  roundedRectangle: {
    width: "94%",
    height: "60%",
    borderRadius: 100 / 5,
    backgroundColor: "white",
    position: "absolute",
    top: "37%",
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5
  },
  questionnaireText: {
    position: "absolute",
    fontFamily: "Optima-Bold",
    fontSize: 30,
    top: "38%"
  },
  questionOneText: {
    position: "absolute",
    color: "#F28E00",
    top: "45%",
    fontSize: 25
  },
  q1Text: {
    position: "absolute",
    color: "#F28E00",
    top: "55%",
    fontSize: 25,
    textAlign: "center"
  },
  q1RadioForm: {
    position: "absolute",
    top: "70%",
    left: "10%"
  }
});
