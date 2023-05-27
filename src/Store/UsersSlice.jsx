import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("users/getUsers",
    async (_, thunkAPIs) => {
        try {
            const res = await fetch(`https://raw.githubusercontent.com/mohamed-azaze/jsonAPI-products/main/db.json`);
            const data = await res.json();
            return data.users;
        } catch (error) {
            console.log(error.message)
        }
    })

export const addUser = createAsyncThunk("users/addUser",
    async (user, thunkAPIs) => {
        try {
            const res = await fetch(`https://raw.githubusercontent.com/mohamed-azaze/jsonAPI-products/main/db.json`, {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
            return data;
        } catch (error) {
            console.log(error.message)
        }
    })






const usersSlice = createSlice({
    name: "users",
    initialState: { users: [], error: null, },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addUser.pending, (state, action) => {
            state.error = null
        })
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.users.push(action.payload)
        })
        builder.addCase(addUser.rejected, (state, action) => {
            state.error = action.payload
        })
        builder.addCase(getUsers.pending, (state, action) => {
            state.error = null
        })
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
        builder.addCase(getUsers.rejected, (state, action) => {
            state.error = action.payload
        })
    }
})

export default usersSlice.reducer