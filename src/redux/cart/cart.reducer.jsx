import {CartActionTypes} from './cart.types';
import {removeItemByOne, addItemToCart, removeItemFromCart} from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        
            case CartActionTypes.ADD_ITEMS:
                return{
                    ...state,
                    cartItems: addItemToCart(state.cartItems, action.payload)
                }
            
                case CartActionTypes.REMOVE_ITEM_FROM_CART:
                    return{
                        ...state,
                        cartItems: removeItemFromCart(state.cartItems, action.payload)
                    }

                case CartActionTypes.REMOVE_ITEM_BY_ONE:
                    return{
                        ...state,
                        cartItems: removeItemByOne(state.cartItems, action.payload)
                    }
        default:
            return state;

    }
}

export default cartReducer;