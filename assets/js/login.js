// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIbTzbt0dlVYOZvPGAVeKdteGkKZbE5-M",
  authDomain: "signupform-dea63.firebaseapp.com",
  databaseURL: "https://signupform-dea63-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "signupform-dea63",
  storageBucket: "signupform-dea63.appspot.com",
  messagingSenderId: "841906113839",
  appId: "1:841906113839:web:3e3e2a96c0a8edf0c7a5da",
  measurementId: "G-WF3M9Y3C64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

const submit = document.getElementById('upbtn');
submit.addEventListener("click",function(event){
    event.preventDefault()
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Logging in.")
    window.location.href = 'about.html';
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})