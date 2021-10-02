import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IMenuItem} from '../interfaces/IMenuItem';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';

interface Props {
  menuItem: IMenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(menuItem.ScreenComponent as any)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color="#5856d6" size={23} />
        <Text style={styles.itemText}>{menuItem.name}</Text>
        {/* esto es un "spacer", es basicamente un div q al tener flex:1
          empuja al icono al final
      */}
        <View style={{flex: 1}} />
        <Icon name="chevron-forward-outline" color="#5856d6" size={23} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
});
