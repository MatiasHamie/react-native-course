import React from 'react';
// View: es como un div, tiene por defecto ocupar el 100% de la pantalla
//       y empieza a renderizar en el punto x:0 y:0
import { Text, View } from 'react-native';

const HolaMundoScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 45,
        }}>
        Hola Mundo
      </Text>
    </View>
  );
};

export default HolaMundoScreen;
