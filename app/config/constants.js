import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAxRb6DNbUWSql5Vm87QQE59z3YoO5e2Mw",
    authDomain: "central-a5110.firebaseapp.com",
    databaseURL: "https://central-a5110.firebaseio.com",
    projectId: "central-a5110",
    storageBucket: "",
    messagingSenderId: "431970891773"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
