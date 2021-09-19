import React, {FC, useContext} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/AuthContext';
import {colors} from '../theme/AppTheme';

interface Props {
  iconName: string;
}

export const TouchableIcon: FC<Props> = ({iconName}) => {
  const {changeFavouriteIcon} = useContext(AuthContext);

  return (
    <TouchableOpacity onPress={() => changeFavouriteIcon(iconName)}>
      <Icon name={iconName} size={30} color={colors.primary} />
    </TouchableOpacity>
  );
};
