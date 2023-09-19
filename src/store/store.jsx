import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./slices/counterSlice";
import cartSlice from "./slices/cartSlice";
import userSlice from "./slices/userSlice"; 
import wishListSlice from "./slices/wishListSlice";    
const store = configureStore({
    reducer: {
        counter: counterSlice,
        cart: cartSlice,
        user: userSlice,
        wishList: wishListSlice,
    },
});


export default store;