import { useState } from "react";
import FormInput from "../form-input/form-input.component";

import "./sign-up-form.style.scss";

import { createUserDocumentFromAuth ,createAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.util";
const defaultSignUpForm={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUpForm = () =>{
   const [formFields,setFormField] = useState(defaultSignUpForm);
   const {displayName,email,password,confirmPassword} = formFields;
    
   console.log(formFields);

   const resetFormFields= () =>{
    setFormField(defaultSignUpForm);     //it cleans our input screen
   }

   //its a hanler that changes onsubmit func
   const handleSubmit = async (event) =>{
     event.preventDefault();

    if(password !== confirmPassword){
        alert('password does not much');
        return;
    }
    try{
      const {user}= await createAuthUserWithEmailAndPassword(
        email,
        password);

    await createUserDocumentFromAuth(user,{displayName})
    resetFormFields();

    }catch(error){
        if(error.code === 'auth/email-already-in-use'){
            alert('can not create user,email already have an account');
        }
    else{
        console.log('user creation encountered an error!',error)
    }
    };
   }

   const handleChange = (event) =>{
    const {name,value}=  event.target;
    setFormField({...formFields, [name]:value });
   }

   return(
   <div className="sign-up-container">
        
        <h2>I dont have an account</h2>
        <span>

            sign-up here with your email and password
        </span>
        <form onSubmit={handleSubmit}>

           <FormInput 
           label='Display Name'
           type="text" required 
           onChange={handleChange}
           name="displayName"
           value={displayName}
           />
           
           <FormInput 
           label='Email'
           type="email" required 
            onChange={handleChange}
            name="email"
            value={email}
            />
          
           <FormInput
           label='Password'
           type="password" required 
            onChange={handleChange}
            name="password"
            value={password}
            />
          
           <FormInput 
           label="Confirm Password"
           type="password" required 
           onChange={handleChange}
           name="confirmPassword"
           value={confirmPassword}
           />

           <button type="submit">
            Submit
            </button>
        </form>
    </div>
   )
}
export default SignUpForm;