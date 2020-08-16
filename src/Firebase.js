import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyDIShC5uFop-1JQjSnoqoJI7vC1laqDq0A',
    authDomain: 'clone-react-162fc.firebaseapp.com',
    databaseURL: 'https://clone-react-162fc.firebaseio.com',
    projectId: 'clone-react-162fc',
    storageBucket: 'clone-react-162fc.appspot.com',
    messagingSenderId: '607465298070',
    appId: '1:607465298070:web:c976497fe090674eac0ab7',
    measurementId: 'G-6VPV57E4X4',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth,db };
