import React from 'react';
import {connect} from 'react-redux';

import {ReactComponent as ShoppingIcon} from '../../asset/shopping-bag.svg';
import {toggleCartHidden} from '../../redux/cart/cart.action';
import {selectCartItemsCount} from '../../redux/cart/cart.selector';

import './cart-icon.styles.scss';


const CartIcon = ({toggleCartHidden, itemCount}) => {
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count" >{itemCount}</span>
        
        </div>
    )
}

const maptStateToProps = state => ({
    itemCount : selectCartItemsCount(state)
   
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(maptStateToProps, mapDispatchToProps)(CartIcon);