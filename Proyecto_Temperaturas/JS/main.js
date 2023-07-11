// Sign-up
// const signupForm = document.querySelector('#signup-form');
// signupForm.addEventListener('submit',(e)=>{
// e.preventDefault();
// const email = document.querySelector('#email').value;
// const pass = document.querySelector('#password').value;
// // alert("Se ha registrado")
// auth
//  .createUserWithEmailAndPassword(email,pass)
//  .then(userCredential =>{
//     signupForm.reset();
//     console.log('sign up')
//  })
// })
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js"
import { auth, app } from "./firebase.js";
import './signInForm.js'



// View Password
let password = document.getElementById('password');
let viewPassword = document.getElementById('view');
let click = false;
viewPassword.addEventListener('click', (e)=>{
    if(!click){
        password.type = 'text'  
        document.getElementById('view1').className = 'bi bi-eye-fill'
        click = true
    }else if(click){
        password.type = 'password'
        document.getElementById('view1').className = 'bi bi-eye-slash-fill'
        click = false
    }
});