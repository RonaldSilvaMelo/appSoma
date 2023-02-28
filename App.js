import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';


export default function App() {
  return (

    <View style={styles.container}>

      <Text style={styles.title}>Soma de Valores</Text>
      <TextInput style={styles.input} keyboardType='numeric' />
    <TextInput style={styles.input1} keyboardType='numeric' />

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#202020',
    padding: 8,
  },

  title: {
    color: '#ff6600',
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  input: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    margin: 30,
    padding: 10,
    fontSize: 30,
  },

  input1: {
    backgroundColor: '#ffffff',
    margin: 35,
    padding: 10,
    borderRadius: 15,
    fontSize: 30,
  },

});
