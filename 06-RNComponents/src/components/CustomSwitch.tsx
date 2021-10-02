import React, {useState} from 'react';
import {Platform, Switch} from 'react-native';

interface Props {
  initialState: boolean;
  onChange: (isEnabled: boolean) => void;
}

export const CustomSwitch = ({initialState, onChange}: Props) => {
  const [isEnabled, setIsEnabled] = useState(initialState);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{false: '#d9d9db', true: '#5856d6'}}
      // Esto es porque si no le pongo color a lo que se mueve de derecha a izquierda
      // en ios se ve bien, no haria falta ponerle el thumbColor, pero en android
      // (si lo dejo asi) no se ve, por ende solo le pongo color si estan en android
      thumbColor={Platform.OS === 'android' ? '#5856d6' : ''}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
