import React from 'react';
import {connect} from 'react-redux';

import {clearItem, addItems, removeItem} from "../../redux/cart/cart.action";

import "./checkout-item.styles.scss";

const CheckOutItem = ({item, removeItem, addItem, clearItem}) =>{
    const totalPrice = item.quantity * item.price;
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={item.imageUrl} alt="item" />
            </div>
            <div className="name">
                <span>{item.name}</span>
            </div>
            <div className="quantity">
                <div className="arrow" onClick={() => removeItem(item)}>&#10094;</div>
                <span className="value">{item.quantity}</span>
                <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>

            </div>
            <div className="price">
                <span>{item.price}</span>
            </div>
            <div className="price">
                <span>{totalPrice}</span>
            </div>
            <div className="remove-button" onClick={() => clearItem(item)}>
                <span>&#10006;</span>
            </div>
            

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem : item => dispatch(clearItem(item)),
    addItem: item => dispatch(addItems(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckOutItem);