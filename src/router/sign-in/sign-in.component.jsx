import {SigninWithGooglePopup,createUserDocumentFromAuth} from '../../utils/firebase/firebase.util';
import SignUpForm from '../../component/sign-up-form/sign-up-form.component';
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
      <SignUpForm/>
    </div>
)
}
export default SignIn;