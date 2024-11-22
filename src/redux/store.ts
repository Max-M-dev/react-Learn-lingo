import { configureStore, combineReducers } from '@reduxjs/toolkit';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth/slice';
import { teachersReducer } from './teachers/slice';
import { filtersReducer } from './filters/slice';
import { useDispatch } from 'react-redux';

const persistConfig = {
    key: 'auth',
    storage,
};

const rootReducer = combineReducers({
    auth: persistReducer(persistConfig, authReducer),
    teachers: teachersReducer,
    filters: filtersReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);