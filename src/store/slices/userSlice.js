import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        id:"",
        name:"",
        phone:"",
        isSignedIn:false,
        isVerified:false,
        
    },
    reducers:{
        setUser(state,action){
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.phone = action.payload.phone;
            state.isSignedIn = action.payload.isSignedIn;
            state.isVerified = action.payload.isVerified;
        },
        setName(state,action){
            state.name = action.payload;
        },
        setId(state,action){
            state.id = action.payload;
        },
        setSignedIn(state,action){
            state.isSignedIn = action.payload;
        },
        setVerified(state,action){
            state.isVerified = action.payload;
        },
    }
});

export default userSlice.reducer;

export const { setUser,setId, setSignedIn, setVerified, setName } = userSlice.actions;
