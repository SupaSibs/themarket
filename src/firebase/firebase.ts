// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuXGywmIo93iyWOdpHt7Y9UOeVpA7Q-a0",
  authDomain: "marketplace-f5bf6.firebaseapp.com",
  projectId: "marketplace-f5bf6",
  storageBucket: "marketplace-f5bf6.appspot.com",
  messagingSenderId: "86393370972",
  appId: "1:86393370972:web:f75a96d14dc177182a6999",
  measurementId: "G-QHJD23CGXE"
};


let globalUser: any;


function initObserver() {
  onAuthStateChanged(getAuth(), (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
   globalUser  = user;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
}

//Firebase Signin setup
async function createUser(email: string, password: string) {
  createUserWithEmailAndPassword(getAuth(), email, password)
   .then((userCredential) => {
    // Signed in 
    globalUser = userCredential.user;
    // ...
  })
  .catch((error) => {
  console.error(error)
    // ..
  });
}
function signIn(email: string, password: string) {
  signInWithEmailAndPassword(getAuth(), email, password)
  .then((userCredential) => {
    // Signed in 
    globalUser = userCredential.user;
    // ...
  })
  .catch((error) => {
    console.error(error)
  });

}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Exports
export { initObserver, createUser, signIn }