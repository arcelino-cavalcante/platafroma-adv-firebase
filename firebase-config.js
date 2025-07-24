
// Cole aqui as configurações do seu projeto Firebase
// Vá em Project Settings > General > Your apps > SDK setup and configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlQ82VwKC5DWScw0DmMOfoG8B5OHc9v1w",
  authDomain: "banco-de-dados-adv.firebaseapp.com",
  projectId: "banco-de-dados-adv",
  storageBucket: "banco-de-dados-adv.firebasestorage.app",
  messagingSenderId: "948017779164",
  appId: "1:948017779164:web:fd97b016849af7eb337f19"
};
// Inicializa o Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();