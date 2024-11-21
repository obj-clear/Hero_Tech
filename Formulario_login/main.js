
 
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAuth ,GoogleAuthProvider ,signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyAsBcvgdrqFM9dCS4NytDKjdYSwK_gqaGE",
    authDomain: "login-8ff6e.firebaseapp.com",
    projectId: "login-8ff6e",
    storageBucket: "login-8ff6e.firebasestorage.app",
    messagingSenderId: "46000541427",
    appId: "1:46000541427:web:87846aa32c6932168ef186"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languagecode = 'en';

const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log(user);

            // Redirige al index con el parámetro de autenticación exitosa
            window.location.href = "../index.html?auth=success";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error en la autenticación:", errorMessage);
        });
});

// Detectar redirección tras autenticación exitosa
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("auth") === "success") {
        const toastElement = document.getElementById("authToast");
        const toast = new bootstrap.Toast(toastElement, { delay: 2000 }); // Configura 2 segundos
        toast.show();
    }
});
