import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../navigator/StackNavigator';
import {styles} from '../theme/AppTheme';

// Nota: lo que se recomienda es hacer el tipado como esta "explicado" en el
// archivo src/navigator/StackNavigator.tsx, no hacer la interface q esta aca abajo

// esto lo hago solo para probar, de debe hacer algo global y exportarlo
// interface RouteParams {
//   id: number;
//   nombre: string;
// }

// StackScreenProps<Interface que creamos en el src/navigator/StackNavigator.tsx, Nombre de la pagina q esta como key en esa interface>
interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> {}

export const PersonScreen = ({route, navigation}: Props) => {
  //   const params = route.params as RouteParams;
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }, [navigation, params]);

  console.log(JSON.stringify(params, null));
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
