import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

const ContadorScreen = () => {
  const [contador, setContador] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>
      <Fab title="+1" onPress={() => setContador(c => c + 1)} position="br" />
      <Fab title="-1" onPress={() => setContador(c => c - 1)} position="bl" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    // position: 'relative', Por defecto son todos relative
    // NO hay position: 'fixed'
    fontSize: 45,
    top: 10,
  },
});

export default ContadorScreen;
