import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyA6APIkamiXRSp964IkA9wTxiW1IYmAKZY",
    authDomain: "linkedin-clone-411f9.firebaseapp.com",
    projectId: "linkedin-clone-411f9",
    storageBucket: "linkedin-clone-411f9.appspot.com",
    messagingSenderId: "30393146393",
    appId: "1:30393146393:web:c832fd1211466d226a1e88"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};