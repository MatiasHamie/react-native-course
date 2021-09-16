import React from 'react';
// import {SafeAreaView} from 'react-native';
// navigation
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/navigator/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* Con el safeAreaView no se veia el contenido de cada pagina
          lo comente y funciono
      */}
      {/* <SafeAreaView> */}
      <StackNavigator />
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
};

export default App;
