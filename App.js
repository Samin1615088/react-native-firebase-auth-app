import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateAccount from './screens/CreateAccount/CreateAccount';
import Home from './screens/Home/Home';
import Signup from './screens/Signup/Signup';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is demo</Text>
      <StatusBar style="auto" />
      <Home/>
      <CreateAccount/>
      <Signup/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
