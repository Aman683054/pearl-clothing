import React,{useState} from 'react';
import './sign-up.styles.scss'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const SignUp = () => {
     const [getRegisterationDetails, setRegistrationDetails] = useState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    
    const {displayName, email, password, confirmPassword} = getRegisterationDetails;

    const handleSubmit = async event => {
        event.preventDefault();
        

        if(password!== confirmPassword){
            alert("password doesn't match");
            return
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, {displayName})

            setRegistrationDetails({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })


        }catch(error){
            console.error();
        }
    }

    const handleChange = event => {
        const {name, value} = event.target;
        setRegistrationDetails({ 
            ...getRegisterationDetails,
            [name]: value
        })
    }

    
        
    return(
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span> Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput 
                name= "displayName"
                value={displayName}
                type="text"
                onChange= {handleChange}
                label="Display Name"
                required
                />
                <FormInput 
                name= "email"
                value={email}
                type="email"
                onChange= {handleChange}
                label="Email"
                required
                />
                <FormInput
                name= "password"
                value={password}
                type="password"
                onChange= {handleChange}
                label="Password"
                required
                />
                <FormInput 
                name= "confirmPassword"
                value={confirmPassword}
                type="password"
                onChange= {handleChange}
                label="Confirm Password"
                required
                />

                <CustomButton type="submit">Sign Up </CustomButton>
            </form>

        </div>           
    )
    
}


export default SignUp;