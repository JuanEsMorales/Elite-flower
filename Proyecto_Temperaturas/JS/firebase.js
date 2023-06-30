import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDhB6zuOcBM8fSmRfBH6V_oXARtuFXOduc",
    authDomain: "elite-flower.firebaseapp.com",
    projectId: "elite-flower",
    storageBucket: "elite-flower.appspot.com",
    messagingSenderId: "128100818648",
    appId: "1:128100818648:web:b89ed1188b1af4130941ad",
    measurementId: "G-KR4YGRXGXX"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const analytics = getAnalytics(app);