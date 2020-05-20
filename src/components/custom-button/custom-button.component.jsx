import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleButton, inverted, ...othersProps}) => {
    return(
        <button className={`${inverted? 'inverted' : ''} ${isGoogleButton? 'google-sign-in' : ''} custom-button`} {...othersProps}>
            {children}
        </button>
    )
}

export default CustomButton;