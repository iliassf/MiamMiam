export const environment = {
  production: true,
};

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDJHdx-Yxt8YqgGTdSnzUOtx1HASa94bjQ',
  authDomain: 'miammiam-b8b16.firebaseapp.com',
  projectId: 'miammiam-b8b16',
  storageBucket: 'miammiam-b8b16.appspot.com',
  messagingSenderId: '338482899260',
  appId: '1:338482899260:web:7c1bed83fb2f7f323ad639',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
