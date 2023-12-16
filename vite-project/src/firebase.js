import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBErSiTD934XByQIYCWlAjTkt928uvy6p4",
    authDomain: "cerezasweet-8a7ae.firebaseapp.com",
    projectId: "cerezasweet-8a7ae",
    storageBucket: "cerezasweet-8a7ae.appspot.com",
    messagingSenderId: "307412157086",
    appId: "1:307412157086:web:490a1b57110fc27e12718f"
  };

  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);
  
  export { app, firestore, storage };