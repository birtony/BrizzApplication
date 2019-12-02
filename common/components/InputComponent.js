import React from 'react';
import { StyleSheet } from 'react-native';
import { Input, Text } from 'react-native-elements';
import { Col, Grid } from 'react-native-easy-grid';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function InputComponent({ title, onChangeText, property, iconName, isSecure }) {
  return (
    <Grid>
      <Col size={1}></Col>
      <Col size={5}>
        <Text style={styles.TextH3}>
          {title}
        </Text>
        {iconName ? (
          <Input
            placeholder={title}
            secureTextEntry={isSecure}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            leftIcon={{
              type: 'font-awesome',
              name: `${iconName}`,
              left: -14,
              size: 35,
            }}
            containerStyle={styles.Input}
            onChangeText={onChangeText}
            value={property}
          />
        ) : (
          <Input
            placeholder={title}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            containerStyle={styles.Input}
            onChangeText={onChangeText}
            value={property}
          />
        )}
      </Col>
      <Col size={1}></Col>
    </Grid>
  );
}

const styles = StyleSheet.create({
  grid: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  TextH3: {
    alignContent: 'flex-start',
    justifyContent: 'center',
    color: '#F28E00',
    fontFamily: 'Optima-Bold',
    fontSize: RFPercentage(4.5),
  },
  Input: {
    borderWidth: 2,
    borderRadius: 50,
    top: '-5%',
    borderColor: '#F28E00',
    width: '100%',
  },
});
