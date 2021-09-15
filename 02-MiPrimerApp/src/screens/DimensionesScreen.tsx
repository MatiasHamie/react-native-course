import React from 'react';
import {
  //   Dimensions,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

// no es en tiempo real
// const { height, width } = Dimensions.get('window');

export const DimensionesScreen = () => {
  const { height, width } = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        {/* Esta es otra forma de hacer estilos si no quiero usar el % */}
        <View style={{ ...styles.cajaMorada, width: width * 0.5 }} />
        <View style={styles.cajaNaranja} />
      </View>
      <Text style={styles.title}>
        W: {width}, H: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 600,
    backgroundColor: 'red',
  },
  cajaMorada: {
    backgroundColor: '#5856d6',
    // width: 50,
    // width: '50%', // % del padre
    height: 50,
  },
  cajaNaranja: {
    backgroundColor: '#f0a23b',
  },
  title: {
    fontSize: 30,
  },
});
