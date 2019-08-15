import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import firebase from '../../../config/firebase';
import NavigationService from '../../../services/navigation';

export function signUpRequest(data) {
  return _dispatch => {
    const { email, senha, ...rest } = data;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(_user => {
        const user = firebase.auth().currentUser;
        user
          .sendEmailVerification()
          .then(() => {
            firebase
              .firestore()
              .collection('users')
              .doc(user.uid)
              .set({
                email,
                ...rest,
              })
              .then(() => {})
              .catch(error => {
                console.tron.log('Error adding document: ', error);
              });
          })
          .then(() =>
            Alert.alert(
              'Sucesso',
              'Cadastrado com sucesso',
              [
                {
                  text: 'OK',
                  onPress: () => NavigationService.navigate('SignIn'),
                },
              ],
              { cancelable: false }
            )
          );
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            Alert.alert('Aviso', 'Email já em uso');
            break;
          case 'auth/invalid-email':
            Alert.alert('Aviso', 'Email inválido');
            break;
          case 'auth/operation-not-allowed':
            Alert.alert('Aviso', 'Tente novamente mais tarde');
            break;
          case 'auth/weak-password':
            Alert.alert('Aviso', 'Digite uma senha melhor');
            break;
          default:
            Alert.alert(
              'Aviso',
              'No momento não é possível realizar essa operação'
            );
            break;
        }
      });
  };
}
