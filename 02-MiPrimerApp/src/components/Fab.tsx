import React, { FC } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = {
  title: string;
  position?: 'br' | 'bl'; // si quiere que el boton este ubicado bottom right o left
  onPress: () => void;
};

export const Fab: FC<Props> = ({ title, onPress, position = 'br' }) => {
  const ios = () => {
    return (
      <TouchableOpacity
        // que tan opaco quiero q se ponga entre 0 y 1 al presionar
        activeOpacity={0.3}
        style={[
          styles.fabLocation,
          position === 'br' ? styles.right : styles.left,
        ]}
        onPress={onPress}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // En android, el efecto al presionar el TouchableOpacity, no queda bueno al aplicarle
  // una sombra y elevacion, por lo que de esta forma, podemos solucionarlo para android
  // para ios el touchableOpacity funciona perfecto
  const android = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          position === 'br' ? styles.right : styles.left,
        ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#28425b', false, 30)}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  // de esta forma podemos saber que sistema operativo se esta ejecutando
  return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  // floating action button
  fab: {
    backgroundColor: '#5856d6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',

    //https://ethercreative.github.io/react-native-shadow-generator/
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },

  fabText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  fabLocation: {
    position: 'absolute',
    bottom: 25,
  },
  right: {
    right: 25,
  },
  left: {
    left: 25,
  },
});
