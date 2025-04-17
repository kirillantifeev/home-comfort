import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductsApi } from "../api/api";


const initialState = {
    products: [],
    loading: false,
    error: null
}

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (category) => {
        const products = await getProductsApi(category);
        return products;
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
    .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
    })
    .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка при получении данных'
    })
}})

export const selectProducts = (state) =>
    state.products.products;
export const selectProductsLoading = (state) =>
    state.products.loading;
export const selectProductsError = (state) =>
    state.products.error;

export default productsSlice.reducer;