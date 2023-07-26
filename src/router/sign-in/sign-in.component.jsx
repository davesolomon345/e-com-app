import {SigninWithGooglePopup} from '../../utils/firebase/firebase.util';

const SignIn = () =>{
    const logGoogleUser= async () =>{
     const response= await SigninWithGooglePopup();
     console.log(response);
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