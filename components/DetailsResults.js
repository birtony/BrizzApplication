import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

// Need to fetch all results into an array.
// And for loop Views to display individual results per result.

class DetailsComponents extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.background} />
        <Text style={styles.programName}> Software Development </Text>
        {/* <Text style={styles.description}>
          {" "}
          This four-year honours bachelor degree will provide you with extensive
          knowledge and technical skills in software development languages. This
          program also covers topics in operating systems, web applications,
          multimedia interfaces, information security, databases, system
          analysis and design principles. You will also develop communication
          skills to effectively present technical ideas.
        </Text>
        <View styles={styles.offeredAt}>Offered at</View>
        <view styles={styles.tuitionCost}>Tuition Cost</view>
        <View styles={styles.startDate}>Start Date</View> */}
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
  programName: {
    flex: 1,
    position: "absolute",
    top: "130%",
    fontSize: 20,
    fontWeight: "bold"
  }
  //   description: {
  //     flex: 1,
  //     position: "relative",
  //     position: "absolute",
  //     top: "190%",
  //     left: "20%",
  //     fontSize: "18px",
  //     fontWeight: "bold",
  //     textDecorationLine: "underline"
  //   },
  //   offeredAt: {
  //     flex: 1,
  //     position: "absolute",
  //     top: "400%",
  //     left: "20%",
  //     fontSize: "18px",
  //     fontWeight: "bold",
  //     textDecorationLine: "underline"
  //   },
  //   tuitionCost: {
  //     position: "absolute",
  //     top: "460%",
  //     left: "20%",
  //     fontSize: "18px",
  //     fontWeight: "bold",
  //     textDecorationLine: "underline"
  //   },
  //   startDate: {
  //     position: "absolute",
  //     top: "520%",
  //     left: "20%",
  //     fontSize: "18px",
  //     fontWeight: "bold",
  //     textDecorationLine: "underline"
  //   }
});
