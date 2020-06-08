import React from 'react';
import {connect} from "react-redux";

import {selectCartItems,selectCartItemsTotalPrice} from "../../redux/cart/cart.selector";

import CheckOutItem from "../checkout-item/checkout-item.component";
import StripeCheckoutButton from  '../stripe-button/stripe-button.component';
import "./checkout.styles.scss"

const CheckOutPage = ({totalQuantity, cartItems}) => {
    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Total</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((cartItem) => (
                    <CheckOutItem key={cartItem.id} item={cartItem} />
                )
                ) 
            }
            <div className="total">
                <span>TOTAL: ${totalQuantity}</span>
            </div>
            <div className="test-warning">
                * Please use below test credit card for payment testing*
                <br />
                4242 4242 4242 4242 - Expiry: any future date - CVV: 123
            </div>
            <StripeCheckoutButton price={totalQuantity} />

        </div>

    )
}

const mapStateToProps = state => ({
    totalQuantity : selectCartItemsTotalPrice(state),
    cartItems: selectCartItems(state)
})
export default connect(mapStateToProps, null)(CheckOutPage);