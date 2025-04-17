import { createSlice } from "@reduxjs/toolkit";
import mockData from '../components/CardList/mockData'


export const initialState = mockData;

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        chooseCategory(state, action) {
            if (action.payload === 'all') {
                return initialState
            }
            else {
                return initialState.filter((el) => el.category === action.payload)
            }
        },
    }
})

export const {chooseCategory} = categoriesSlice.actions;
export default categoriesSlice.reducer;