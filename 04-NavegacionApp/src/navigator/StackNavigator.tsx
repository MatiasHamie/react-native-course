import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Page1Screen} from '../screens/Page1Screen';
import {Page2Screen} from '../screens/Page2Screen';
import {Page3Screen} from '../screens/Page3Screen';

const Stack = createStackNavigator();

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
    </Stack.Navigator>
  );
};
