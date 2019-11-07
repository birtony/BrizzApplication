import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
  DatePickerIOS
} from "react-native";
import { Input, Button, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Progress from "react-native-progress";
import Modal from "react-native-modal";

class RegisterTwo extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }

  state = {
    isModalVisible: false
  };

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  NextScreen = () => {
    this.props.navigation.navigate("RegisterThree");
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
          First Name
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
          Last Name
        </Text>
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
          Date of Birth
        </Text>
        <TouchableWithoutFeedback onPress={this.toggleModal}>
          <View style={styles.orangeBorder}>
            <Text
              style={{
                position: "relative",
                fontFamily: "Optima-Bold",
                fontSize: 20,
                top: "33%",
                left: 20
              }}
            >
              {this.state.chosenDate.toDateString()}
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}
          animationIn={"slideInRight"}
        >
          <View style={{ flex: 1, justifyContent: "center" }}>
            <DatePickerIOS
              mode={"date"}
              date={this.state.chosenDate}
              onDateChange={this.setDate}
            />
            <Button title="Done" onPress={this.toggleModal} />
          </View>
        </Modal>
        <TouchableWithoutFeedback onPress={this.NextScreen}>
          <Icon
            type="font-awesome"
            name="arrow-right"
            size={50}
            style={{ position: "absolute", top: 750, right: 20 }}
          />
        </TouchableWithoutFeedback>
        <Progress.Bar
          progress={0.5}
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
  datePicker: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  Setup: {
    flex: 1,
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
  },
  orangeBorder: {
    width: 350,
    position: "absolute",
    borderWidth: 2,
    height: 70,
    borderRadius: 100 / 2,
    top: 635,
    borderColor: "#F28E00"
  }
});
