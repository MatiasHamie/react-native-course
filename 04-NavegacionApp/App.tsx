import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Text>Prueba</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
