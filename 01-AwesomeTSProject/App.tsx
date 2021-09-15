import React from 'react';
import {Text, View} from 'react-native';

const App = () => {
  return (
    <View>
      {/* Ojo que depende del tema del celular, por default esta en negro
      y no se ve en el iphone si esta en tema negro */}
      <Text style={{color: 'white', fontSize: 50}}>Hola munso</Text>
    </View>
  );
};

export default App;
