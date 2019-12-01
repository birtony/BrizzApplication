import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { Row, Grid } from 'react-native-easy-grid';

export default function Settings({ navigation }) {
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <Grid>
        <Row>
          <Text h1 style={styles.h1}>
            Settings
          </Text>
        </Row>
        <Row>
          <Button title="User Profile" onPress={() => navigation.navigate('UserProfile')} />
        </Row>
        <Row>
          <Button
            title="Log Out"
            onPress={() => {
              // logout the user
              navigation.navigate('Login');
            }}
          />
        </Row>
      </Grid>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F28E00',
  },
});
