import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const getProducts = createAsyncThunk("product/getProducts",
    async (_, thunkAPIs) => {
        try {
            const res = await fetch("http://localhost:4000/products");
            const products = await res.json();
            return products;
        } catch (error) {
            console.log(error.message)
        }
    })


const productSLice = createSlice({
    name: "product",
    initialState: { products: [] },
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getProducts.pending, (state, action) => {
            state = action.payload
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        })
        builder.addCase(getProducts.rejected, (state, action) => {
            console.log(action)
        })
    }
})



export default productSLice.reducer;