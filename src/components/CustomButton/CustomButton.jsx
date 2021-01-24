import React from 'react'
import './custom-button.styles.scss'

 const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
    return (
        <div>
            <button className={`${inverted ? 'google-sign-in' : ''} custom-button`} {...otherProps}>{children}</button>
        </div>
    )
}

export default CustomButton