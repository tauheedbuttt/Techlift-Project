import { createSlice } from "@reduxjs/toolkit";

const tollSlice = createSlice({
    name: "toll",
    initialState: {
        tolls: [],
    },
    reducers: {
        setTolls: (state, action) => {
            state.tolls = action.payload;
        },
        deleteToll: (state, action) => {
            state.tolls = state.tolls.filer(item => item.id != action.payload.id);
        },
        updateToll: (state, action) => {
            state.tolls = state.tolls.map(item => item.id == action.payload.id ? action.payload : item);
        },
        addToll: (state, action) => {
            state.tolls = [...state.tolls, action.payload];
        },
    },
});

export const { setTolls, deleteToll, updateToll, addToll } = tollSlice.actions;

export default tollSlice.reducer;
