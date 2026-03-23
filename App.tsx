import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import Button from './src/Button/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Button bgColor="red" color="white" onButtonPressed={()=>{
        console.log('cancel');
      }} >Annuler</Button>
      <Button bgColor="green" color="white" onButtonPressed={()=>{
        console.log('ok');
      }}>Ok</Button>
      <Button bgColor="blue" color="white" >null button</Button>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
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
