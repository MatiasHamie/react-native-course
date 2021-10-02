/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {HeaderTitle} from '../components/HeaderTitle';
import {menuItems} from '../data/menuItems';
import {IMenuItem} from '../interfaces/IMenuItem';
import {styles} from '../theme/AppTheme';

export const HomeScreen = () => {
  const itemSeparator = () => {
    return (
      <View style={{borderBottomWidth: 1, opacity: 0.4, marginVertical: 8}} />
    );
  };

  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        ListHeaderComponent={() => <HeaderTitle title="Opciones de menu" />}
        keyExtractor={(item: IMenuItem) => item.name}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};
