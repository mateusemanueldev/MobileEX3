import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import IMCApp from './components/IMCApp';
import Render from './components/Render';

export default function App() {
  return (
    <View style={styles.container}>
      <Render/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f3f5',
    alignItems: 'center',
    justifyContent: 'center',
    
  }
});
