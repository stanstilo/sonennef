import React, { Component } from 'react'
import CustomButton from '../CustomButton/CustomButton'
import FormInput from '../FormInput/FormInput'
import './sign-in.styles.scss'


export default class SignIn extends Component {
    state = {
        email:'',
        password:''
    }
    handleSubmit = e => {
        e.preventDefault()
        this.setState({email:'', password:''})
    }
    handleChange = e => {
        const {name, value} = e.target
        this.setState({[name]:value})
    }
    render() {
        return (
            <div className = 'sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit = {this.handleSubmit}>
                    <FormInput name='email' type='email' label='email' value={this.state.email} handleChange={this.handleChange} required/>
                    <FormInput name='password' type='password' label='password' value={this.state.password} handleChange={this.handleChange}required/>
                    <CustomButton type='submit' value='Submit-Form'> Sign In </CustomButton>
                </form>
            </div>
        )
    }
}