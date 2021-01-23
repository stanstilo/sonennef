import React from 'react'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'
import './sign-in-and-sign-up.styles.scss'

export default function SignInAndSignUpPage () {
    return (
        <div className = 'sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
        </div>
    )
}
