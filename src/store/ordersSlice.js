import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';



const ordersSlice = createSlice({
    name: 'orders',
    initialState: [],
    reducers: {
        addOrder(state, action) {
            const newOrder = {... action.payload, id: uuidv4()};
            state.push(newOrder)
        },
        deleteOrder(state, action) {
            return state.filter((order) => order.id !== action.payload)
        }
    }
})

export const {addOrder, deleteOrder} = ordersSlice.actions;
export default ordersSlice.reducer;