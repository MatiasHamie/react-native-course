import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#28c4d9',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  caja1: {
    // flex: 3, // 3 + 2 + 1 = 6
    borderWidth: 2,
    borderColor: '#fff',
    fontSize: 30,
  },
  caja2: {
    // flex: 2, // 3 + 2 + 1 = 6
    borderWidth: 2,
    borderColor: '#fff',
    fontSize: 30,
  },
  caja3: {
    // flex: 1, // 3 + 2 + 1 = 6
    borderWidth: 2,
    borderColor: '#fff',
    fontSize: 30,
  },
});
