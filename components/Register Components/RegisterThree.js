import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  SafeAreaView
} from "react-native";
import { Input, Button, Text } from "react-native-elements";
import DateTimePicker from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Progress from "react-native-progress";
import Modal from "react-native-modal";
import RNPickerSelect from "react-native-picker-select";

class RegisterTwo extends Component {
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  state = {
    isModalVisible: false
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.backgroundCircle}></View>
        <View style={styles.roundedRectangle}></View>
        <Image
          style={styles.logoImage}
          source={require("../../assets/logo.png")}
        ></Image>
        <Text style={styles.accountSetupText}>Account Setup</Text>
        <Text h3 style={styles.genderText}>
          Gender
        </Text>
        <Input
          inputContainerStyle={{ borderBottomWidth: 0, top: 13 }}
          containerStyle={styles.genderInput}
          disabled
        />
        <TouchableWithoutFeedback onPress={this.toggleModal}>
          <View style={{ position: "absolute", top: "53%", left: "12%" }}>
            <RNPickerSelect
              onValueChange={value => console.log(value)}
              items={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
                { label: "Other", value: "other" }
              ]}
            />
          </View>
        </TouchableWithoutFeedback>
        <Text h3 style={styles.cityText}>
          City
        </Text>
        <Input
          inputContainerStyle={{ borderBottomWidth: 0, top: 13 }}
          containerStyle={styles.cityInput}
        />
        <Text h3 style={styles.gpaText}>
          GPA
        </Text>
        <Input
          keyboardType={"numbers-and-punctuation"}
          inputContainerStyle={{ borderBottomWidth: 0, top: 13 }}
          containerStyle={styles.gpaInput}
        />

        <TouchableWithoutFeedback
          onPress={() => this.props.navigation.navigate("FinalRegistration")}
        >
          <Icon
            type="font-awesome"
            name="check"
            size={35}
            style={styles.arrowRight}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => this.props.navigation.navigate("RegisterTwo")}
        >
          <Icon
            type="font-awesome"
            name="arrow-left"
            size={35}
            style={styles.arrowBack}
          />
        </TouchableWithoutFeedback>
        <Progress.Bar
          progress={1}
          width={200}
          color={"#F28E00"}
          position={"absolute"}
          top={"95%"}
        />
      </SafeAreaView>
    );
  }
}
export default RegisterTwo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F28E00",
    alignItems: "center",
    justifyContent: "center"
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
  backgroundCircle: {
    width: "105%",
    height: "90%",
    borderRadius: 100 / 2,
    backgroundColor: "white",
    position: "absolute",
    top: "43%"
  },
  logoImage: {
    width: "40%",
    height: "20%",
    position: "absolute",
    top: "10%"
  },
  accountSetupText: {
    color: "black",
    fontFamily: "Optima-Bold",
    fontSize: 30,
    position: "absolute",
    top: "38%"
  },
  genderText: {
    position: "absolute",
    top: "45%",
    left: "15%",
    fontFamily: "Optima-Bold",
    color: "#F28E00"
  },
  genderInput: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "#F28E00",
    height: "8%",
    position: "absolute",
    top: "50%",
    width: "85%"
  },
  cityText: {
    position: "absolute",
    top: "60%",
    left: "15%",
    fontFamily: "Optima-Bold",
    color: "#F28E00"
  },
  cityInput: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "#F28E00",
    height: "8%",
    position: "absolute",
    top: "65%",
    width: "85%"
  },
  gpaText: {
    position: "absolute",
    top: "75%",
    left: "15%",
    fontFamily: "Optima-Bold",
    color: "#F28E00"
  },
  gpaInput: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "#F28E00",
    height: "8%",
    position: "absolute",
    top: "80%",
    width: "85%"
  },
  arrowBack: {
    position: "absolute",
    top: "90%",
    left: "8%"
  },
  arrowRight: {
    position: "absolute",
    top: "90%",
    right: "8%"
  }
});
