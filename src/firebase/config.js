import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDmEj8_asGNv5pcNU_5QyFKFSfdN8rI_fU",
  authDomain: "react-native-hw-59ccd.firebaseapp.com",
  projectId: "react-native-hw-59ccd",
  storageBucket: "react-native-hw-59ccd.appspot.com",
  messagingSenderId: "86266451806",
  appId: "1:86266451806:web:d5784ddb119f4cfd74a1cf",
  measurementId: "G-XSEWWX8HYH",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
