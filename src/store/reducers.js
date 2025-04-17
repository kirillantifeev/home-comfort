import { combineReducers } from "redux";
import ordersReducer from './ordersSlice'
import categoriesReducer from './categoriesSlice'
import productsReducer from './productsSlice'


export const rootReducer = combineReducers({
    orders: ordersReducer,
    categories: categoriesReducer,
    products: productsReducer,
})