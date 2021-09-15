import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
// import ContadorScreen from './src/screens/ContadorScreen';
// import HolaMundoScreen from './src/screens/HolaMundoScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';

const App = () => {
  // return <HolaMundoScreen />;
  // return <ContadorScreen />;
  return (
    // SafeAreaView: se asegura de no usar parte del notch de los celulares
    // notch: parte donde esta el parlante y sensor de proximidad
    <SafeAreaView style={styles.parent}>
      {/* <BoxObjectModelScreen /> */}
      <DimensionesScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
});

export default App;
