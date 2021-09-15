import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {CalculadoraScreen} from './src/screens/CalculadoraScreen';
import {styles} from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      {/* Esta es la barra donde esta la hora, estado de bateria, etc.
          Light-content le pone color: white
      */}
      <StatusBar backgroundColor="back" barStyle="light-content" />
      <CalculadoraScreen />
    </SafeAreaView>
  );
};

export default App;
