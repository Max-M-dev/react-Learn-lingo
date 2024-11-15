
import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { fetchTeachers } from "./operations";
// import { fetchTeachersById } from "./operations";

export interface Teacher {
    id: string;
    name: string;
    language: string;
    level: string;
    price: string;
}

export interface TeachersState {
    items: Teacher[];
    isLoading: boolean;
    error: string | SerializedError | null;
    page: number;
    limit: number;
}

const teachersInitialState: TeachersState = {
    items: [],
    isLoading: false,
    error: null,
    page: 1,
    limit: 5,
};

const handlePending = (state: TeachersState) => {
    state.isLoading = true;
};

const handleRejected = (state: TeachersState, action: PayloadAction<unknown>) => {
    state.isLoading = false;
    state.error = action.payload as SerializedError;
};

const teachersSlice = createSlice({
    name: "teachers",
    initialState: teachersInitialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTeachers.pending, handlePending)
            .addCase(fetchTeachers.fulfilled, (state,  action: PayloadAction<Teacher[]>) => {
                state.isLoading = false;
                state.error = null;
                state.items = [...state.items, ...action.payload];
                // state.items = action.payload;
            })
            .addCase(fetchTeachers.rejected, handleRejected)
    },
});

export const teachersReducer = teachersSlice.reducer;