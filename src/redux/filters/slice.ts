
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const filtersInitialState = {
    language: '',
    level: '',
    price: '',
};

type FilterKey = keyof typeof filtersInitialState;

const filtersSlice = createSlice({
    name: "filters",
    initialState: filtersInitialState,
    reducers: {
        changeFilter(state, action: PayloadAction<{ filter: FilterKey; value: string }>) {
            const { filter, value } = action.payload;
            state[filter] = value;
        },
    },
});


export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;