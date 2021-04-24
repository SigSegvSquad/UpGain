
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCeMfz94dEYhB0I1oEfruruzD2M9R9Tmwc",
  authDomain: "upgain-3d715.firebaseapp.com",
  projectId: "upgain-3d715",
  storageBucket: "upgain-3d715.appspot.com",
  messagingSenderId: "294818537237",
  appId: "1:294818537237:web:a5934ed08dfebc882c931c",
  measurementId: "G-X9FT8JS67C"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var provider = new firebase.auth.GoogleAuthProvider();