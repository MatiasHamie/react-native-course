import React from 'react';
import { StyleSheet, View } from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaVerde} />
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

    // practicando pos absolute
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: '#F0a23b',
    borderWidth: 10,
    borderColor: '#fff',

    // practicando pos absolute
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  cajaVerde: {
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: '#fff',
    // width: 100,
    // height: 100,

    // practicando pos absolute
    // si yo pongo todo en cero, y no defino una medida,
    // la caja se va a estirar a todo lo q mida el padre
    // el sinonimo de eso en react native es
    // StyleSheet.absoluteFillObject
    // position: 'absolute',
    // top: 0,
    // right: 0,
    // left: 0,
    // bottom: 0,
    ...StyleSheet.absoluteFillObject,
  },
});
