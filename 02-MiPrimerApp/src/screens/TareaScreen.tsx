import React from 'react';
import { StyleSheet, View } from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425b',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: '#fff',
    backgroundColor: '#5856d6',
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: '#fff',
    backgroundColor: '#f0a23b',
  },
  cajaAzul: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: '#fff',
    backgroundColor: '#28c4d9',
  },
});
