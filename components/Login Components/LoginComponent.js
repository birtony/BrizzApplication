import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  SafeAreaView
} from "react-native";
import { Input, Button, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

class LoginPage extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.logoImage}
          source={require("../../assets/logo.png")}
        />
        <View style={styles.backgroundCircle} />
        <View style={styles.roundedRectangle} />
        <View style={styles.LoginFlap} />
        <View style={styles.SignUpFlap} />
        <TouchableWithoutFeedback
          onPress={() => this.props.navigation.navigate("RegisterComponent")}
        >
          <View style={styles.signUpFlapView}>
            <Text style={styles.signUpFlapViewText}>Sign Up</Text>
          </View>
        </TouchableWithoutFeedback>
        <Text h3 style={styles.emailEnterTextH3}>
          Email
        </Text>
        <Input
          placeholder="Email"
          leftIcon={{ type: "font-awesome", name: "at", left: -14, size: 35 }}
          inputContainerStyle={{ borderBottomWidth: 0, top: 13 }}
          containerStyle={styles.EmailInput}
        />
        <Text h3 style={styles.passwordEnterTextH3}>
          Password
        </Text>
        <Input
          placeholder="Password"
          inputContainerStyle={{ borderBottomWidth: 0, top: 13 }}
          leftIcon={{ type: "font-awesome", name: "key", left: -14, size: 35 }}
          containerStyle={styles.passwordInput}
        />
        <View style={styles.ButtonLogin}>
          <Button
            title="Log In"
            titleStyle={{ fontSize: 40, fontFamily: "Optima-Bold" }}
            buttonStyle={styles.LoginButtonStyle}
            onPress={() => this.props.navigation.navigate("ProgramsMatched")}
          />
        </View>
        <Text style={styles.loginFlapText}>Log In</Text>
        <Text
          h5
          style={styles.blueTapMeText}
          onPress={() => this.props.navigation.navigate("RegisterComponent")}
        >
          Tap Me to Sign Up
        </Text>
      </SafeAreaView>
    );
  }
}
export default LoginPage;

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
  LoginFlap: {
    width: "28%",
    height: "10%",
    borderRadius: 100 / 5,
    backgroundColor: "white",
    top: "33%",
    position: "absolute",
    left: "3%"
  },
  SignUpFlap: {
    width: "28%",
    height: "10%",
    position: "absolute",
    top: "33%",
    right: "3%",
    backgroundColor: "#FFFFFF50",
    opacity: 20,
    borderRadius: 100 / 5
  },
  logoImage: {
    width: "40%",
    height: "20%",
    position: "absolute",
    top: "10%"
  },
  signUpFlapView: {
    position: "absolute",
    top: "33%",
    right: "28%"
  },
  signUpFlapViewText: {
    position: "absolute",
    fontFamily: "Optima-Bold",
    fontSize: 25,
    color: "#00000050"
  },
  emailEnterTextH3: {
    position: "absolute",
    top: "44%",
    left: "15%",
    color: "#F28E00",
    fontFamily: "Optima-Bold"
  },
  EmailInput: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "#F28E00",
    height: "8%",
    position: "absolute",
    top: "49%",
    width: "85%"
  },
  passwordEnterTextH3: {
    position: "absolute",
    top: "59%",
    left: "15%",
    color: "#F28E00",
    fontFamily: "Optima-Bold"
  },
  passwordInput: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "#F28E00",
    height: "8%",
    position: "absolute",
    top: "64%",
    width: "85%"
  },
  LoginButtonStyle: {
    backgroundColor: "#F28E00",
    width: 250,
    borderRadius: 50,
    height: 75,
    position: "absolute",
    left: -120,
    top: "5%",
    borderColor: "grey",
    borderWidth: 1
  },
  ButtonLogin: {
    top: "30%"
  },
  loginFlapText: {
    top: "32.5%",
    left: "8%",
    position: "absolute",
    fontFamily: "Optima-Bold",
    fontSize: 25
  },
  blueTapMeText: {
    position: "absolute",
    top: "75%",
    fontFamily: "Optima-Bold",
    color: "#009EF2"
  }
});
