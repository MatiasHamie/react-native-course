import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

export const LateralMenuBasic = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      // Menú lateral siempre mostrandose cuando esta horizontal el telefono
      screenOptions={{drawerType: width >= 768 ? 'permanent' : 'front'}}>
      {/* <Drawer.Navigator
         screenOptions={{
      //   //headerShown: false, // oculta o muestra la hamburguesa
      // }}>*/}
      {/* Al poner el StackNavigator, automaticamente te redirecciona a la pagina
          que tenga configurada como inicial, por eso no ponemos una pagina aca */}
      <Drawer.Screen
        name="StackNavigator"
        // title: le agrega un header a la pagina (si ya hay un header por el stacknav, se lo agrega igual)
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
