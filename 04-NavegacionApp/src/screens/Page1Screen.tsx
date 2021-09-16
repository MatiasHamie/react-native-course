/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/AppTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Paginas 1</Text>
      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.bigButton, backgroundColor: '#5856d6'}}
          onPress={() =>
            // asi se le mandan parametros a la pagina
            // se reciben en route.params.objetoQueMando
            navigation.navigate('PersonScreen', {id: 1, nombre: 'Pedro'})
          }>
          <Text style={styles.bigButtonText}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.bigButton, backgroundColor: '#ff9427'}}
          onPress={() =>
            // asi se le mandan parametros a la pagina
            // se reciben en route.params.objetoQueMando
            navigation.navigate('PersonScreen', {id: 2, nombre: 'Maria'})
          }>
          <Text style={styles.bigButtonText}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
