/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
// import {StackScreenProps} from '@react-navigation/stack';
import {colors, styles} from '../theme/AppTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DrawerScreenProps} from '@react-navigation/drawer';
// prestar atencion a como se importa
// ya q en el icon normal q importa por defecto
// tenes a aclarar cual queres usar, aca solo usamos una y listo
import Icon from 'react-native-vector-icons/Ionicons';

// interface Props extends StackScreenProps<any, any> {}
// tiene casi lo mismo q el stackScreenProps, lo importo para poder hacer el toggle del menu lateral
// lo de ocultar desde un boton desde una pagina especifica (como lo hice aca) es para no depender de un header
// hecho por raect-native, es a eleccion de cada uno, la dif es q ese header del drawer esta en todos lados automaticamente
// por ende la hamburguesa funciona de una y con el icono ya importado
interface Props extends DrawerScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <TouchableOpacity
            style={{marginLeft: 10}}
            onPress={() => navigation.toggleDrawer()}>
            <Icon name="menu-outline" color={colors.primary} size={35} />
          </TouchableOpacity>
        );
      },
    });
  }, [navigation]);

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
          <Icon name="body-outline" color="white" size={30} />
          <Text style={styles.bigButtonText}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.bigButton, backgroundColor: '#ff9427'}}
          onPress={() =>
            // asi se le mandan parametros a la pagina
            // se reciben en route.params.objetoQueMando
            navigation.navigate('PersonScreen', {id: 2, nombre: 'Maria'})
          }>
          <Icon name="woman-outline" color="white" size={30} />
          <Text style={styles.bigButtonText}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
