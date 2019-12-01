import React from "react";
import { StyleSheet, View, Image, SafeAreaView } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import { Col, Row, Grid } from "react-native-easy-grid";
import { useStateValue } from "../../utils/provider";
import { AuthSession } from "expo";

export default InputComponent = ({
  title,
  onChangeAction,
  property,
  iconName
}) => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <Grid>
      <Col size={1}></Col>
      <Col size={5}>
        <Text h3 style={styles.TextH3}>
          {title}
        </Text>
        <Input
          placeholder={title}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          leftIcon={{
            type: "font-awesome",
            name: `${iconName}`,
            left: -14,
            size: 35
          }}
          containerStyle={styles.Input}
          onChangeText={text => dispatch(`${onChangeAction}`(text))}
          value={property}
        />
      </Col>
      <Col size={1}></Col>
    </Grid>
  );
};

const styles = StyleSheet.create({
  grid: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%"
  },
  TextH3: {
    alignContent: "flex-start",
    justifyContent: "center",
    color: "#F28E00",
    fontFamily: "Optima-Bold"
  },
  Input: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "#F28E00",
    width: "100%"
  }
});
