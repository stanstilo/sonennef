import React from 'react'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import CustomButton from '../CustomButton/CustomButton'
import FormInput from '../FormInput/FormInput'
import './signup.styles.scss'


export default class SignUp extends React.Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword:''
    }

    handleSubmit = async(event) => {
     event.preventDefault()
     const {displayName, email, password, confirmPassword} = this.state
     if (password !== confirmPassword){
        alert ("passwords don't match")
        return;
      }
      try{
        const { user } = await auth.createUserWithEmailAndPassword(email, password) 
      }catch(error){

      }
    }
    
  
    render(){
      const {displayName, email, password, confirmPassword} = this.state
    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form>
                <FormInput
                 type='email'
                 name='email'
                 value={email}
                 onChange={this.handleChange}
                 label = 'Email'
                 required
                 />
                <FormInput
                 type='password'
                 name='password'
                 value={password}
                 onChange={this.handleChange}
                 label = 'Password'
                 required
                 />
                <FormInput
                 type='password'
                 name='confirmPassword'
                 value={confirmPassword}
                 onChange={this.handleChange}
                 label = 'Confirm Password'
                 required
                 />

                <FormInput
                 type='text'
                 name='displayName'
                 value={displayName}
                 onChange={this.handleChange}
                 label = 'display name'
                 required
                 />
                 <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
            
        </div>
    )
}
}
