import {SigninWithGooglePopup,createUserDocumentFromAuth} from '../../utils/firebase/firebase.util';

const SignIn = () =>{
    const logGoogleUser= async () =>{
     const {user}= await SigninWithGooglePopup();
     const userDocRef = await createUserDocumentFromAuth(user);
    }
return(
    <div className="Signin">
        <h1>sign in</h1>
      <button onClick={logGoogleUser}>
        sign in with google acount
      </button>
    </div>
)
}
export default SignIn;