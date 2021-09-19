import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatScreen} from '../screens/ChatScreen';
import {ContactsScreen} from '../screens/ContactsScreen';
import {AlbumsScreen} from '../screens/AlbumsScreen';
// prestar atencion a como se importa
// ya q en el icon normal q importa por defecto
// tenes a aclarar cual queres usar, aca solo usamos una y listo
import Icon from 'react-native-vector-icons/Ionicons';

// esto es porque aparecia un alert molesto q no tiene una solucion rapida
import {LogBox} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../theme/AppTheme';
LogBox.ignoreLogs(['Sending']);

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{paddingTop: top}}
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={({route}) => ({
        tabBarPressColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          shadowColor: 'transparent', // quitarle la sombra en ios
          elevation: 0, // quitarle la sombra en android
        },
        tabBarShowIcon: true,
        // el color cuando esta activa la tab
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'ChatScreen':
              iconName = 'chatbox-ellipses-outline';
              break;
            case 'ContactsScreen':
              iconName = 'people-outline';
              break;
            case 'AlbumsScreen':
              iconName = 'albums-outline';
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <Tab.Screen
        name="ChatScreen"
        options={{title: 'chat'}}
        component={ChatScreen}
      />
      <Tab.Screen
        name="ContactsScreen"
        options={{title: 'Contact'}}
        component={ContactsScreen}
      />
      <Tab.Screen
        name="AlbumsScreen"
        options={{title: 'Album'}}
        component={AlbumsScreen}
      />
    </Tab.Navigator>
  );
};
