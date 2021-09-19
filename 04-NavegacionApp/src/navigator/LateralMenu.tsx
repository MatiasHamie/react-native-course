import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
// import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {styles} from '../theme/AppTheme';
import {Tabs} from './Tabs';
// prestar atencion a como se importa
// ya q en el icon normal q importa por defecto
// tenes a aclarar cual queres usar, aca solo usamos una y listo
import Icon from 'react-native-vector-icons/Ionicons';
const Drawer = createDrawerNavigator();

export const LateralMenu = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
        headerShown: false,
      }}
      // Como todavia no estan renderizados los navigators (aca los estamos definiendo)
      // la unica forma de pasarle propiedades de navegacion a la pantalla lateral
      // es pasarselas de esta forma con los callbacks y props
      drawerContent={(props: DrawerContentComponentProps) => (
        <LateralMenuContent {...props} />
      )}>
      <Drawer.Screen name="Tabs" options={{title: 'Home'}} component={Tabs} />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

const LateralMenuContent = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del avatar */}
      <View style={styles.avatarContainer}>
        {/* Las images tienen por defecto 0 unidades de alto y ancho*/}
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opciones de menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={{
            ...styles.menuButton,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('StackNavigator')}>
          <Icon name="compass-outline" size={22} color="back" />
          <Text style={styles.menuButtonText}>Navegacion Stack</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.menuButton,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Icon name="cog-outline" size={22} color="back" />
          <Text style={styles.menuButtonText}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
