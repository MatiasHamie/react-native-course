import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IMenuItem} from '../interfaces/IMenuItem';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  menuItem: IMenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color="gray" size={23} />
        <Text style={styles.itemText}>{menuItem.name}</Text>
        {/* esto es un "spacer", es basicamente un div q al tener flex:1
          empuja al icono al final
      */}
        <View style={{flex: 1}} />
        <Icon name="chevron-forward-outline" color="gray" size={23} />
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
