import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBRfIv7niBKEoD0EkukjZO0ryDPwXkprkQ",
  authDomain: "chat-app-306ef.firebaseapp.com",
  projectId: "chat-app-306ef",
  storageBucket: "chat-app-306ef.appspot.com",
  messagingSenderId: "518876827162",
  appId: "1:518876827162:web:04621a35a1a888e2d7cba3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
