import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/AppTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 3</Text>
      <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button title="Ir a Pagina 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};
