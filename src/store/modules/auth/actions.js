import { Alert } from 'react-native';
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

export const signInRequest = (email, senha) => {
  return dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then(() => {
        const { uid, emailVerified } = firebase.auth().currentUser;
        if (emailVerified) {
          dispatch({
            type: '@auth/AlterarUid',
            payload: {
              uid,
            },
          });
        } else {
          Alert.alert('Aviso', 'Realize a confirmação de email.');
        }
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/invalid-email':
            Alert.alert('Aviso', 'Email inválido');
            break;
          case 'auth/user-disabled':
            Alert.alert('Aviso', 'Usuário desativado');
            break;
          case 'auth/user-not-found':
            Alert.alert('Aviso', 'Usuário não existe');
            break;
          case 'auth/wrong-password':
            Alert.alert('Aviso', 'Email e/ou senha errados!!!');
            break;
          default:
            Alert.alert('Aviso', 'Erro ao tentar realizar o Login');
            break;
        }
      });
  };
};

export const checkLogin = () => {
  return dispatch => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch({
          type: '@auth/AlterarUid',
          payload: {
            uid: user.uid,
          },
        });
      }
    });
  };
};
