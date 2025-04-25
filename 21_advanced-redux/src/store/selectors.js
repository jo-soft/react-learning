export function cartSelector(state) {
    return state.cart
}

export const cartCountSelector = (state) => {
    const cartSlice = cartSelector(state)
    return Object.values(cartSlice.items).reduce((acc, item) => acc + item.quantity, 0)
}