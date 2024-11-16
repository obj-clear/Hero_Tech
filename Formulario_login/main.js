
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAuth ,GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
  
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
  auth.languagecode = 'en'

  const provider = new GoogleAuthProvider();
