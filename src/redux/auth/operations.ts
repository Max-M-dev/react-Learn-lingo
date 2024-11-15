
import { createAsyncThunk} from '@reduxjs/toolkit';



import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import {auth} from "../../firebase";
import { toast } from 'react-hot-toast';
import { FormValues } from '../../components/LoginForm/LoginForm';


export const register = createAsyncThunk('auth/register',
    async (values: FormValues, {rejectWithValue}) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
            const user = userCredential.user;
            const accessToken = await user.getIdToken();
            return { 
                user: {
                    uid: user.uid,
                    email: user.email,
                },
                accessToken
            };
        } catch(error) {
            toast.error('Something went wrong :( Try again later.');
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }
            return rejectWithValue("An unknown error occurred.");
        }
    }
);


export const logIn = createAsyncThunk('auth/login',
    async (values: FormValues, {rejectWithValue}) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password)
            const user = userCredential.user;
            const accessToken = await user.getIdToken();
            return { 
                user: {
                    uid: user.uid,
                    email: user.email,
                },
                accessToken
            };
        } catch(error) {
            toast.error('Something went wrong :( Try again later.');
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }
            return rejectWithValue("An unknown error occurred.");
        }
    }
);

export const logOut = createAsyncThunk('auth/logout', async (_, {rejectWithValue}) => {
    try {
        await signOut(auth);
        return true;
    } catch(error) {
            toast.error('Something went wrong :( Try again later.');
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }
            return rejectWithValue("An unknown error occurred.");
        }
    }
);



