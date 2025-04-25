import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    visible: false,
    items: {}
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggle(state) {
            state.visible = !state.visible
        },
        addToCart(state, action) {
            const quantity = (state.items[action.payload.title]?.quantity || 0) + 1;

            state.items = {
                ...state.items,
                [action.payload.title]: {
                    quantity,
                    total: quantity * action.payload.price,
                    price: action.payload.price
                }
            }
        },
        removeFromCart(state, action) {
            const quantity = state.items[action.payload].quantity - 1;

            if (quantity === 0) {
                delete state.items[action.payload]
            } else {
                state.items = {
                    ...state.items,
                    [action.payload]: {
                        ...state.items[action.payload],
                        quantity,
                        total: quantity * state.items[action.payload].price
                    }
                }
            }
        }
    }
})


export const cartActions = cartSlice.actions
export default cartSlice.reducer