
export const addItemToCart = (existingCartItems, itemToAdd) => {
    const existingItem = existingCartItems.find(
        existingCartItem => existingCartItem.id === itemToAdd.id
    )

    if(existingItem){
        return existingCartItems.map(
            existingCartItem => existingCartItem.id === itemToAdd.id 
            ?
            {...existingCartItem, quantity: existingCartItem.quantity +1 } 
            :
            existingCartItem
        )
    }

    return [...existingCartItems, {...itemToAdd, quantity: 1}]
}


export const removeItemFromCart = (cartItems, itemToRemove) =>{
    const existingItem = cartItems.find((cartItem) => cartItem.id===itemToRemove.id)
    if(existingItem){
        return cartItems.filter(
            cartItem => cartItem.id !== itemToRemove.id
        )
    }

    return [...cartItems]
}

export const removeItemByOne = (cartItems, itemtoRemove) => {
    const existingItem = cartItems.find(cartItem => (cartItem.id === itemtoRemove.id))

    if(existingItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== existingItem.id)
    }

    return cartItems.map(
        cartItem => cartItem.id ===existingItem.id ?
        {...cartItem, quantity: cartItem.quantity - 1 } 
        :
        cartItem
    )
    }