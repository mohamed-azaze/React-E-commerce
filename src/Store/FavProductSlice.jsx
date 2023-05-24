import { createSlice } from "@reduxjs/toolkit";


const FavProductSlice = createSlice({
    name: "favProducts",
    initialState: { favProducts: [] },
    reducers: {
        addfavProduct: (state, action) => {
            const favproductsStorage = JSON.parse(localStorage.getItem("fav"))
            if (favproductsStorage) {
                localStorage.setItem("fav", JSON.stringify([...favproductsStorage, action.payload]))
                const favproductsCount = JSON.parse(localStorage.getItem("fav"))
                state.favProducts = []
                state.favProducts.push(...favproductsCount)
            } else {
                localStorage.setItem("fav", JSON.stringify([action.payload]))
                state.favProducts.push(...JSON.parse(localStorage.getItem("fav")))
            }
        },
        deleteFavProduct: (state, action) => {
            const favproductsStorage = JSON.parse(localStorage.getItem("fav"))
            localStorage.setItem("fav", JSON.stringify([...favproductsStorage.filter(favprod => favprod !== action.payload)]))
            const favproductsCount = JSON.parse(localStorage.getItem("fav"))
            state.favProducts = []
            state.favProducts.push(...favproductsCount)
        }
    }
})

export const { addfavProduct, deleteFavProduct } = FavProductSlice.actions
export default FavProductSlice.reducer