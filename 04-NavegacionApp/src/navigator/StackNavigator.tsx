import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Page1Screen} from '../screens/Page1Screen';
import {Page2Screen} from '../screens/Page2Screen';
import {Page3Screen} from '../screens/Page3Screen';
import {PersonScreen} from '../screens/PersonScreen';

// creado por mi, le podes poner el tipo de params q recibe una pagina
export type RootStackParams = {
  Page1Screen: undefined; // si no recibe nada, poner undefined
  Page2Screen: undefined;
  Page3Screen: undefined;
  PersonScreen: {id: number; nombre: string}; // hacer una interface, es un ejemplo nomas
};

// no olvidar de tipar aca con el type de arriba y listo, todo el stack tipado
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // le decis q pagina es la inicial
      initialRouteName="Page1Screen"
      screenOptions={{
        headerStyle: {
          elevation: 0, // esto es para android, q no muestre una sombra fea abajo del header de la pagina
          shadowColor: 'transparent', // idem elevation pero para ios
        },
        // le pone el color de fondo a todas las paginas
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Stack.Screen
        name="Page1Screen"
        // titulo del header q te dice en q pagina estas
        options={{title: 'Pagina 1'}}
        component={Page1Screen}
      />
      <Stack.Screen
        name="Page2Screen"
        options={{title: 'Pagina 2'}}
        component={Page2Screen}
      />
      <Stack.Screen
        name="Page3Screen"
        options={{title: 'Pagina 3'}}
        component={Page3Screen}
      />
      <Stack.Screen
        name="PersonScreen"
        options={{title: 'Person'}}
        component={PersonScreen}
      />
    </Stack.Navigator>
  );
};
