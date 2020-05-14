import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email : "",
            password: ""
        }
    }

    HandleSubmit = (event) => {
        event.preventDefault();
        this.setState({email: "", password: ""})
    }

    HandleChange = (event) => {
        const {name, value} = event.target 
        this.setState({[name]: value})
    }

    render(){

        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span> Sign in using email and password</span>
                
                <form onSubmit={this.HandleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        HandleChange={this.HandleChange} 
                        value={this.state.email} 
                        label="Email" 
                        required
                        />
                    
                    <FormInput 
                        name="password" 
                        type="password" 
                        HandleChange={this.HandleChange} 
                        value={this.state.password} 
                        label="Password" 
                        required
                        />
                    
                    <div className='buttons'>
                        <CustomButton type="submit" > Sign In </CustomButton>
                        <CustomButton onClick =  {signInWithGoogle} isGoogleButton > Sign In with Google </CustomButton>
                    </div>
                </form>

            </div>
        )
    }
}

export default SignIn;