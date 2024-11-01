
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthCredentials, ErrorResponse, AuthResponse } from './types';
import { toast } from 'react-hot-toast';
import { RootState } from '../store';

axios.defaults.baseURL = 'https://phonebook-db-d0ot.onrender.com/';

const setAuthHeader = (accessToken: string) => {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('auth/register',
    async ({ name, email, password }: AuthCredentials, thunkAPI) => {
        try {
            const response = await axios.post('auth/register', { name, email, password });
            setAuthHeader(response.data.data.accessToken);
            return response.data;
        } catch (error) {
            toast.error('Something went wrong :( Try again later.');
            
            if (axios.isAxiosError(error) && error.response) {
                const errorMessage = (error.response.data as ErrorResponse).message;
                return thunkAPI.rejectWithValue(errorMessage);
            }
            return thunkAPI.rejectWithValue('An unknown error occurred');
        }
    }
);


export const logIn = createAsyncThunk<AuthResponse, AuthCredentials>(
    'auth/login',
    async ({ email, password }: AuthCredentials, thunkAPI) => {
        try {
            const response = await axios.post('auth/login', { email, password });
            console.log(response.data);
            setAuthHeader(response.data.data.accessToken);
            return response.data;
        } catch (error) {
            toast.error('Something went wrong :( Try again later.');

            if (axios.isAxiosError(error) && error.response) {
                const errorMessage = (error.response.data as ErrorResponse).message;
                console.log(error.response?.data);
                return thunkAPI.rejectWithValue(errorMessage);
            }
            
            return thunkAPI.rejectWithValue('An unknown error occurred');
        }
    }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('auth/logout');
        clearAuthHeader();
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
                const errorMessage = (error as ErrorResponse).message;
                return thunkAPI.rejectWithValue(errorMessage);
            }
            return thunkAPI.rejectWithValue('An unknown error occurred');
    }
});

export const refreshUser = createAsyncThunk<AuthResponse, void, { state: RootState; rejectValue: string}>('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;

    console.log(persistedToken);

    if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
        setAuthHeader(persistedToken);
        const response = await axios.get('auth/refresh');
        console.log(response.data);
        return response.data;
    } catch (error) {
        toast.error('Something went wrong :( Try to reload your page.');
        if (axios.isAxiosError(error) && error.response) {
                const errorMessage = (error as ErrorResponse).message;
                return thunkAPI.rejectWithValue(errorMessage);
            }
            return thunkAPI.rejectWithValue('An unknown error occurred');
    }
}
);