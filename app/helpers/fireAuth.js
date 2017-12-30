import {ref, firebaseAuth} from '../config/constants'


export function fireAuthLogout(){
    return firebaseAuth().signOut()
}

export function fireAuth(email, pass){
    return firebaseAuth().signInWithEmailAndPassword(email,pass)
}

export function newFireAuth(email,pass){
    return firebaseAuth().createUserWithEmailAndPassword(email, pass)
}
