import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const getAllOrder = createAsyncThunk("users/getAllOrder",
    async (_, thunkAPIs) => {
        const { rejectWithValue } = thunkAPIs;
        try {
            const res = await fetch(`http://localhost:4000/userCheckOut`);
            const data = await res.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })

export const addOrder = createAsyncThunk("users/addOrder",
    async (order, thunkAPIs) => {
        const { rejectWithValue } = thunkAPIs;
        try {
            const res = await fetch(`http://localhost:4000/userCheckOut`, {
                method: 'POST',
                body: JSON.stringify(order),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })

export const updateOrder = createAsyncThunk("users/updateOrder",
    async (order, thunkAPIs) => {
        const { rejectWithValue } = thunkAPIs;
        try {
            const res = await fetch(`http://localhost:4000/userCheckOut/${order.id}`, {
                method: 'PATCH',
                body: JSON.stringify(order),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })





const ordersSlice = createSlice({
    name: "orders",
    initialState: { orders: [], isLoading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllOrder.pending, (state, action) => {
            state.error = action.payload
        })
        builder.addCase(getAllOrder.fulfilled, (state, action) => {
            state.orders = action.payload
            state.isLoading = false
        })
        builder.addCase(getAllOrder.rejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false
        })
        builder.addCase(addOrder.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(addOrder.fulfilled, (state, action) => {
            state.orders.push(action.payload)
            state.isLoading = false
        })
        builder.addCase(addOrder.rejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false
        })
        builder.addCase(updateOrder.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(updateOrder.fulfilled, (state, action) => {
            state.orders.push(action.payload)
            state.isLoading = false
        })
        builder.addCase(updateOrder.rejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false
        })

    }
})
export default ordersSlice.reducer