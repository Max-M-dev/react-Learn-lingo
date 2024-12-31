import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getTeacherKey } from './selectors';
import { Teacher } from '../teachers/slice';

export interface FavouriteState {
  favourites: Teacher[];
}

const favouriteInitialState: FavouriteState = {
  favourites: [],
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: favouriteInitialState,
  reducers: {
    toggleFavourite: (state, action: PayloadAction<Teacher>) => {
      const teacher = action.payload;
      const key = getTeacherKey(teacher);
      const index = state.favourites.findIndex(
        favouriteTeacher => getTeacherKey(favouriteTeacher) === key
      );

      if (index !== -1) {
        state.favourites.splice(index, 1);
      } else {
        state.favourites.push(teacher);
      }
    },
  },
});

export const { toggleFavourite } = favouritesSlice.actions;
export const favouritesReducer = favouritesSlice.reducer;
