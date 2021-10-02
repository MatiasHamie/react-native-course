import React from 'react';
import {Alert, Button, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/AppTheme';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Titulo',
      'Mensaje de la alerta',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive', // esto le da el color Rojo al texto (SOLO EN IOS)
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
        //   {text: 'OK', onPress: () => console.log('OK Pressed')}, asi se agregan N botones
      ],
      //    esto hace que no haga falta tocar en el boton cancelar para cerrar el modal
      //    tocas en otro lado y lo cierra (SOLO EN ANDROID)
      //   {
      //     cancelable: true,
      //     onDismiss: () => console.log('onDismiss'),
      //   },
    );
  };

  // SOLO FUNCIONA EN IOS, si se quiere un prompt para android se tiene q usar
  // algun paquete de terceros
  // Consejo: Usar modal para los dos S.O. y listo
  const showPrompt = () => {
    Alert.prompt(
      'Titulo',
      'cuerpo del prompt',
      (value: string) => console.log('info ingresada: ', value),
      //'plain-text' o
      // 'secure-text' es para passwords, o
      //'login-password',  te muestra directamente un prompt con dos inputs y te
      // devuelve un {login: "", password: ""}
      //'Hola mundo',  si queres q ya haya un texto ingresado de antemano
      //'number-pad',  el tipo de teclado q quiero q hablar por defecto
    );
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Mostrar Alerta" onPress={showAlert} />
      <View style={{height: 10}} />
      <Button title="Mostrar Prompt" onPress={showPrompt} />
    </View>
  );
};
