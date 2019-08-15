import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBGEoTh7RHlHSiTeNNv5oPxqSozjnSUhXA',
  authDomain: 'manejo-desidratacao.firebaseapp.com',
  databaseURL: 'https://manejo-desidratacao.firebaseio.com',
  projectId: 'manejo-desidratacao',
  storageBucket: '',
  messagingSenderId: '437732270386',
  appId: '1:437732270386:web:5817a17925526bf1',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
