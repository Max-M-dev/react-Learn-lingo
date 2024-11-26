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
import { favouritesReducer } from './favourites/slice';
import { useDispatch } from 'react-redux';

const authPersistConfig = {
    key: 'auth',
    storage,
};

const favouritePersistConfig = {
    key: 'favourite',
    storage,
};

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    teachers: teachersReducer,
    filters: filtersReducer,
    favourite: persistReducer(favouritePersistConfig, favouritesReducer),
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