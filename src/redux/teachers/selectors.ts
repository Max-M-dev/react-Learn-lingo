import { selectLanguageFilter } from '../filters/selectors';
import { selectLevelFilter } from '../filters/selectors';
import { selectPriceFilter } from '../filters/selectors';

import { RootState } from '../store';

import { createSelector } from '@reduxjs/toolkit';

import { SerializedError } from '@reduxjs/toolkit';
import { Teacher } from './slice';

export const selectError = (state: RootState): string | null => {
  const error: string | SerializedError | null = state.teachers.error;
  if (error === null) return null;
  return typeof error === 'string'
    ? error
    : error?.message || 'An unknown error occurred.';
};

export const selectTeachers = (state: RootState) => state.teachers.items;
export const selectLimit = (state: RootState) => state.teachers.limit;
export const selectPage = (state: RootState) => state.teachers.page;

export const selectIsLoading = (state: RootState) => state.teachers.isLoading;

export const selectFilteredTeachers = createSelector(
  [selectTeachers, selectLanguageFilter, selectLevelFilter, selectPriceFilter],
  function (teachers, languageFilter, levelFilter, priceFilter) {
    if (!Array.isArray(teachers)) {
      return [];
    }

    let result: Teacher[] = teachers;

    if (languageFilter) {
      result = filterLanguage(result, languageFilter);
    }
    if (levelFilter) {
      result = filterLevel(result, levelFilter);
    }
    if (priceFilter) {
      result = filterPrice(result, priceFilter);
    }
    return result;
  }
);

function filterLevel(teachers: Teacher[], value: string): Teacher[] {
  if (!value) return [];
  return teachers.filter(teacher => {
    const matchesLevel = teacher.levels
      ?.join(' ')
      .toLowerCase()
      .includes(value.toLowerCase());

    return matchesLevel;
  });
}

function filterLanguage(teachers: Teacher[], value: string): Teacher[] {
  if (!value) return [];
  return teachers.filter(teacher => {
    const matchesLanguage = teacher.languages
      ?.join(' ')
      .toLowerCase()
      .includes(value.toLowerCase());
    return matchesLanguage;
  });
}

function filterPrice(teachers: Teacher[], value: string): Teacher[] {
  if (!value) return [];
  return teachers.filter(teacher => {
    const matchesPrice = teacher.price_per_hour >= Number(value);
    return matchesPrice;
  });
}
