/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/Tab1Screen';
import {Tab2Screen} from '../screens/Tab2Screen';
// import {Tab3Screen} from '../screens/Tab3Screen';
import {StackNavigator} from './StackNavigator';
import {colors} from '../theme/AppTheme';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        // el color de fondo de pantalla de la pantalla q esta apareciendo
        // esto NO cambia las pantallas q aparezcan al tocar una tab
        // que pertenezcan a otro navigator
        backgroundColor: 'white',
        elevation: 0,
      }}
      // propiedades globales de las tabs
      screenOptions={({route}) => ({
        // creando/editando el icono
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'ST';
              break;
          }
          // color del padre al icono de la tab
          // color: color === color en ES6 (por eso esta asi)
          return <Text style={{color}}>{iconName}</Text>;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          // el borde que separa la pantalla y los tabs
          borderTopColor: colors.primary,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          // fuente del texto del titulo de la tab
          fontSize: 15,
        },
      })}>
      <Tab.Screen
        name="Tab1Screen"
        options={{
          title: 'tab1',
        }}
        component={Tab1Screen}
      />
      {/*  esto es una forma de modificar el estilo ESPECIFICO de una tab */}
      {/* <Tab.Screen
        name="Tab1Screen"
        // title: el nombre de la tab
        // tabBarIcon: es el icono que esta arriba del titulo de la tab
        //             prestar atencion a que no es algo sencillo como
        //             tabBarIcon: 'start' o algo asi, tiene que ser un ReactNode
        //             o sea un JSX
        options={{
          title: 'tab1',
          // las props son las que les pasa el padre a esta tab
          // si no ponemos el color de las props, cuando este activa la tab
          // o sea, este en uso, mostrando su respectiva pantalla
          // no va a cambiar de color
          tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        }}
        component={Tab1Screen}
      /> */}
      <Tab.Screen
        name="Tab2Screen"
        options={{title: 'tab2'}}
        component={Tab2Screen}
      />
      {/* como vemos, se puede usar otro navigator en una tab */}
      <Tab.Screen name="StackNavigator" component={StackNavigator} />
    </Tab.Navigator>
  );
};
