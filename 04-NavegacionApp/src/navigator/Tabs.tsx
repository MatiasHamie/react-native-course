/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/Tab1Screen';
// import {Tab2Screen} from '../screens/Tab2Screen';
// import {Tab3Screen} from '../screens/Tab3Screen';
import {StackNavigator} from './StackNavigator';
import {colors} from '../theme/AppTheme';
import {Platform} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {TopTabNavigator} from './TopTabNavigator';
// prestar atencion a como se importa
// ya q en el icon normal q importa por defecto
// tenes a aclarar cual queres usar, aca solo usamos una y listo
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();
const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{backgroundColor: colors.primary}}
      screenOptions={({route}) => ({
        headerShown: false,
        // ojo q en materialtabs no hay size en las props
        // que recibe el tabBarIcon
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'bandage-outline';
              break;
            case 'Tab2Screen':
              iconName = 'basketball-outline';
              break;
            case 'StackNavigator':
              iconName = 'bookmarks-outline';
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        options={{title: 'tab1'}}
        component={Tab1Screen}
      />
      <BottomTabAndroid.Screen
        name="Tab2Screen"
        options={{title: 'tab2'}}
        component={TopTabNavigator}
      />
      {/* como vemos, se puede usar otro navigator en una tab */}
      <BottomTabAndroid.Screen
        name="StackNavigator"
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabsIOS = createBottomTabNavigator();
const TabsIOS = () => {
  return (
    <BottomTabsIOS.Navigator
      sceneContainerStyle={{
        // el color de fondo de pantalla de la pantalla q esta apareciendo
        // esto NO cambia las pantallas q aparezcan al tocar una tab
        // que pertenezcan a otro navigator
        backgroundColor: 'white',
        elevation: 0,
      }}
      // propiedades globales de las tabs
      screenOptions={({route}) => ({
        headerShown: false,
        // creando/editando el icono
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'bandage-outline';
              break;
            case 'Tab2Screen':
              iconName = 'basketball-outline';
              break;
            case 'StackNavigator':
              iconName = 'bookmarks-outline';
              break;
          }
          // color del padre al icono de la tab
          // color: color === color en ES6 (por eso esta asi)
          return <Icon name={iconName} size={20} color={color} />;
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
      <BottomTabsIOS.Screen
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
      <BottomTabsIOS.Screen
        name="Tab2Screen"
        options={{title: 'tab2'}}
        component={TopTabNavigator}
      />
      {/* como vemos, se puede usar otro navigator en una tab */}
      <BottomTabsIOS.Screen name="StackNavigator" component={StackNavigator} />
    </BottomTabsIOS.Navigator>
  );
};
