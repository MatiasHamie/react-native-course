import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
// import ContadorScreen from './src/screens/ContadorScreen';
// import HolaMundoScreen from './src/screens/HolaMundoScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
// import { PositionScreen } from './src/screens/PositionScreen';
// import { FlexScreen } from './src/screens/FlexScreen';
import { TareaScreen } from './src/screens/TareaScreen';

const App = () => {
  // return <HolaMundoScreen />;
  // return <ContadorScreen />;
  return (
    // SafeAreaView: se asegura de no usar parte del notch de los celulares
    // notch: parte donde esta el parlante y sensor de proximidad
    <SafeAreaView style={styles.parent}>
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
});

export default App;
