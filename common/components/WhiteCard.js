import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Row, Grid } from 'react-native-easy-grid';
import logo from '../../assets/logo.png';

export default function whiteCard({ children }) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
    >
      <SafeAreaView style={styles.safeAreaViewContainer}>
        <Grid style={styles.grid}>
          <Row size={2}>
            <Image style={styles.logoImage} source={logo}></Image>
          </Row>
          <Row size={1} />
          <Row size={9}>
            <View style={styles.whiteCard}>{children}</View>
          </Row>
        </Grid>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: '#F28E00',
  },
  grid: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  logoImage: {
    alignItems: 'center',
    justifyContent: 'center',
    top: '10%',
  },
  whiteCard: {
    flex: 1,
    maxWidth: '94%',
    maxHeight: '95%',
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    justifyContent: 'center',
  },
});
