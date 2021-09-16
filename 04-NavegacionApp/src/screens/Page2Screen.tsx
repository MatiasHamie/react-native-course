import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/AppTheme';

export const Page2Screen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      // todo lo q se ponga aca, sobreescribe lo q haya anteriormente configurado
      // esto sobreescribe el titulo de la pagina que te pone automaticamente el Stack Navigator
      title: 'Nuevo titulo',
      // esto sobreescribe el texto que dice el boton volver a atras
      headerBackTitle: 'Ir Atras',
    });
  }, [navigator]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 2</Text>
      <Button
        title="Ir a pagina 3"
        onPress={() => navigator.navigate('Page3Screen')}
      />
    </View>
  );
};
