import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6zuZs53Djye_UgpJuAsONahLcY5rFxOo",
  authDomain: "devenv-9016f.firebaseapp.com",
  projectId: "devenv-9016f",
  storageBucket: "devenv-9016f.appspot.com",
  messagingSenderId: "36199640329",
  appId: "1:36199640329:web:f6897c8f030168de4077d8",
  measurementId: "G-VXV8E52SED"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);

export const firestore = getFirestore(app);

export const auth = getAuth(app);