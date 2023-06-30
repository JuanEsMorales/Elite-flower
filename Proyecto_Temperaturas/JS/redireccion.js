import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js"
import { auth } from "./firebase.js";
import './signInForm.js'

let nuevaURL = 'C:/Users/RENTADVISOR/Desktop/Elite flower/Proyecto_Temperaturas/vehiculos.html'; // La URL de destino.
let espera   =  0; // La espera en segundos antes de ejecurtar la redirección.

function paginaCargaCompleta(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
};
onAuthStateChanged(auth, async (user) => {
    if (user) {
        paginaCargaCompleta( function(){
              espera = parseInt(espera);
            setTimeout('location.href="'+nuevaURL+'"', espera*1000);
        } );
     
   } else {
       
   }
})

