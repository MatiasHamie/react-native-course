import React from 'react';
import { StyleSheet, View } from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
    </View>
  );
};

// Por defecto todo esta con position: relative
// y en columna
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28c4d9',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: '#5856d6',
    borderWidth: 10,
    borderColor: '#fff',
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: '#F0a23b',
    borderWidth: 10,
    borderColor: '#fff',
  },
});
