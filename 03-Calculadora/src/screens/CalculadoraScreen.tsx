import React from 'react';
import {Text, View} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';
import {useCalculator} from '../hooks/useCalculator';
import {styles} from '../theme/appTheme';

export const CalculadoraScreen = () => {
  const {
    number,
    prevNumber,
    calculate,
    buildNumber,
    btnDelete,
    btnDivide,
    btnMultiply,
    btnSubstract,
    btnSum,
    positiveNegative,
    reset,
  } = useCalculator();

  return (
    <View style={styles.calculadoraScreenContainer}>
      {prevNumber !== '0' && (
        <Text style={styles.resultSmall}>{prevNumber}</Text>
      )}

      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc text="C" color="#9b9b9b" action={reset} />
        <BotonCalc text="+/-" color="#9b9b9b" action={positiveNegative} />
        <BotonCalc text="del" color="#9b9b9b" action={btnDelete} />
        <BotonCalc text="/" color="#ff9427" action={btnDivide} />
      </View>
      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc text="7" color="" action={buildNumber} />
        <BotonCalc text="8" color="" action={buildNumber} />
        <BotonCalc text="9" color="" action={buildNumber} />
        <BotonCalc text="*" color="#ff9427" action={btnMultiply} />
      </View>
      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc text="4" color="" action={buildNumber} />
        <BotonCalc text="5" color="" action={buildNumber} />
        <BotonCalc text="6" color="" action={buildNumber} />
        <BotonCalc text="-" color="#ff9427" action={btnSubstract} />
      </View>
      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc text="1" color="" action={buildNumber} />
        <BotonCalc text="2" color="" action={buildNumber} />
        <BotonCalc text="3" color="" action={buildNumber} />
        <BotonCalc text="+" color="#ff9427" action={btnSum} />
      </View>
      {/* Fila de botones */}
      <View style={styles.fila}>
        {/* wide={true} es igual a poner solo wide */}
        <BotonCalc text="0" color="" wide action={buildNumber} />
        <BotonCalc text="." color="" action={buildNumber} />
        <BotonCalc text="=" color="#ff9427" action={calculate} />
      </View>
    </View>
  );
};
