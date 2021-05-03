import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyDCZZm-6IgPCn0h1YHSfcrRtVPk4aR6svM",
//   authDomain: "campsite-311606.firebaseapp.com",
//   projectId: "campsite-311606",
//   storageBucket: "campsite-311606.appspot.com",
//   messagingSenderId: "484629503196",
//   appId: "1:484629503196:web:53f93fbdb2a83c83d9a819",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBpkIfVaVj99oTq0lxF8rpdagf_JNRYVI4",
  authDomain: "campsite-7994b.firebaseapp.com",
  projectId: "campsite-7994b",
  storageBucket: "campsite-7994b.appspot.com",
  messagingSenderId: "996506205747",
  appId: "1:996506205747:web:0f0f04307acf6efc8c6d46",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
