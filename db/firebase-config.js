import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVVuFbyJ3e4mSoBrI3OixdpVvNjUgjNJE",
  authDomain: "dynasty-test-d0b8b.firebaseapp.com",
  projectId: "dynasty-test-d0b8b",
  storageBucket: "dynasty-test-d0b8b.appspot.com",
  messagingSenderId: "988846199589",
  appId: "1:988846199589:web:8010241d5dbb0985bd00cc"
};

const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
export default db;