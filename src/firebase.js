import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCmhSDP1UDbUyz61DxLk4GRUuhMp-Ihl34',
  authDomain: 'bibliophile-670f6.firebaseapp.com',
  projectId: 'bibliophile-670f6',
  storageBucket: 'bibliophile-670f6.appspot.com',
  messagingSenderId: '393771134751',
  appId: '1:393771134751:web:8937f2496760e768690a2a',
  measurementId: 'G-WEZ2BV50X6'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth };
