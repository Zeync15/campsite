import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDCZZm-6IgPCn0h1YHSfcrRtVPk4aR6svM",
  authDomain: "campsite-311606.firebaseapp.com",
  projectId: "campsite-311606",
  storageBucket: "campsite-311606.appspot.com",
  messagingSenderId: "484629503196",
  appId: "1:484629503196:web:53f93fbdb2a83c83d9a819",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
