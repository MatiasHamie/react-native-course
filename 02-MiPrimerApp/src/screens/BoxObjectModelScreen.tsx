import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// esto es solo para practicas de boxModel

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  },
  title: {
    fontSize: 20,
    borderWidth: 10,
    // backgroundColor: 'red',
    paddingHorizontal: 100,
    paddingVertical: 20,
    marginHorizontal: 20,
  },
});
