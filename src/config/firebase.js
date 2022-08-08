import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDnCXMnVcwoJE_yBu2gn0OtbWyBvxa1j9Q',
  authDomain: 'e-commerce-174fa.firebaseapp.com',
  projectId: 'e-commerce-174fa',
  storageBucket: 'e-commerce-174fa.appspot.com',
  messagingSenderId: '940201431236',
  appId: '1:940201431236:web:07126f2db58528afd0b991',
  measurementId: 'G-E95R1K2RJV',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const authenticate = firebase.auth();

export { db, authenticate };
