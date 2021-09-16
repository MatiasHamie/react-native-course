import {useRef, useState} from 'react';

enum Operadores {
  suma,
  resta,
  multiplicar,
  dividir,
}

export const useCalculator = () => {
  const [number, setNumber] = useState<string>('0');
  const [prevNumber, setPrevNumber] = useState<string>('0');

  // esto lo hago porque cuando se mueve el number al prevNumber
  // al haber cambios de estado, se re-renderiza, y perdemos cual es la ultima
  // operacion q se pidio hacer, por ej, apreto el 2, MAS+, 2 y perdi el mas
  const lastOperation = useRef<Operadores>();

  const reset = () => {
    setNumber('0');
    setPrevNumber('0');
  };

  const buildNumber = (pressedButtonText: string) => {
    // No acepto doble punto
    if (number.includes('.') && pressedButtonText === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      // punto decimal
      if (pressedButtonText === '.') {
        setNumber(number + pressedButtonText);
        // evaluar si es otro cero y ya hay un punto
      } else if (pressedButtonText === '0' && number.includes('.')) {
        setNumber(number + pressedButtonText);
        // evaluar si es diferente de cero y no tiene un punto
      } else if (pressedButtonText !== '0' && !number.includes('.')) {
        setNumber(pressedButtonText);
        // evitar el 0000.0
      } else if (pressedButtonText === '0' && !number.includes('.')) {
        setNumber(number);
      }
    } else {
      setNumber(number + pressedButtonText);
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const btnDelete = () => {
    let negative = '';
    let auxNumber = number;

    // elimino el signo menos del numero
    if (number.includes('-')) {
      negative = '-';
      // le quito el primer elemento
      auxNumber = number.substr(1);
    }

    if (auxNumber.length > 1) {
      // esto quita el ultimo elemento
      setNumber(negative + auxNumber.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const changeNumberToPrevious = () => {
    // si toco una tecla de operador (+,-./,*)
    // pongo en cero el valor actual q estoy modificando
    // y pongo en el renglon mas clarito de arriba el numero q estaba puesto
    if (number.endsWith('.')) {
      // si hay un numero 12312312. (con un punto al final)
      // y toco un operador, subo el numero pero le saco el ultimo
      // item q es el punto, asi me queda el numero solo
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };

  const btnDivide = () => {
    changeNumberToPrevious();
    lastOperation.current = Operadores.dividir;
  };
  const btnMultiply = () => {
    changeNumberToPrevious();
    lastOperation.current = Operadores.multiplicar;
  };
  const btnSubstract = () => {
    changeNumberToPrevious();
    lastOperation.current = Operadores.resta;
  };
  const btnSum = () => {
    changeNumberToPrevious();
    lastOperation.current = Operadores.suma;
  };

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(prevNumber);

    switch (lastOperation.current) {
      case Operadores.suma:
        setNumber(`${num1 + num2}`);
        break;
      case Operadores.resta:
        setNumber(`${num2 - num1}`);
        break;
      case Operadores.dividir:
        setNumber(`${num2 / num1}`);
        break;
      case Operadores.multiplicar:
        setNumber(`${num1 * num2}`);
        break;

      default:
        break;
    }

    setPrevNumber('0');
  };

  return {
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
  };
};
