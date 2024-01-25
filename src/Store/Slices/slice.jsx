import { createSlice } from "@reduxjs/toolkit";

const DetailSlice = createSlice({
    name:"ShowHideBox",
    initialState:"hide",
    reducers:{
        show(state,action) {return action.payload},
        hide(state,action) {return action.payload},
    }
})

export const {show} = DetailSlice.actions;
export const {hide} = DetailSlice.actions;
export default DetailSlice;