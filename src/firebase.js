import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_DOMINIO.firebaseapp.com",
  projectId: "tu-proyecto-id",
  storageBucket: "tu-proyecto-id.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcd1234"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
