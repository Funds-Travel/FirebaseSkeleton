import * as firebase from 'firebase';  

const config = {
    apiKey: "AIzaSyArNbz75gAPM4Trmh5lx3yCgX297XUFpMk",
    authDomain: "test-72186.firebaseapp.com",
    databaseURL: "https://test-72186.firebaseio.com",
    projectId: "test-72186",
    storageBucket: "",
    messagingSenderId: "685055038851"
  };
export const firebaseApp = firebase.initializeApp(config);