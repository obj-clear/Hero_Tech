
 
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
auth.languageCode = 'en';

const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function(){
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log(user);
        
        // Guardamos el estado de autenticación exitosa en sessionStorage
        sessionStorage.setItem('authSuccess', 'true');
        
        // Redirigir a index.html
        window.location.href = "../index.html";
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
    });
});