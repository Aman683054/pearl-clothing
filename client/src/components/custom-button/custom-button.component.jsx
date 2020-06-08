import React from 'react';
import './custom-button.styles.scss';
import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({children,  ...othersProps}) => {
    return(
        <CustomButtonContainer {...othersProps}>
            {children}
        </CustomButtonContainer>
    )
}

export default CustomButton;