import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState={
    count: 0,
}
const updateCount =createSlice({
  name:'count',
  initialState,
  reducers:{
     incrementCount:(state, action: PayloadAction<number>) =>{
      state.count +=action.payload;
    }
  }
});

export const {incrementCount}= updateCount.actions; 
export  default updateCount.reducer;