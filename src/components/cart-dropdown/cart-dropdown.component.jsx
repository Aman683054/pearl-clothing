import React from 'react';
import {withRouter}  from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selector';
import {toggleCartHidden} from "../../redux/cart/cart.action";
import {connect} from 'react-redux';

import './cart-dropdown.styles.scss';

const CartDropDown = ({cartItems, history, dispatch}) => {
    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
            {
                cartItems.length ?
                cartItems.map((item) =>(
                <CartItem key={item.id} item={item} />
                ))
                :
                <span className= "empty-cart-message">There are no items in the cart</span>
            }
            </div>
                <CustomButton onClick={() => {
                    history.push("/checkout");
                    dispatch(toggleCartHidden())
                    }
                }>
                    GO TO CHECKOUT
                </CustomButton>
            

        </div>
    )
}


const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps, null)(CartDropDown));
