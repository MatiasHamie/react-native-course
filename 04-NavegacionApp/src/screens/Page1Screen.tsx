import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/AppTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Paginas 1</Text>
      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />
    </View>
  );
};
