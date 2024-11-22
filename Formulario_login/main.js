
 
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAuth ,GoogleAuthProvider ,signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
  
  // Configuración de Firebase
  const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';

const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function(){
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log(user);

        // Redirigir a la página de inicio
        window.location.href = "index.html";
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
});

// Mostrar el toast después de la autenticación exitosa
window.addEventListener('load', () => {
    if (window.location.pathname === '/index.html') {
        const toast = new bootstrap.Toast(document.getElementById('login-toast'));
        toast.show();
    }
});