import firebase from "firebase";

const FirebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBZ6OMCk-r9Fd1GiRaUUN_APp80uqxHKio",
  authDomain: "clone-da36d.firebaseapp.com",
  projectId: "clone-da36d",
  storageBucket: "clone-da36d.appspot.com",
  messagingSenderId: "102622363909",
  appId: "1:102622363909:web:838b9cb397cd27c260b76c",
  measurementId: "G-3NH8BPWH7H",
});
const auth = firebase.auth();

export { auth };
