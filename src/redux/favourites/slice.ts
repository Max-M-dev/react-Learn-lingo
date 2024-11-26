
import { createSlice } from "@reduxjs/toolkit";

import { TeacherProps } from "../../components/Teacher/Teacher";
import { getTeacherKey } from "./selectors";

export interface FavouriteState {
    favourites: TeacherProps[]; 
}

const favouriteInitialState: FavouriteState = {
    favourites: [],
};

const favouritesSlice = createSlice({
    name: 'favourites',
    initialState: favouriteInitialState,
    reducers: {
        toggleFavourite: (state, action) => {
            const teacher = action.payload;
            const key = getTeacherKey(teacher);
            const index = state.favourites.findIndex((fav: TeacherProps) => getTeacherKey(fav) === key);

            if (index !== -1) {
                state.favourites.splice(index, 1);
            } else {
                state.favourites.push(teacher);
            }
        },
    }
});

export const { toggleFavourite } = favouritesSlice.actions;
export const favouritesReducer = favouritesSlice.reducer;