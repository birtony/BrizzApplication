import React, { Component } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import NavBarComponent from "../NavBar/NavBarComponent";
import DetailsResults from "./DetailsResults";

class ProgramDetails extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <NavBarComponent />
        <DetailsResults />
      </SafeAreaView>
    );
  }
}
export default ProgramDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F28E00"
  }
});
