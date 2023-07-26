import{initializeApp} from 'firebase/app';
import{getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCHbhh_zVUKKMsX1APa7Bq8pN0bgSmmsZ8",
    authDomain: "crown-clothing-e91ab.firebaseapp.com",
    projectId: "crown-clothing-e91ab",
    storageBucket: "crown-clothing-e91ab.appspot.com",
    messagingSenderId: "1009538098341",
    appId: "1:1009538098341:web:91a93f73207536da67194c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const provider= new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:'select_account'
  });
  export const auth= getAuth();
  export const SigninWithGooglePopup = () => signInWithPopup(auth,provider);