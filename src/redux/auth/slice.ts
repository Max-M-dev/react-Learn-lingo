import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut } from './operations';


const authInitialState = {
    user: {
        name: null as string | null,
        email: null as string | null,
    },
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
}


const authSlice = createSlice({
    name: "auth",
    initialState: authInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state) => {
                state.isLoggedIn = true;
            })
            .addCase(logIn.fulfilled, (state) => {
                state.isLoggedIn = true;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.isLoggedIn = false;
            })
    },
});

export const authReducer = authSlice.reducer;