

//firebase configure Key setup

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { initializeApp } from 'firebase/app';
import { auth, firestore } from '../Firebase/Config';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//your app firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCr55gr-kKCHLR520M5evma5Fne5_vANhc",
    authDomain: "netflix-app-clone-e5665.firebaseapp.com",
    projectId: "netflix-app-clone-e5665",
    storageBucket: "netflix-app-clone-e5665.appspot.com",
    messagingSenderId: "221095573400",
    appId: "1:221095573400:web:a61e19d267d7fb81c0dded",
    measurementId: "G-4YHQCD6374"
}

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// export default firebaseApp;