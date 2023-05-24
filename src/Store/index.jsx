import { configureStore } from '@reduxjs/toolkit';
import products from './ProductSlice';
import users from './UsersSlice';
import favProducts from "./FavProductSlice"
import orders from "./CheckOutSlice"




export default configureStore({
    reducer: { products, users, favProducts, orders }
})

