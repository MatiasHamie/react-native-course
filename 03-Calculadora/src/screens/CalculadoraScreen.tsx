import React from 'react';
import {Text, View} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';
import {styles} from '../theme/appTheme';

export const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraScreenContainer}>
      <Text style={styles.resultSmall}>1,500.00</Text>
      <Text style={styles.result}>1,500.00</Text>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc text="C" color="#9b9b9b" />
        <BotonCalc text="+/-" color="#9b9b9b" />
        <BotonCalc text="del" color="#9b9b9b" />
        <BotonCalc text="/" color="#ff9427" />
      </View>
      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc text="7" color="" />
        <BotonCalc text="8" color="" />
        <BotonCalc text="9" color="" />
        <BotonCalc text="*" color="#ff9427" />
      </View>
      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc text="4" color="" />
        <BotonCalc text="5" color="" />
        <BotonCalc text="6" color="" />
        <BotonCalc text="-" color="#ff9427" />
      </View>
      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc text="1" color="" />
        <BotonCalc text="2" color="" />
        <BotonCalc text="3" color="" />
        <BotonCalc text="+" color="#ff9427" />
      </View>
      {/* Fila de botones */}
      <View style={styles.fila}>
        {/* wide={true} es igual a poner solo wide */}
        <BotonCalc text="0" color="" wide />
        <BotonCalc text="." color="" />
        <BotonCalc text="=" color="#ff9427" />
      </View>
    </View>
  );
};
