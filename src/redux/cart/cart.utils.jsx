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