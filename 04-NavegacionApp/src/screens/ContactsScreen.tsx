import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../theme/AppTheme';

export const ContactsScreen = () => {
  const {authState, signIn} = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contacts Screen</Text>
      {!authState.isLoggedIn && <Button title="SignIn" onPress={signIn} />}
    </View>
  );
};
