import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../theme/AppTheme';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1Screen');
  }, []);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <Icon name="bonfire-outline" size={30} color="#900" />
      </Text>
    </View>
  );
};
