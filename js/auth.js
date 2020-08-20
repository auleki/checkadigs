window.addEventListener('DOMContentLoaded', () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBzgcUPNr4tRjYzEoMAt7-gWw7biMpPyuA",
    authDomain: "friendlychat-98a09.firebaseapp.com",
    databaseURL: "https://friendlychat-98a09.firebaseio.com",
    projectId: "friendlychat-98a09",
    storageBucket: "friendlychat-98a09.appspot.com",
    messagingSenderId: "192068125362",
    appId: "1:192068125362:web:6f857a91ec3609b67abfab",
    measurementId: "G-JN5EGLDJRT"
}

firebase.initializeApp(firebaseConfig);


const signInBtn = document.getElementById("signIn");

function signIn() {
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
  // alert("Time")
}

signInBtn.addEventListener("click", signIn);
})


