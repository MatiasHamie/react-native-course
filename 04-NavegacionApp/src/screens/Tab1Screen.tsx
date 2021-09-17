import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1Screen');
  }, []);
  return (
    <View>
      <Text>Tab 1 screen</Text>
    </View>
  );
};
