import firebase from 'firebase'

var config = {
    apiKey: "#################",
    authDomain: "#################.firebaseapp.com",
    databaseURL: "https://#################.firebaseio.com",
    projectId: "#################",
    storageBucket: "#################.appspot.com",
    messagingSenderId: "#################"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
