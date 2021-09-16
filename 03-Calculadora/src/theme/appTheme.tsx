import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  calculadoraScreenContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  result: {
    fontSize: 60,
    color: '#fff',
    textAlign: 'right',
    marginBottom: 10,
  },
  resultSmall: {
    fontSize: 30,
    color: '#ffffff7f',
    textAlign: 'right',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
