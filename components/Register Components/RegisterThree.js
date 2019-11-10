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
      <View style={styles.container}>
        <View style={styles.backgroundCircle}></View>
        <View style={styles.roundedRectangle}></View>
        <Image
          style={{ width: 150, height: 150, position: "absolute", top: 100 }}
          source={require("../../assets/logo.png")}
        ></Image>
        <Text
          style={{
            color: "black",
            fontFamily: "Optima-Bold",
            fontSize: 30,
            position: "absolute",
            top: 300
          }}
        >
          Account Setup
        </Text>
        <Text
          h3
          style={{
            position: "absolute",
            top: 350,
            left: 60,
            fontFamily: "Optima-Bold",
            color: "#F28E00"
          }}
        >
          Gender
        </Text>
        <Input
          inputContainerStyle={{ borderBottomWidth: 0, top: 13 }}
          containerStyle={{
            borderWidth: 2,
            borderRadius: 50,
            borderColor: "#F28E00",
            height: 70,
            position: "absolute",
            top: 385,
            width: 350
          }}
        />
        <Text
          h3
          style={{
            position: "absolute",
            top: 475,
            left: 60,
            fontFamily: "Optima-Bold",
            color: "#F28E00"
          }}
        >
          City
        </Text>
        <TouchableWithoutFeedback onPress={this.toggleModal}>
          <View style={{ position: "absolute", top: "46%", left: "12%" }}>
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
        <Input
          inputContainerStyle={{ borderBottomWidth: 0, top: 13 }}
          containerStyle={{
            borderWidth: 2,
            borderRadius: 50,
            borderColor: "#F28E00",
            height: 70,
            position: "absolute",
            top: 510,
            width: 350
          }}
        />
        <Text
          h3
          style={{
            position: "absolute",
            top: 600,
            left: 60,
            fontFamily: "Optima-Bold",
            color: "#F28E00"
          }}
        >
          GPA
        </Text>
        <Input
          keyboardType={"numbers-and-punctuation"}
          inputContainerStyle={{ borderBottomWidth: 0, top: 13 }}
          containerStyle={{
            borderWidth: 2,
            borderRadius: 50,
            borderColor: "#F28E00",
            height: 70,
            position: "absolute",
            top: 635,
            width: 350
          }}
        />

        <TouchableWithoutFeedback
          onPress={() => this.props.navigation.navigate("FinalRegistration")}
        >
          <Icon
            type="font-awesome"
            name="check"
            size={50}
            style={{ position: "absolute", top: 750, right: 20 }}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => this.props.navigation.navigate("RegisterTwo")}
        >
          <Icon
            type="font-awesome"
            name="arrow-left"
            size={50}
            style={{ position: "absolute", top: 750, left: 20 }}
          />
        </TouchableWithoutFeedback>
        <Progress.Bar
          progress={1}
          width={200}
          color={"#F28E00"}
          position={"absolute"}
          top={810}
        />
      </View>
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
    width: 390,
    height: 525,
    borderRadius: 100 / 5,
    backgroundColor: "white",
    position: "absolute",
    top: 300,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5
  },
  backgroundCircle: {
    width: 425,
    height: 600,
    borderRadius: 100 / 2,
    backgroundColor: "white",
    position: "absolute",
    top: 350
  }
});
