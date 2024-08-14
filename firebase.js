import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyC8_u_S-lKWrlRS_MHCnP2whAD8NGFc75c",
  authDomain: "carrot-clone-6f987.firebaseapp.com",
  databaseURL:
    "https://carrot-clone-6f987-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "carrot-clone-6f987",
  storageBucket: "carrot-clone-6f987.appspot.com",
  messagingSenderId: "168978113538",
  appId: "1:168978113538:web:7ad9f924e8a06d15de331b",
  measurementId: "G-035CBC23ZW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);
