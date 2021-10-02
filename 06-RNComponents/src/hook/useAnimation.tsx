import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedPosition = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true, // acelerada por hardware
    }).start(() => console.log('animacion termino'));
  };

  const fadeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0.4,
      duration: 700,
      useNativeDriver: true, // acelerada por hardware
    }).start(() => console.log('animacion termino'));

    Animated.timing(animatedPosition, {
      toValue: -100,
      duration: 700,
      useNativeDriver: true, // acelerada por hardware
    }).start();
  };

  const startMovingPosition = (
    initialPosition: number,
    duration: number = 300,
  ) => {
    animatedPosition.setValue(initialPosition);

    Animated.timing(animatedPosition, {
      toValue: 0,
      duration,
      useNativeDriver: true, // acelerada por hardware,
      easing: Easing.bounce, // ojo, importar desde react-native
    }).start();
  };

  return {
    animatedOpacity,
    animatedPosition,
    fadeIn,
    fadeOut,
    startMovingPosition,
  };
};
