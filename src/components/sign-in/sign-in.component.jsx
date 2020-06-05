import React, {useState} from 'react';
import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {signInWithGoogle, auth} from '../../firebase/firebase.utils';

const SignIn = () => {

    const [getCrendentials, setCredentials] = useState({email: '',password:''});
    
    const {email, password} = getCrendentials;
    const HandleSubmit = async (event) => {
        event.preventDefault();
        

        try{
            await auth.signInWithEmailAndPassword(email, password);
            setCredentials({email: '',password:''});
        }catch(error){
            console.log(error);
        }
        
    }

    const HandleChange = (event) => {
        const {name, value} = event.target 
        setCredentials({...getCrendentials,[name]: value})
    }

    

    return(
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span> Sign in using email and password</span>
            
            <form onSubmit={HandleSubmit}>
                <FormInput 
                    name="email" 
                    type="email" 
                    HandleChange={HandleChange} 
                    value={email}
                    label="Email" 
                    required
                    />
                
                <FormInput 
                    name="password" 
                    type="password" 
                    HandleChange={HandleChange} 
                    value={password} 
                    label="Password" 
                    required
                    />
                
                <div className='buttons'>
                    <CustomButton type="submit" > Sign In </CustomButton>
                    <CustomButton onClick =  {signInWithGoogle} isGoogleButton >Google SIGN IN</CustomButton>
                </div>
            </form>

        </div>
    )
    
}

export default SignIn;