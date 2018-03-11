import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAn1admgeW3d4lMdVDaLTbCuRHShk4ZLBY',
  authDomain: 'awesome-marvel.firebaseapp.com',
  databaseURL: 'https://awesome-marvel.firebaseio.com',
  projectId: 'awesome-marvel',
  storageBucket: '',
  messagingSenderId: '852922675456',
};

const app = firebase.initializeApp(config);

export default app;
