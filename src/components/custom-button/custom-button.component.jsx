import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleButton, ...othersProps}) => {
    return(
        <button className={`${isGoogleButton? 'google-sign-in' : ''} custom-button`} {...othersProps}>
            {children}
        </button>
    )
}

export default CustomButton;