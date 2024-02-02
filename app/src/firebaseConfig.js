import firebase from "firebase/compat/app";
import 'firebase/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyAK9S-GeqrP7a_e41DvAI_KXni9HTfM5sY",
  authDomain: "hotel-management-project-55099.firebaseapp.com",
  databaseURL: "https://hotel-management-project-55099-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hotel-management-project-55099",
  storageBucket: "hotel-management-project-55099.appspot.com",
  messagingSenderId: "274496093632",
  appId: "1:274496093632:web:ed545432c8ae5fc5b55c25"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export default db;
























// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyAK9S-GeqrP7a_e41DvAI_KXni9HTfM5sY",
//   authDomain: "hotel-management-project-55099.firebaseapp.com",
//   projectId: "hotel-management-project-55099",
//   storageBucket: "hotel-management-project-55099.appspot.com",
//   messagingSenderId: "274496093632",
//   appId: "1:274496093632:web:ed545432c8ae5fc5b55c25"
// };

// const app = initializeApp(firebaseConfig);