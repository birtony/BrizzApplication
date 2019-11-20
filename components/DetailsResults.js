import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  navigate
} from "react-native";
import { Text } from "react-native-elements";
import { withNavigation } from "react-navigation";

// Need to fetch all results into an array.
// And for loop Views to display individual results per result.

class DetailsComponents extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.background} />
        <Text style={styles.programName}> SOFTWARE DEVELOPMENT </Text>
        <Text style={styles.descriptionHeading}>DESCRIPTION</Text>
        <Text style={styles.description}>
          This four-year honours bachelor degree will provide you with extensive
          knowledge and technical skills in software development languages. This
          program also covers topics in operating systems, web applications,
          multimedia interfaces, information security, databases, system
          analysis and design principles. You will also develop communication
          skills to effectively present technical ideas.
        </Text>
        <Text style={styles.offeredAtHeading}>OFFERED AT</Text>
        <Text style={styles.offeredAt}>Seneca College</Text>
        <Text style={styles.tuitionCostHeading}>TUITION COST</Text>
        <Text style={styles.tuitionCost}>$8000.00 / year</Text>
        <Text style={styles.startDateHeading}>START DATE</Text>
        <Text style={styles.startDate}>September 2019</Text>
        {/* <Text
          style={styles.goBackButton}
          onPress={() => this.props.navigation.navigate("ProgramsMatched")}
        >
          Go back
        </Text> */}
        <Text
          style={{
            position: "absolute",
            top: 100,
            right: 63,
            fontSize: 18,
            fontWeight: "bold"
          }}
          onPress={() => this.props.navigation.navigate("LoginComponent")}
        >
          Go Back
        </Text>
      </View>
    );
  }
}
export default DetailsComponents;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    flex: 1,
    position: "absolute",
    backgroundColor: "white",
    height: "180%",
    width: "92%",
    left: "4%",
    top: "-75%",
    borderRadius: 100 / 5
  },
  goBackButton: {
    flex: 1,
    position: "absolute",
    bottom: "12%",
    right: "7%",
    fontWeight: "bold"
  },
  programName: {
    flex: 1,
    position: "absolute",
    bottom: "160%",
    left: "14%",
    fontSize: 20,
    fontWeight: "bold"
  },
  descriptionHeading: {
    flex: 1,
    position: "relative",
    position: "absolute",
    bottom: "150%",
    left: "5%",
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
  description: {
    flex: 1,
    position: "relative",
    position: "absolute",
    bottom: "90%",
    left: "5%",
    right: "5%",
    fontSize: 16
  },
  offeredAtHeading: {
    flex: 1,
    position: "relative",
    position: "absolute",
    bottom: "80%",
    left: "5%",
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
  offeredAt: {
    flex: 1,
    position: "relative",
    position: "absolute",
    bottom: "73%",
    left: "5%",
    right: "5%",
    fontSize: 16
  },
  tuitionCostHeading: {
    position: "absolute",
    bottom: "63%",
    left: "5%",
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
  tuitionCost: {
    flex: 1,
    position: "relative",
    position: "absolute",
    bottom: "56%",
    left: "5%",
    right: "5%",
    fontSize: 16
  },
  startDateHeading: {
    position: "absolute",
    bottom: "46%",
    left: "5%",
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
  startDate: {
    flex: 1,
    position: "relative",
    position: "absolute",
    bottom: "39%",
    left: "5%",
    right: "5%",
    fontSize: 16
  }
});
