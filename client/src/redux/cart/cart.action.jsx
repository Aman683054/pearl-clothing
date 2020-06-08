import {CartActionTypes} from './cart.types';

export const toggleCartHidden = () => (
    {
        type: CartActionTypes.TOGGLE_CART_HIDDEN

    }
)

export const addItems = item => ({
    type: CartActionTypes.ADD_ITEMS,
    payload: item
})


export const clearItem = item => ({
    type: CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item
})


export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM_BY_ONE,
    payload: item
})
