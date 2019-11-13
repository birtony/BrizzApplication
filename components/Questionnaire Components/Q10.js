import React, { Component } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { withNavigation } from "react-navigation";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";

var radio_props = [
  { label: "Yes", value: 0 },
  { label: "No", value: 1 }
];
class QuestionnaireTen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.backgroundCircle} />
        <View style={styles.roundedRectangle} />
        <Text style={styles.questionnaireText}>Questionnaire</Text>
        <Text style={styles.questionOneText}>Question Ten</Text>
        <Text style={styles.q10Text}>
          If you and your friends are planning a trip, are you usually the one
          in charge?
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
          onPress={() => this.props.navigation.navigate("ProgramsMatched")}
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
export default withNavigation(QuestionnaireTen);

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
  q10Text: {
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
