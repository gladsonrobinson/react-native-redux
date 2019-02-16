import firebase from '@firebase/app';
require('firebase/auth');
require('firebase/database');


const config = {
    apiKey: "AIzaSyAx6cxd8WLBTFelG8fSyNsNwohzIRpcet8",
    authDomain: "deepsky-638cd.firebaseapp.com",
    databaseURL: "https://deepsky-638cd.firebaseio.com",
    projectId: "deepsky-638cd",
    storageBucket: "deepsky-638cd.appspot.com",
    messagingSenderId: "872050511648"
};

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();

export const database = firebase.database();


export const signInAnonymously = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        resolve(user)
      } else {
        firebase.auth().signInAnonymously().catch(error => {
          reject()
        })
      }
    })
  })
}

export const googleSignIn = () => {
  return firebase.auth().signInWithPopup(provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    AsyncStorage.setItem(token);
    // The signed-in user info.
    var user = result.user;

    console.log('am resultt')
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}



 