import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        increment(state,action){
            state.value += 1;
        },
        decrement(state,action){
            state.value -= 1;
        },setZero(state,action){
            state.value = 0;
        }
    }
});

export default counterSlice.reducer ;

export const { increment, decrement, setZero } = counterSlice.actions;