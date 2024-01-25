import { configureStore } from "@reduxjs/toolkit";
import DetailSlice from "./Slices/slice";

const store = configureStore({
    reducer:{
        detail:DetailSlice.reducer
    }
})


export default store;