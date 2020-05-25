import React from 'react';
import StripeCheckout from 'react-stripe-checkout';



const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_ox9gA7sq9ezE8K4RI8WzMMEV006kuSIM5r';

    const token = (token) => {
        console.log(token);
        alert("Your payment is successful")
    }

    return(
        <StripeCheckout
            label="Pay Now"
            name= "Peal Clothing Ltd"
            billingAddress
            shippingAddress
            image= "https://svgshare.com/i/CUz.svg"
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={token}
            stripeKey={publishableKey}

        />
    )
}



export default StripeCheckoutButton