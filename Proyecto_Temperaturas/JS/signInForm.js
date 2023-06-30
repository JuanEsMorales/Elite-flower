import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'

const signInForm = document.querySelector('#signup-form')

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = signInForm['email'].value
    const pass = signInForm['password'].value;


    try {
        const credentials = await signInWithEmailAndPassword(auth, email, pass)
        console.log(credentials)
        
        signInForm.reset();
        location.replace("vehiculos.html")
        
        showMessage('Welcome '+ credentials.user.email, "success")

    } catch (error) {
        if (error.code === "auth/wrong-password") {
            showMessage('Wrong password', "error")
        } else if (error.code === "auth/user-not-found"){
            showMessage('User not found', "error")
        } else{
            showMessage(error.message, "error")
        }
    }
     
 
})
