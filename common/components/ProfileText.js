import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { Col, Grid } from 'react-native-easy-grid';

export default function ProfileText({ textToPut, style }) {
  return (
    <Grid style={styles.grid}>
      <Col>
        <Text style={style}>
          {textToPut}
        </Text>
      </Col>
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
    alignContent: 'center',
    justifyContent: 'center',
    fontFamily: 'Optima-Bold',
  },
});
