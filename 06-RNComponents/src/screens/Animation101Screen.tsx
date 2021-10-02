import React from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import {useAnimation} from '../hook/useAnimation';

export const Animation101Screen = () => {
  const {
    animatedOpacity,
    animatedPosition,
    fadeIn,
    fadeOut,
    startMovingPosition,
  } = useAnimation();
  return (
    <View style={styles.container}>
      {/* Para poder animar un view, no podemos usarlo asi nomas, tenemos q agregarle 
          el Animated. */}
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity: animatedOpacity,
          transform: [
            {
              translateY: animatedPosition,
            },
          ],
        }}
      />
      <Button
        title="FadeIn"
        onPress={() => {
          fadeIn();
          startMovingPosition(-100);
        }}
      />
      <Button title="FadeOut" onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});
