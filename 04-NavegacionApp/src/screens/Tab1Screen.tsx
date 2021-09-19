import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {TouchableIcon} from '../components/TouchableIcon';
import {styles} from '../theme/AppTheme';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1Screen');
  }, []);
  return (
    <SafeAreaView style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <TouchableIcon iconName="attach-outline" />
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="bonfire-outline" />
        <TouchableIcon iconName="calculator-outline" />
        <TouchableIcon iconName="chatbubble-ellipses-outline" />
        <TouchableIcon iconName="images-outline" />
        <TouchableIcon iconName="leaf-outline" />
      </Text>
    </SafeAreaView>
  );
};
