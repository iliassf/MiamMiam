import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDJHdx-Yxt8YqgGTdSnzUOtx1HASa94bjQ',
  authDomain: 'miammiam-b8b16.firebaseapp.com',
  projectId: 'miammiam-b8b16',
  storageBucket: 'miammiam-b8b16.appspot.com',
  messagingSenderId: '338482899260',
  appId: '1:338482899260:web:7c1bed83fb2f7f323ad639',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
