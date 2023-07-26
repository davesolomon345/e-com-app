import{initializeApp} from 'firebase/app';
import{getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import{
getFirestore,
doc,
getDoc ,
setDoc,
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCHbhh_zVUKKMsX1APa7Bq8pN0bgSmmsZ8",
    authDomain: "crown-clothing-e91ab.firebaseapp.com",
    projectId: "crown-clothing-e91ab",
    storageBucket: "crown-clothing-e91ab.appspot.com",
    messagingSenderId: "1009538098341",
    appId: "1:1009538098341:web:91a93f73207536da67194c"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider= new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:'select_account'
  });
  export const auth= getAuth();
  export const SigninWithGooglePopup = () => signInWithPopup(auth,provider);

  export const db = getFirestore();
 export const createUserDocumentFromAuth= async (userAuth)=>{
  const userDocRef= doc(db,'user',userAuth.uid)
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot,userSnapshot.exists());

  if(!userSnapshot.exists())
  {
    const {displayName,email}=userAuth;
    const createdAt=new Date();
    try{
      await setDoc(userDocRef,
       { displayName,
        email,
        createdAt});
    }
    catch(error){
        console.log('error creating the user',error.message);
    }
  }
  return userDocRef;
 } 