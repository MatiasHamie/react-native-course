import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

type Props = {
  text: string;
  color?: string;
  wide?: boolean;
};

export const BotonCalc: FC<Props> = ({text, color, wide}) => {
  // esto es porque en algunos dispositivos no tomaba bien las medidas
  // y quedaba todo pegado al borde
  const {width} = useWindowDimensions();
  return (
    // recordar que el touchableOpacity era para el efecto al presionar
    // y que no se usa un button, se usa ese touchable
    <TouchableOpacity>
      <View style={styles({color, wide} as Props, width).button}>
        <Text style={styles({color, wide} as Props).buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = ({color, wide}: Props, width?: number) =>
  StyleSheet.create({
    button: {
      height: 80,
      width: wide ? (width as number) / 2 - 20 : (width as number) / 4 - 20,
      backgroundColor: color || '#2d2d2d',
      borderRadius: 100,
      justifyContent: 'center',
      marginHorizontal: 10,
    },
    buttonText: {
      textAlign: 'center',
      padding: 10,
      fontSize: 30,
      color: color === '#9b9b9b' ? '#000' : '#fff',
      fontWeight: '300',
    },
  });
