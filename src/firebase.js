// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBuXGywmIo93iyWOdpHt7Y9UOeVpA7Q-a0",
   authDomain: "marketplace-f5bf6.firebaseapp.com",
   projectId: "marketplace-f5bf6",
     storageBucket: "marketplace-f5bf6.appspot.com",
    messagingSenderId: "86393370972",
     appId: "1:86393370972:web:3e89330d2e23f7522a6999",
           measurementId: "G-7T5YT8R6LW"
          };
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
