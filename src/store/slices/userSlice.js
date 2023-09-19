import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        name:"",
        phone:"",
        email:"",
        isSignedIn:false,
        isVerified:false,
        
    },
    reducers:{
        setUser(state,action){
            state.name = action.payload.name;
            state.phone = action.payload.phone;
            state.email = action.payload.email;
            state.isSignedIn = action.payload.isSignedIn;
            state.isVerified = action.payload.isVerified;
        },
        setSignedIn(state,action){
            state.isSignedIn = action.payload.isSignedIn;
        },
        setVerified(state,action){
            state.isVerified = action.payload.isVerified;
        },
    }
});

export default userSlice.reducer;

export const { setUser, setSignedIn, setVerified } = userSlice.actions;
