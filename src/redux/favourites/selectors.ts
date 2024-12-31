import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Teacher } from '../teachers/slice';

export const selectFavoritesState = (state: RootState) => state.favourite;

export const getTeacherKey = (teacher: Teacher): string =>
  `${teacher.name}-${teacher.surname}-${teacher.rating}`;

export const selectFavoriteTeachers = createSelector(
  selectFavoritesState,
  favoritesState => favoritesState.favourites
);

export const isTeacherFavorite = (teacher: Teacher) =>
  createSelector(selectFavoritesState, favoritesState => {
    const teacherKey = getTeacherKey(teacher);
    return favoritesState.favourites.some(
      fav => getTeacherKey(fav) === teacherKey
    );
  });
