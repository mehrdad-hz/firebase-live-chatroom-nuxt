import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_IDSEzEjXeClsFJb4QX5J1Fm7j4Fsu8s",
  authDomain: "vue-test-524fd.firebaseapp.com",
  projectId: "vue-test-524fd",
  storageBucket: "vue-test-524fd.appspot.com",
  messagingSenderId: "208262559363",
  appId: "1:208262559363:web:56336020f0aa74d5414db6",
};

firebase.initializeApp(firebaseConfig);

const ProjectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp, ProjectAuth };
