import { configureStore } from "@reduxjs/toolkit";
import updateCount from './counterSlice';

export const store =configureStore({
    reducer:{
        count:updateCount,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch= typeof store.dispatch;