import React from 'react';
// import {SafeAreaView} from 'react-native';
// navigation
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
// import {LateralMenuBasic} from './src/navigator/LateralMenuBasic';
import {LateralMenu} from './src/navigator/LateralMenu';
import {AuthProvider} from './src/context/AuthContext';
// import {StackNavigator} from './src/navigator/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        {/* Con el safeAreaView como wrapper no se veia el contenido de cada pagina
          lo comente y funciono, no hay q ponerlo
          <SafeAreaView>
            <ComponenteInicial />
          </SafeAreaView> */}

        {/* Si solo vamos a usar el StackNavigator ponerlo sin problemas,
          PERO si usamos el drawer (barra lateral), este ya contiene
          al drawer en si mismo Y a los otros tipos de navegacion q existan,
          algo asi como un container, por ende, la barra lateral ya contiene el
          stackNavigator
          <StackNavigator /> */}
        {/* <LateralMenuBasic /> */}
        <LateralMenu />
      </AuthProvider>
    </NavigationContainer>
  );
};

// type Props = {
//   children: JSX.Element | JSX.Element[];
// };
// const AppState: FC<Props> = ({children}) => {
//   return <AuthProvider>{children}</AuthProvider>;
// };

export default App;
