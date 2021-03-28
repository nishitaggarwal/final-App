import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: 'AIzaSyC9UhV3VwNGksxM821JDe9g73ZfUO5j_JI',
  authDomain: 'complaint-app-e8f4c.firebaseapp.com',
  projectId: 'complaint-app-e8f4c',
  storageBucket: 'complaint-app-e8f4c.appspot.com',
  messagingSenderId: '468368201828',
  appId: '1:468368201828:web:40480cbe339f12dd55a771',
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
