import * as firebaseLib from 'firebase';
import firebase from './firebase';

const register = async data => {
  const { email, password } = data;
  await firebase.auth().setPersistence(firebaseLib.auth.Auth.Persistence.LOCAL);
  await firebase.auth().createUserWithEmailAndPassword(email, password);
};

const login = async data => {
  const { email, password } = data;
  await firebase.auth().setPersistence(firebaseLib.auth.Auth.Persistence.LOCAL);
  await firebase.auth().signInWithEmailAndPassword(email, password);
};

const logout = async () => {
  await firebase.auth().signOut();
};

export { register, login, logout };
