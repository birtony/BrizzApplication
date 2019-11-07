import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class FinalRegistration extends Component {
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
          style={{
            position: "absolute",
            top: 500,
            color: "#F28E00",
            fontFamily: "Optima-Bold",
            fontSize: 22,
            textAlign: "justify"
          }}
        >
          TO BETTER FIND WHAT
        </Text>
        <Text
          style={{
            position: "absolute",
            top: 520,
            color: "#F28E00",
            fontFamily: "Optima-Bold",
            fontSize: 22,
            textAlign: "justify"
          }}
        >
          PROGRAM YOU WANT, PLEASE
        </Text>
        <Text
          style={{
            position: "absolute",
            top: 540,
            color: "#F28E00",
            fontFamily: "Optima-Bold",
            fontSize: 22,
            textAlign: "justify"
          }}
        >
          ANSWER THE FOLLOWING
        </Text>
        <Text
          style={{
            position: "absolute",
            top: 560,
            color: "#F28E00",
            fontFamily: "Optima-Bold",
            fontSize: 22,
            textAlign: "justify"
          }}
        >
          QUESTIONS
        </Text>
        <TouchableWithoutFeedback
          onPress={() => this.props.navigation.navigate("LoginComponent")}
        >
          <Icon
            type="font-awesome"
            name="arrow-circle-right"
            size={50}
            style={{ position: "absolute", top: 600 }}
          />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default FinalRegistration;

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
