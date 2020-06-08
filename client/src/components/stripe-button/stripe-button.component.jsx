import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';



const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_ox9gA7sq9ezE8K4RI8WzMMEV006kuSIM5r';

    const token = (token) => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount : priceForStripe,
                token
            }
        }).then(response => {
            alert("Payment successful")
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert(" There was an issue with your payment. Please make sure to use the provided test credit card")
        })
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