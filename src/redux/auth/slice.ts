import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from './operations';

const authInitialState = {
    user: {
        name: null as string | null,
        email: null as string | null,
    },
    accessToken: null as string | null,
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
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.accessToken = action.payload.accessToken;
                state.isLoggedIn = true;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.data.user;
                state.accessToken = action.payload.data.accessToken;
                state.isLoggedIn = true;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.accessToken = null;
                state.isLoggedIn = false;
            })
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload.data.user;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, (state) => {
                state.isRefreshing = false;
            });
    },
});

export const authReducer = authSlice.reducer;