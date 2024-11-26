
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { TeacherProps } from '../../components/Teacher/Teacher';

export const selectFavoritesState = (state: RootState) => state.favourite;

export const getTeacherKey = (teacher: TeacherProps): string => `${teacher.teacher?.name}-${teacher.teacher?.surname}-${teacher.teacher?.rating}`;

export const selectFavoriteTeachers = createSelector(
    selectFavoritesState,
    (favoritesState) => favoritesState.favourites
);

export const isTeacherFavorite = (teacher: TeacherProps) =>
    createSelector(
        selectFavoritesState,
        (favoritesState) => {
            const teacherKey = getTeacherKey(teacher);
            return favoritesState.favourites.some(
                (fav: TeacherProps) => getTeacherKey(fav) === teacherKey
            );
        }
    );